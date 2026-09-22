'use client'

import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { PhoneInputWithSearch } from '@/shared/components/phone-input-with-search'
import { isPhoneValid, hasNationalDigits, formatFileSize, validateEmail, normalizeWhitespace, normalizeMultilineText, isValidUrl } from '@/lib/helper'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  useMediaQuery,
  Tooltip,
  Snackbar,
  Alert,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import BaseButton from '@/shared/button'
import styles from './modal.module.scss'
import SuccessMessage from './success-message'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { createApplication } from '@/store/features/applications/applications-actions'
import { resetSubmitSuccess, setApplicationModalOpen, setSubmittingJob, setCurrentSubmittingData } from '@/store/features/applications/applications-slice'
import { previewFile } from '@/lib/file-preview'
import NoInternetModal from '@/shared/components/no-internet-modal'
import { useScrollLock } from '@/hooks/use-scroll-lock'


interface ApplicationModalProps {
  open: boolean
  onClose: () => void
  jobTitle: string
  jobId: string
}

type ApplicationFormData = {
  fullName: string
  email: string
  phone: string
  portfolioLink: string
  resume: FileList
  message: string
}

const ApplicationModal = ({ open, onClose, jobTitle, jobId }: ApplicationModalProps) => {
  const isMobile = useMediaQuery('(max-width:768px)')
  useScrollLock(open, '[class*="formGrid"], [class*="MuiDialog-paper"], .country-list-scroll, [class*="MuiPopover-paper"]')
  const dispatch = useAppDispatch()
  const { submitting, submitSuccess, error, submittedApplication, submittingJob, currentSubmittingData } = useAppSelector((state) => state.applications)
  const isSubmittingInProgress = Boolean(submitting && currentSubmittingData)
  const fileInputRef = React.useRef<HTMLInputElement | null>(null)
  const [isOfflineModalOpen, setIsOfflineModalOpen] = React.useState(false)
  const [fileSizeErrorToast, setFileSizeErrorToast] = React.useState<string | null>(null)
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm<ApplicationFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      portfolioLink: '',
      message: '',
    },
  })

  const isOpenRef = React.useRef(open)
  React.useEffect(() => {
    isOpenRef.current = open
    dispatch(setApplicationModalOpen(open))
    if (open) {
      if (isSubmittingInProgress && currentSubmittingData) {
        reset({
          fullName: currentSubmittingData.fullName || '',
          email: currentSubmittingData.email || '',
          phone: currentSubmittingData.phone || '',
          portfolioLink: currentSubmittingData.portfolioLink || '',
          message: currentSubmittingData.message || '',
        })
      } else if (!submitting && !submitSuccess) {
        reset({
          fullName: '',
          email: '',
          phone: '',
          portfolioLink: '',
          message: '',
        })
        setSelectedFile(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
        clearErrors()
      }
    }
    return () => {
      dispatch(setApplicationModalOpen(false))
    }
  }, [open, dispatch, submitting, submitSuccess, clearErrors, isSubmittingInProgress, currentSubmittingData, reset])

  const handleNameKeyDown = (e: React.KeyboardEvent<any>) => {
    if (e.ctrlKey || e.metaKey) return
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', ' ', 'Unidentified']
    if (e.key.length > 1) {
      if (!allowedKeys.includes(e.key)) return
      return
    }
    if (!/^[a-zA-Z\s]$/.test(e.key)) {
      e.preventDefault()
    }
  }

  const handleMessageKeyDown = (e: React.KeyboardEvent<any>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLTextAreaElement
      const cursorPos = target?.selectionStart ?? 0
      const val = target?.value || ''
      const charBefore = cursorPos > 0 ? val[cursorPos - 1] : ''
      const charAfter = cursorPos < val.length ? val[cursorPos] : ''

      if (charBefore === '\n' || charBefore === '\r' || charAfter === '\n' || charAfter === '\r') {
        e.preventDefault()
      }
    }
  }

  const handleClose = (_event: unknown, reason?: "backdropClick" | "escapeKeyDown") => {
    if (reason === 'backdropClick') {
      return
    }
    handleCancel()
  }

  const handleCancel = () => {
    if (!submitting) {
      reset({
        fullName: '',
        email: '',
        phone: '',
        portfolioLink: '',
        message: '',
      })
      setSelectedFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      clearErrors()
      setFileSizeErrorToast(null)
    }
    onClose()
  }

  const handleExited = () => {
    if (submitSuccess) {
      dispatch(resetSubmitSuccess())
    }
    reset({
      fullName: '',
      email: '',
      phone: '',
      portfolioLink: '',
      message: '',
    })
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    clearErrors()
    setFileSizeErrorToast(null)
  }

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (submitting) return
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setSelectedFile(null)
    clearErrors('resume')
  }

  const onSubmit = async (data: ApplicationFormData) => {
    if (submitting) {
      return
    }

    if (!selectedFile) {
      setError('resume', {
        type: 'manual',
        message: 'Resume is required'
      })
      return
    }

    if (typeof window !== 'undefined' && !navigator.onLine) {
      setIsOfflineModalOpen(true)
      return
    }

    const formData = new FormData()
    formData.append('name', normalizeWhitespace(data.fullName))
    formData.append('email', data.email.trim())
    formData.append('phone', data.phone.trim())
    if (data.portfolioLink && data.portfolioLink.trim()) {
      formData.append('portfolioLink', data.portfolioLink.trim())
    }
    if (data.message && data.message.trim()) {
      formData.append('message', normalizeMultilineText(data.message))
    }
    formData.append('job_posting', jobId)
    formData.append('resume', selectedFile)

    const submittedDataSnapshot = {
      fullName: normalizeWhitespace(data.fullName),
      email: data.email.trim(),
      phone: data.phone.trim(),
      portfolioLink: data.portfolioLink?.trim() || '',
      message: data.message ? normalizeMultilineText(data.message) : '',
      fileName: selectedFile.name,
      fileSize: selectedFile.size,
    }

    dispatch(setCurrentSubmittingData(submittedDataSnapshot))
    dispatch(setSubmittingJob({ id: jobId, title: jobTitle }))
    const result = await dispatch(createApplication(formData))
    dispatch(setCurrentSubmittingData(null))
    if (createApplication.fulfilled.match(result)) {
      if (!isOpenRef.current) {
        // User closed the modal while application was submitting in background
        dispatch(resetSubmitSuccess())
      }
    } else if (createApplication.rejected.match(result)) {
      if (result.payload === 'NO_INTERNET' || (typeof window !== 'undefined' && !navigator.onLine)) {
        setIsOfflineModalOpen(true)
      }
    }
  }

  const getTextFieldStyles = () => ({
    '& .MuiOutlinedInput-root': {
      borderRadius: isMobile ? '8px' : 'max(8px, 0.42vw)',
      fontFamily: "'Poppins', sans-serif !important",
      backgroundColor: '#fbf9f9ff',
      fontSize: isMobile ? '14px' : 'max(14px, 0.73vw)',
      padding: 0,
      '& .MuiOutlinedInput-input': {
        fontFamily: "'Poppins', sans-serif !important",
        padding: isMobile ? '8px 12px' : 'max(8px, 0.44vw) max(12px, 0.63vw) !important',
        '&::placeholder': {
          fontFamily: "'Poppins', sans-serif !important",
          opacity: 0.65,
        },
      },
      '&.MuiInputBase-multiline': {
        padding: isMobile ? '8px 12px' : 'max(8px, 0.44vw) max(12px, 0.63vw) !important',
        '& .MuiOutlinedInput-input': {
          fontFamily: "'Poppins', sans-serif !important",
          padding: '0 !important',
          '&::placeholder': {
            fontFamily: "'Poppins', sans-serif !important",
            opacity: 0.65,
          },
        },
      },
      '& fieldset': {
        borderColor: '#E5E7EB'
      },
      '&:hover fieldset': {
        borderColor: '#F69333'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#F69333'
      },
      '&.Mui-error fieldset': {
        borderColor: '#d32f2f'
      },
      '&.Mui-disabled': {
        opacity: 0.7,
        '& fieldset': {
          borderColor: '#E5E7EB !important',
        },
        '& .MuiOutlinedInput-input': {
          WebkitTextFillColor: '#6B7280 !important',
          color: '#6B7280 !important',
          cursor: 'not-allowed !important',
        },
      },
    }
  })

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      const maxSizeBytes = 10 * 1024 * 1024 // 10MB
      if (file.size > maxSizeBytes) {
        setFileSizeErrorToast(`File size (${formatFileSize(file.size)}) exceeds 10MB limit. Please upload a file under 10MB.`)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
        setSelectedFile(null)
        setError('resume', {
          type: 'manual',
          message: `File size must be under 10MB (selected: ${formatFileSize(file.size)})`
        })
        return
      }

      const allowedExtensions = ['.pdf', '.doc', '.docx']
      const fileName = (file.name || '').toLowerCase()
      const hasValidExt = allowedExtensions.some((ext) => fileName.endsWith(ext))
      if (!hasValidExt) {
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
        setSelectedFile(null)
        setError('resume', {
          type: 'manual',
          message: 'Only PDF and DOC/DOCX files are allowed'
        })
        return
      }

      setFileSizeErrorToast(null)
      clearErrors('resume')
      setSelectedFile(file)
    } else {
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      setSelectedFile(null)
    }
  }

  return (
    <>
      <Dialog
      open={open}
      onClose={handleClose}
      TransitionProps={{
        onExited: handleExited,
      }}
      disableScrollLock={true}
      disableRestoreFocus={true}
      disableAutoFocus={true}
      sx={{
        zIndex: 200000,
        '& .MuiDialog-container': {
          p: isMobile ? 0 : 'max(24px, 1.5vw)',
          alignItems: isMobile ? 'stretch' : 'center',
          scrollbarWidth: 'none !important',
          msOverflowStyle: 'none !important',
          '&::-webkit-scrollbar': {
            display: 'none !important',
            width: '0 !important',
            height: '0 !important',
          },
        },
      }}
      fullScreen={isMobile}
      maxWidth={false}
      fullWidth
      PaperProps={{
        sx: {
          maxWidth: isMobile ? '100%' : 'max(550px, 28.65vw)',
          maxHeight: isMobile ? '100%' : 'calc(100vh - max(110px, 6.5vw))',
          borderRadius: isMobile ? 0 : 'max(16px, 0.83vw)',
          padding: isMobile ? '16px' : 'max(24px, 1.25vw)',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          scrollbarWidth: 'none !important',
          msOverflowStyle: 'none !important',
          '&::-webkit-scrollbar': {
            display: 'none !important',
            width: '0 !important',
            height: '0 !important',
          },
        }
      }}
    >
      <DialogTitle
        sx={{
          p: 0,
          flexShrink: 0,
          mb: submitSuccess ? 0 : (isMobile ? '16px' : 'max(16px, 1.0vw)'),
          display: 'flex',
          justifyContent: submitSuccess ? 'flex-end' : 'space-between',
          alignItems: 'center'
        }}
      >
        {!submitSuccess && (
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#111827',
                fontFamily: 'Poppins',
                fontSize: isMobile ? '20px' : 'max(24px, 1.25vw)'
              }}
            >
              Apply for Position
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: '#F69333',
                fontWeight: 600,
                fontSize: isMobile ? '14px' : 'max(16px, 0.83vw)'
              }}
            >
              {submittingJob?.title || jobTitle}
            </Typography>
          </Box>
        )}
        <IconButton onClick={handleCancel} sx={{ color: '#6B7280' }}>
          <CloseIcon sx={{ fontSize: isMobile ? '24px' : 'max(24px, 1.25vw)' }} />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minHeight: 0,
          overflow: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': { display: 'none', width: 0, height: 0 },
        }}
      >
        {submitSuccess ? (
          <SuccessMessage
            jobTitle={submittedApplication?.job_posting?.role || submittingJob?.title || jobTitle}
            tracking_id={submittedApplication?.tracking_id}
            onClose={handleCancel}
          />
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, height: '100%', overflow: 'hidden' }}
          >
            {error && error !== 'NO_INTERNET' && (
              <Box
                sx={{
                  flexShrink: 0,
                  mb: isMobile ? '16px' : '1.04vw',
                  p: isMobile ? '16px' : '1.04vw',
                  bgcolor: '#FEE2E2',
                  borderRadius: isMobile ? '8px' : '0.42vw',
                  border: isMobile ? '1px solid #FCA5A5' : '0.05vw solid #FCA5A5'
                }}
              >
                <Typography
                  sx={{
                    color: '#DC2626',
                    fontSize: isMobile ? '14px' : '0.73vw',
                    fontFamily: 'Poppins'
                  }}
                >
                  {error}
                </Typography>
              </Box>
            )}

            <Box
              className={styles.formGrid}
              sx={{
                flex: 1,
                minHeight: 0,
                overflowY: 'auto !important',
                overflowX: 'hidden !important',
                pr: 0,
                scrollbarWidth: 'none !important',
                msOverflowStyle: 'none !important',
                '&::-webkit-scrollbar': {
                  display: 'none !important',
                  width: '0 !important',
                  height: '0 !important',
                },
              }}
            >
              <FormControl error={!!errors.fullName} fullWidth>
                <Typography className={styles.label}>Full Name</Typography>
                <TextField
                  {...register('fullName', {
                    required: 'Full name is required',
                    maxLength: { value: 50, message: 'Full name cannot exceed 50 characters' },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: 'Only alphabetic characters are allowed'
                    },
                    validate: (val) => !val || val.trim().length > 0 || 'Full name cannot be empty or whitespace'
                  })}
                  disabled={submitting}
                  onKeyDown={handleNameKeyDown}
                  slotProps={{ htmlInput: { maxLength: 50 } }}
                  placeholder="Enter your full name"
                  variant="outlined"
                  error={!!errors.fullName}
                  fullWidth
                  size="small"
                  sx={getTextFieldStyles()}
                />
                {errors.fullName && <FormHelperText className={styles.errorText} error>{errors.fullName.message}</FormHelperText>}
              </FormControl>

              <FormControl error={!!errors.email} fullWidth>
                <Typography className={styles.label}>Email Address</Typography>
                <TextField
                  {...register('email', {
                    required: 'Email is required',
                    maxLength: { value: 50, message: 'Email address cannot exceed 50 characters' },
                    validate: {
                      notEmptyOrWhitespace: (val) =>
                        !val || val.trim().length > 0 || 'Email cannot be empty or whitespace',
                      validEmail: (val) => {
                        if (!val || val.trim().length === 0) return true
                        return validateEmail(val) || 'Invalid email address'
                      },
                    },
                  })}
                  disabled={submitting}
                  slotProps={{ htmlInput: { maxLength: 50 } }}
                  placeholder="Enter your email"
                  variant="outlined"
                  error={!!errors.email}
                  fullWidth
                  size="small"
                  sx={getTextFieldStyles()}
                />
                {errors.email && <FormHelperText className={styles.errorText} error>{errors.email.message}</FormHelperText>}
              </FormControl>

              <FormControl error={!!errors.phone} fullWidth>
                <Typography className={styles.label}>Phone Number</Typography>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: 'Phone number is required',
                    validate: {
                      hasDigits: (value) =>
                        !value || hasNationalDigits(value) || 'Phone number is required',
                      validPhone: (value) =>
                        !value ||
                        !hasNationalDigits(value) ||
                        isPhoneValid(value) ||
                        'Please enter a valid phone number for the selected country',
                    },
                  }}
                  render={({ field }) => (
                    <PhoneInputWithSearch
                      defaultCountry="in"
                      placeholder="Your Phone"
                      value={field.value || ''}
                      onChange={field.onChange}
                      disabled={submitting}
                      error={!!errors.phone}
                      height={isMobile ? '38px' : 'max(38px, 2.1vw)'}
                      borderRadius={isMobile ? '8px' : 'max(8px, 0.42vw)'}
                      backgroundColor="#fbf9f9ff"
                    />
                  )}
                />
                {errors.phone && <FormHelperText className={styles.errorText} error>{errors.phone.message}</FormHelperText>}
              </FormControl>

              <FormControl error={!!errors.portfolioLink} fullWidth>
                <Typography className={styles.label}>Portfolio / LinkedIn Link (Optional)</Typography>
                <TextField
                  {...register('portfolioLink', {
                    maxLength: { value: 256, message: 'Link cannot exceed 256 characters' },
                    validate: {
                      noWhitespace: (val) => !val || val.trim().length > 0 || 'Link cannot contain only whitespace',
                      validUrl: (val) => !val || !val.trim() || isValidUrl(val) || 'Please enter a valid URL.',
                    }
                  })}
                  disabled={submitting}
                  slotProps={{ htmlInput: { maxLength: 256 } }}
                  placeholder="https://..."
                  variant="outlined"
                  error={!!errors.portfolioLink}
                  fullWidth
                  size="small"
                  sx={getTextFieldStyles()}
                />
                {errors.portfolioLink && <FormHelperText className={styles.errorText} error>{errors.portfolioLink.message}</FormHelperText>}
              </FormControl>

              <FormControl error={!!errors.resume} fullWidth>
                <Typography className={styles.label}>Resume / CV (Upload PDF/DOC • Max 10MB)</Typography>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  style={{ display: 'none' }}
                  onChange={handleFileInputChange}
                  ref={fileInputRef}
                  disabled={submitting}
                />
                {(() => {
                  const displayedFileName = submitting
                    ? (currentSubmittingData?.fileName || selectedFile?.name || null)
                    : (selectedFile?.name || null)

                  const displayedFileSize = submitting
                    ? (currentSubmittingData?.fileSize ? formatFileSize(currentSubmittingData.fileSize) : (selectedFile?.size ? formatFileSize(selectedFile.size) : null))
                    : (selectedFile?.size ? formatFileSize(selectedFile.size) : null)

                  return (
                    <Box
                      onClick={() => {
                        if (!submitting && !selectedFile) {
                          fileInputRef.current?.click()
                        }
                      }}
                      role={(!submitting && !selectedFile) ? 'button' : undefined}
                      tabIndex={(!submitting && !selectedFile) ? 0 : undefined}
                      onKeyDown={(e) => {
                        if (!submitting && !selectedFile && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault()
                          fileInputRef.current?.click()
                        }
                      }}
                      className={`${styles.customFileInput} ${errors.resume ? styles.errorBorder : ''}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: submitting ? 'not-allowed' : (selectedFile ? 'default' : 'pointer'),
                        opacity: submitting ? 0.7 : 1,
                        minHeight: isMobile ? '38px' : 'max(38px, 2.1vw)'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : 'max(10px, 0.52vw)', minWidth: 0, flex: 1, pr: 1 }}>
                        {!submitting && (
                          <Box
                            component="span"
                            className={styles.fileButton}
                            onClick={(e) => {
                              if (selectedFile) {
                                e.stopPropagation()
                                fileInputRef.current?.click()
                              }
                            }}
                            sx={{ cursor: 'pointer' }}
                            title={selectedFile ? 'Change file' : 'Choose file'}
                          >
                            {selectedFile ? 'Change' : 'Choose File'}
                          </Box>
                        )}
                        {displayedFileName ? (
                          <Tooltip title={displayedFileName} arrow placement="top">
                            <Box
                              onClick={(e) => {
                                if (!submitting && selectedFile) {
                                  e.stopPropagation()
                                  previewFile(selectedFile)
                                }
                              }}
                              role={(!submitting && selectedFile) ? 'button' : undefined}
                              tabIndex={(!submitting && selectedFile) ? 0 : undefined}
                              onKeyDown={(e) => {
                                if (!submitting && selectedFile && (e.key === 'Enter' || e.key === ' ')) {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  previewFile(selectedFile)
                                }
                              }}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                minWidth: 0,
                                cursor: (!submitting && selectedFile) ? 'pointer' : 'default',
                                borderRadius: '4px',
                                transition: 'all 0.2s',
                                '&:hover': (!submitting && selectedFile) ? {
                                  '& .file-name-text': {
                                    color: '#F69333',
                                    textDecoration: 'underline'
                                  }
                                } : {}
                              }}
                            >
                              <Typography
                                className="file-name-text"
                                sx={{
                                  fontFamily: 'Poppins',
                                  fontSize: isMobile ? '13px' : 'max(13px, 0.68vw)',
                                  color: '#1F2937',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                  fontWeight: 500,
                                  transition: 'color 0.2s'
                                }}
                              >
                                {displayedFileName}
                              </Typography>
                              {displayedFileSize && (
                                <Box
                                  component="span"
                                  sx={{
                                    ml: '6px',
                                    color: '#6B7280',
                                    fontSize: isMobile ? '12px' : 'max(12px, 0.63vw)',
                                    fontWeight: 400,
                                    whiteSpace: 'nowrap'
                                  }}
                                >
                                  ({displayedFileSize})
                                </Box>
                              )}
                            </Box>
                          </Tooltip>
                        ) : (
                          <Typography
                            sx={{
                              fontFamily: 'Poppins',
                              fontSize: isMobile ? '13px' : 'max(13px, 0.68vw)',
                              color: '#9CA3AF',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              fontWeight: 400
                            }}
                          >
                            No file chosen
                          </Typography>
                        )}
                      </Box>
                      {!submitting && selectedFile && (
                        <Tooltip title="Remove file" arrow placement="top">
                          <IconButton
                            size="small"
                            onClick={handleRemoveFile}
                            aria-label="Remove selected file"
                            sx={{
                              p: '4px',
                              color: '#6B7280',
                              '&:hover': {
                                color: '#DC2626',
                                backgroundColor: 'rgba(220, 38, 38, 0.08)'
                              }
                            }}
                          >
                            <CloseIcon sx={{ fontSize: isMobile ? '18px' : 'max(18px, 0.94vw)' }} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  )
                })()}
                {errors.resume && <FormHelperText className={styles.errorText} error>{errors.resume.message}</FormHelperText>}
              </FormControl>

              <FormControl error={!!errors.message} fullWidth>
                <Typography className={styles.label}>Why are you a good fit? (Optional)</Typography>
                <TextField
                  {...register('message', {
                    maxLength: { value: 800, message: 'Message cannot exceed 800 characters' },
                    validate: (val) => !val || val.trim().length > 0 || 'Message cannot contain only whitespace'
                  })}
                  disabled={submitting}
                  onKeyDown={handleMessageKeyDown}
                  slotProps={{ htmlInput: { maxLength: 800 } }}
                  placeholder="Tell us about yourself and why you're interested in this role..."
                  multiline
                  rows={4}
                  variant="outlined"
                  error={!!errors.message}
                  fullWidth
                  sx={getTextFieldStyles()}
                />
                {errors.message && <FormHelperText className={styles.errorText} error>{errors.message.message}</FormHelperText>}
              </FormControl>
            </Box>

            <Box
              sx={{
                flexShrink: 0,
                width: '100%',
                mt: 'auto',
                pt: isMobile ? '14px' : 'max(14px, 0.9vw)',
                pb: 0,
                px: 0,
                borderTop: isMobile ? '1px solid #F3F4F6' : '0.05vw solid #F3F4F6',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: isMobile ? '12px' : '1.04vw',
                background: '#fff',
                zIndex: 10,
              }}
            >
              <BaseButton
                type="button"
                variant="text"
                onClick={handleCancel}
                className={styles.cancelBtn}
                disabled={submitting}
              >
                CANCEL
              </BaseButton>
              <BaseButton
                type="submit"
                variant="contained"
                className={styles.submitBtn}
                loading={submitting}
                disabled={submitting}
                showArrow={false}
              >
                SUBMIT APPLICATION
              </BaseButton>
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>

    <NoInternetModal
      open={isOfflineModalOpen}
      onClose={() => setIsOfflineModalOpen(false)}
    />

    {/* File size warning toast (Center Top) */}
    <Snackbar
      open={Boolean(fileSizeErrorToast)}
      autoHideDuration={5000}
      onClose={() => setFileSizeErrorToast(null)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{ zIndex: 250000 }}
    >
      <Alert
        severity="error"
        variant="filled"
        action={
          <IconButton
            aria-label="close"
            size="small"
            onClick={() => setFileSizeErrorToast(null)}
            sx={{
              backgroundColor: '#ffffff !important',
              color: '#DC2626 !important',
              width: isMobile ? '24px' : '26px',
              height: isMobile ? '24px' : '26px',
              minWidth: isMobile ? '24px' : '26px',
              minHeight: isMobile ? '24px' : '26px',
              borderRadius: '50%',
              p: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
              flexShrink: 0,
              '&:hover': {
                backgroundColor: '#ffffff !important',
                color: '#991B1B !important',
                transform: 'scale(1.08)',
              },
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block' }}
            >
              <path
                d="M2 2L10 10M2 10L10 2"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
        }
        sx={{
          width: '100%',
          maxWidth: '480px',
          fontFamily: 'Poppins, sans-serif !important',
          fontSize: isMobile ? '13px' : 'max(14px, 0.73vw)',
          fontWeight: 500,
          borderRadius: '8px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
          backgroundColor: '#DC2626 !important',
          color: '#ffffff !important',
          display: 'flex',
          alignItems: 'center',
          py: isMobile ? '8px' : '10px',
          px: isMobile ? '12px' : '16px',
          '& .MuiAlert-icon': {
            color: '#ffffff !important',
            alignSelf: 'center',
            p: 0,
            mr: '12px',
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiAlert-message': {
            p: 0,
            flex: 1,
            fontFamily: 'Poppins, sans-serif !important',
            lineHeight: 1.4,
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiAlert-action': {
            p: 0,
            ml: '14px',
            mr: 0,
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        {fileSizeErrorToast}
      </Alert>
    </Snackbar>

  </>
  )
}

export default ApplicationModal
