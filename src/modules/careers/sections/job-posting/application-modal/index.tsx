'use client'

import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { PhoneInputWithSearch } from '@/shared/components/phone-input-with-search'
import { isPhoneValid, hasNationalDigits } from '@/lib/helper'
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
  useTheme
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import BaseButton from '@/shared/button'
import styles from './modal.module.scss'
import SuccessMessage from './success-message'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { createApplication } from '@/store/features/applications/applications-actions'
import { resetSubmitSuccess } from '@/store/features/applications/applications-slice'


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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const dispatch = useAppDispatch()
  const { submitting, submitSuccess, error, submittedApplication } = useAppSelector((state) => state.applications)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<ApplicationFormData>()

  React.useEffect(() => {
    if (submitSuccess) {
      reset()
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
    reset()
    dispatch(resetSubmitSuccess())
    onClose()
  }

  const handleCancel = () => {
    reset()
    dispatch(resetSubmitSuccess())
    onClose()
  }

  const onSubmit = async (data: ApplicationFormData) => {
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

    dispatch(createApplication(formData))
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

  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
            sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}
          >
            {error && (
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
                pr: isMobile ? '8px' : '0.42vw'
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
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                <Box
                  component="input"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  {...register('resume', {
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
                  })}
                  className={`${styles.fileInput} ${errors.resume ? styles.errorBorder : ''}`}
                />
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

  )
}

export default ApplicationModal
