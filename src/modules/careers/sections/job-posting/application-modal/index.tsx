'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
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
    formState: { errors },
    reset
  } = useForm<ApplicationFormData>()

  React.useEffect(() => {
    if (submitSuccess) {
      reset()
      setTimeout(() => {
        onClose()
        dispatch(resetSubmitSuccess())
      }, 3000)
    }
  }, [submitSuccess, onClose, reset, dispatch])

  const handleCancel = () => {
    reset()
    onClose()
  }

  const onSubmit = async (data: ApplicationFormData) => {
    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      document: data.resume?.[0]?.name || '',
      job_posting: jobId
    }

    dispatch(createApplication(payload))
  }

  const getTextFieldStyles = () => ({
    '& .MuiOutlinedInput-root': {
      borderRadius: isMobile ? '8px' : '0.42vw',
      fontFamily: 'Poppins',
      backgroundColor: '#F9FAFB',
      fontSize: isMobile ? '14px' : '0.73vw',
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
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: isMobile ? 0 : '0.83vw',
          padding: isMobile ? '16px' : '1.25vw',
          background: '#fff'
        }
      }}
    >
      <DialogTitle
        sx={{
          p: 0,
          mb: isMobile ? '20px' : '1.56vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#111827',
              fontFamily: 'Poppins',
              fontSize: isMobile ? '20px' : '1.25vw'
            }}
          >
            Apply for Position
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#F69333',
              fontWeight: 600,
              fontSize: isMobile ? '14px' : '0.83vw'
            }}
          >
            {jobTitle}
          </Typography>
        </Box>
        <IconButton onClick={handleCancel} sx={{ color: '#6B7280' }}>
          <CloseIcon sx={{ fontSize: isMobile ? '24px' : '1.25vw' }} />
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
        {submitSuccess ? <SuccessMessage jobTitle={jobTitle} tracking_id={submittedApplication?.tracking_id} /> : (
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
                  {...register('fullName', { required: 'Full name is required' })}
                  placeholder="Enter your full name"
                  variant="outlined"
                  error={!!errors.fullName}
                  fullWidth
                  size="small"
                  sx={getTextFieldStyles()}
                />
                {errors.fullName && <FormHelperText error>{errors.fullName.message}</FormHelperText>}
              </FormControl>

              <FormControl error={!!errors.email} fullWidth>
                <Typography className={styles.label}>Email Address</Typography>
                <TextField
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="Enter your email"
                  variant="outlined"
                  error={!!errors.email}
                  fullWidth
                  size="small"
                  sx={getTextFieldStyles()}
                />
                {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
              </FormControl>

              <FormControl error={!!errors.phone} fullWidth>
                <Typography className={styles.label}>Phone Number</Typography>
                <TextField
                  {...register('phone', { required: 'Phone number is required' })}
                  placeholder="Enter your phone number"
                  variant="outlined"
                  error={!!errors.phone}
                  fullWidth
                  size="small"
                  sx={getTextFieldStyles()}
                />
                {errors.phone && <FormHelperText error>{errors.phone.message}</FormHelperText>}
              </FormControl>

              <FormControl error={!!errors.portfolioLink} fullWidth>
                <Typography className={styles.label}>Portfolio / LinkedIn Link</Typography>
                <TextField
                  {...register('portfolioLink')}
                  placeholder="https://..."
                  variant="outlined"
                  error={!!errors.portfolioLink}
                  fullWidth
                  size="small"
                  sx={getTextFieldStyles()}
                />
              </FormControl>

              <FormControl error={!!errors.resume} fullWidth>
                <Typography className={styles.label}>Resume / CV (Upload PDF/DOC)</Typography>
                <Box
                  component="input"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  {...register('resume', { required: 'Resume is required' })}
                  className={`${styles.fileInput} ${errors.resume ? styles.errorBorder : ''}`}
                />
                {errors.resume && <FormHelperText error>{errors.resume.message}</FormHelperText>}
              </FormControl>

              <FormControl error={!!errors.message} fullWidth>
                <Typography className={styles.label}>Why are you a good fit?</Typography>
                <TextField
                  {...register('message')}
                  placeholder="Tell us about yourself and why you're interested in this role..."
                  multiline
                  rows={4}
                  variant="outlined"
                  error={!!errors.message}
                  fullWidth
                  sx={getTextFieldStyles()}
                />
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
