'use client'

import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { PhoneInputWithSearch } from '@/shared/components/phone-input-with-search'
import { isPhoneValid, hasNationalDigits, formatFileSize, EMAIL_REGEX } from '@/lib/helper'
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
  useTheme,
  Tooltip
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import BaseButton from '@/shared/button'
import styles from './modal.module.scss'
import SuccessMessage from './success-message'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { createApplication } from '@/store/features/applications/applications-actions'
import { resetSubmitSuccess } from '@/store/features/applications/applications-slice'
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
  useScrollLock(open, '[class*="formGrid"], [class*="MuiDialog-paper"]')
  const dispatch = useAppDispatch()
  const { submitting, submitSuccess, error, submittedApplication } = useAppSelector((state) => state.applications)
  const fileInputRef = React.useRef<HTMLInputElement | null>(null)
  const [isOfflineModalOpen, setIsOfflineModalOpen] = React.useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
    clearErrors,
    watch
  } = useForm<ApplicationFormData>()

  const selectedResume = watch('resume')
  const selectedFile = selectedResume && selectedResume.length > 0 ? selectedResume[0] : null

  React.useEffect(() => {
    if (submitSuccess) {
      reset()
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }, [submitSuccess, reset])

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey || e.metaKey) return
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'Unidentified']
    if (e.key.length > 1) {
      if (!allowedKeys.includes(e.key)) return
      return
    }
    if (!/^[0-9+\s-]$/.test(e.key)) {
      e.preventDefault()
    }
  }

  const handleClose = (event: {}, reason?: "backdropClick" | "escapeKeyDown") => {
    if (reason === 'backdropClick') {
      return
    }
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setValue('resume', undefined as any, { shouldValidate: false })
    clearErrors('resume')
  }

  const handleExited = () => {
    reset()
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    dispatch(resetSubmitSuccess())
  }

  const onSubmit = async (data: ApplicationFormData) => {
    if (typeof window !== 'undefined' && !navigator.onLine) {
      setIsOfflineModalOpen(true)
      return
    }

    const formData = new FormData()
    formData.append('name', data.fullName.trim())
    formData.append('email', data.email.trim())
    formData.append('phone', data.phone.trim())
    if (data.portfolioLink && data.portfolioLink.trim()) {
      formData.append('portfolioLink', data.portfolioLink.trim())
    }
    if (data.message && data.message.trim()) {
      formData.append('message', data.message.trim())
    }
    formData.append('job_posting', jobId)
    
    if (data.resume && data.resume.length > 0) {
      formData.append('resume', data.resume[0])
    }

    const result = await dispatch(createApplication(formData))
    if (createApplication.rejected.match(result)) {
      if (result.payload === 'NO_INTERNET' || (typeof window !== 'undefined' && !navigator.onLine)) {
        setIsOfflineModalOpen(true)
      }
    }
  }

  const getTextFieldStyles = () => ({
    '& .MuiOutlinedInput-root': {
      borderRadius: isMobile ? '8px' : 'max(8px, 0.42vw)',
      fontFamily: 'Poppins',
      backgroundColor: '#fbf9f9ff',
      fontSize: isMobile ? '14px' : 'max(14px, 0.73vw)',
      padding: 0,
      '& .MuiOutlinedInput-input': {
        padding: isMobile ? '8px 12px' : 'max(8px, 0.44vw) max(12px, 0.63vw) !important',
      },
      '&.MuiInputBase-multiline': {
        padding: isMobile ? '8px 12px' : 'max(8px, 0.44vw) max(12px, 0.63vw) !important',
        '& .MuiOutlinedInput-input': {
          padding: '0 !important',
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
      }
    }
  })

  const { ref: resumeFormRef, ...resumeRest } = register('resume', {
    required: 'Resume is required',
    validate: {
      fileType: (files: FileList) => {
        if (!files || files.length === 0) return 'Resume is required'
        const file = files[0]
        const allowedExtensions = ['.pdf', '.doc', '.docx']
        const fileName = file.name.toLowerCase()
        const hasValidExt = allowedExtensions.some((ext) => fileName.endsWith(ext))

        if (!hasValidExt) {
          return 'Only PDF and DOC/DOCX files are allowed'
        }
        return true
      },
    },
  })

  return (
    <>
      <Dialog
      open={open}
      onClose={handleClose}
      TransitionProps={{
        onExited: handleExited,
      }}
      fullScreen={isMobile}
      maxWidth={false}
      fullWidth
      PaperProps={{
        sx: {
          maxWidth: isMobile ? '100%' : 'max(550px, 28.65vw)',
          borderRadius: isMobile ? 0 : 'max(16px, 0.83vw)',
          padding: isMobile ? '16px' : 'max(24px, 1.25vw)',
          background: '#fff'
        }
      }}
    >
      <DialogTitle
        sx={{
          p: 0,
          mb: submitSuccess ? 0 : (isMobile ? '20px' : 'max(24px, 1.56vw)'),
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
              {jobTitle}
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
          overflow: 'hidden',
          overflowX: 'hidden',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {submitSuccess ? (
          <SuccessMessage
            jobTitle={jobTitle}
            tracking_id={submittedApplication?.tracking_id}
            onClose={handleCancel}
          />
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', overflowX: 'hidden' }}
          >
            {error && error !== 'NO_INTERNET' && (
              <Box
                sx={{
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
                overflowY: 'auto',
                overflowX: 'hidden',
                pr: isMobile ? 0 : '0.42vw',
                scrollbarWidth: isMobile ? 'none' : 'thin',
                '&::-webkit-scrollbar': isMobile
                  ? { display: 'none', width: 0, height: 0 }
                  : { width: 'max(4px, 0.21vw)' },
                '&::-webkit-scrollbar-thumb': {
                  background: '#E5E7EB',
                  borderRadius: isMobile ? 0 : 'max(10px, 0.52vw)',
                },
                msOverflowStyle: isMobile ? 'none' : 'auto',
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
                    pattern: {
                      value: EMAIL_REGEX,
                      message: 'Invalid email address'
                    },
                    validate: (val) => !val || val.trim().length > 0 || 'Email cannot be empty or whitespace'
                  })}
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
                        (value && hasNationalDigits(value)) || 'Phone number is required',
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
                      value={field.value || ''}
                      onChange={field.onChange}
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
                    validate: (val) => !val || val.trim().length > 0 || 'Link cannot contain only whitespace'
                  })}
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
                <Typography className={styles.label}>Resume / CV (Upload PDF/DOC)</Typography>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  style={{ display: 'none' }}
                  {...resumeRest}
                  ref={(e) => {
                    resumeFormRef(e)
                    fileInputRef.current = e
                  }}
                />
                <Box
                  onClick={() => {
                    if (!selectedFile) {
                      fileInputRef.current?.click()
                    }
                  }}
                  role={selectedFile ? undefined : 'button'}
                  tabIndex={selectedFile ? undefined : 0}
                  onKeyDown={(e) => {
                    if (!selectedFile && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault()
                      fileInputRef.current?.click()
                    }
                  }}
                  className={`${styles.customFileInput} ${errors.resume ? styles.errorBorder : ''}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: selectedFile ? 'default' : 'pointer',
                    minHeight: isMobile ? '38px' : 'max(38px, 2.1vw)'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : 'max(10px, 0.52vw)', minWidth: 0, flex: 1, pr: 1 }}>
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
                    {selectedFile ? (
                      <Tooltip title="Click to preview file in another tab" arrow placement="top">
                        <Box
                          onClick={(e) => {
                            e.stopPropagation()
                            previewFile(selectedFile)
                          }}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              e.stopPropagation()
                              previewFile(selectedFile)
                            }
                          }}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            minWidth: 0,
                            cursor: 'pointer',
                            borderRadius: '4px',
                            padding: '2px 4px',
                            transition: 'all 0.2s',
                            '&:hover': {
                              backgroundColor: 'rgba(246, 147, 51, 0.08)',
                              '& .file-name-text': {
                                color: '#F69333',
                                textDecoration: 'underline'
                              }
                            }
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
                            {selectedFile.name}
                          </Typography>
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
                            ({formatFileSize(selectedFile.size)})
                          </Box>
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
                  {selectedFile && (
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
                {errors.resume && <FormHelperText className={styles.errorText} error>{errors.resume.message}</FormHelperText>}
              </FormControl>

              <FormControl error={!!errors.message} fullWidth>
                <Typography className={styles.label}>Why are you a good fit? (Optional)</Typography>
                <TextField
                  {...register('message', {
                    maxLength: { value: 800, message: 'Message cannot exceed 800 characters' },
                    validate: (val) => !val || val.trim().length > 0 || 'Message cannot contain only whitespace'
                  })}
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
                mt: isMobile ? '16px' : 'auto',
                pt: isMobile ? '16px' : '1.04vw',
                pb: isMobile ? '16px' : 0,
                px: isMobile ? '16px' : 0,
                borderTop: isMobile ? '1px solid #F3F4F6' : '0.05vw solid #F3F4F6',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: isMobile ? '12px' : '1.04vw',
                background: '#fff',
                position: isMobile ? 'sticky' : 'relative',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 10
              }}
            >
              <BaseButton
                type="button"
                variant="text"
                onClick={handleCancel}
                className={styles.cancelBtn}
              >
                CANCEL
              </BaseButton>
              <BaseButton
                type="submit"
                variant="contained"
                className={styles.submitBtn}
                loading={submitting}
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
  </>
  )
}

export default ApplicationModal
