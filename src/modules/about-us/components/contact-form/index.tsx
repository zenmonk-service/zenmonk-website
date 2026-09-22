'use client'

import { useState, useRef, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { PhoneInputWithSearch } from '@/shared/components/phone-input-with-search'
import { isPhoneValid, hasNationalDigits, validateEmail, normalizeWhitespace, normalizeMultilineText } from '@/lib/helper'
import { FormControl, FormHelperText } from '@mui/material'
import axios from 'axios'
import {
  Message,
  Mobile,
  PaperPlane,
  Send,
} from '@/assets/icons/contact-us/contact'
import BaseButton from '@/shared/button'
import { NoInternetModal } from '@/shared/components/no-internet-modal'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  setContactSubmitting,
  setContactBackgroundToast,
  resetContactSubmitting,
} from '@/store/features/header/header-slice'
import './styles.scss'
import TextField from './textfield'
import { Title } from './title'

type ContactFormData = {
  firstName: string
  lastName: string
  phone: string
  email: string
  message: string
}

interface ContactFormProps {
  className?: string
  onSuccess?: () => void
  isModal?: boolean
}

export const ContactForm = ({ className = '', onSuccess, isModal = false }: ContactFormProps = {}) => {
  const dispatch = useAppDispatch()
  const { isContactSubmitting, currentContactSubmittingData } = useAppSelector(
    (state) => state.header
  )

  const isMountedRef = useRef(true)
  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: currentContactSubmittingData?.firstName || '',
      lastName: currentContactSubmittingData?.lastName || '',
      email: currentContactSubmittingData?.email || '',
      phone: currentContactSubmittingData?.phone || '',
      message: currentContactSubmittingData?.message || '',
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false)

  // Sync form values if reopened while a submission is in progress
  useEffect(() => {
    if (isContactSubmitting && currentContactSubmittingData) {
      reset({
        firstName: currentContactSubmittingData.firstName || '',
        lastName: currentContactSubmittingData.lastName || '',
        email: currentContactSubmittingData.email || '',
        phone: currentContactSubmittingData.phone || '',
        message: currentContactSubmittingData.message || '',
      })
    }
  }, [isContactSubmitting, currentContactSubmittingData, reset])

  const isBusy = isSubmitting || isContactSubmitting

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey || e.metaKey) return

    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'Escape',
      'Enter',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Home',
      'End',
      ' ',
      'Unidentified',
    ]

    if (e.key.length > 1) {
      if (!allowedKeys.includes(e.key)) return
      return
    }

    if (!/^[a-zA-Z\s]$/.test(e.key)) {
      e.preventDefault()
    }
  }

  const handleMessageKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      const target = e.currentTarget as HTMLTextAreaElement
      const cursorPos = target.selectionStart ?? 0
      const val = target.value || ''
      const charBefore = cursorPos > 0 ? val[cursorPos - 1] : ''
      const charAfter = cursorPos < val.length ? val[cursorPos] : ''

      if (charBefore === '\n' || charBefore === '\r' || charAfter === '\n' || charAfter === '\r') {
        e.preventDefault()
      }
    }
  }

  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onSubmit = async (data: ContactFormData) => {
    // Check if offline BEFORE putting into sending state
    if (typeof window !== 'undefined' && !navigator.onLine) {
      setIsOfflineModalOpen(true)
      return
    }

    const trimmedData = {
      firstName: normalizeWhitespace(data.firstName),
      lastName: normalizeWhitespace(data.lastName),
      email: data.email.trim(),
      phone: data.phone.trim(),
      message: normalizeMultilineText(data.message),
    }

    if (isModal) {
      dispatch(setContactSubmitting({ isSubmitting: true, data: trimmedData }))
    }
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await axios.post('/api/contact', trimmedData)
      dispatch(resetContactSubmitting())

      if (isMountedRef.current) {
        setIsSubmitting(false)
        setSubmitStatus('success')
        reset({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        })
        clearErrors()
        if (onSuccess) {
          setTimeout(() => {
            onSuccess()
          }, 1500)
        }
        if (successTimerRef.current) clearTimeout(successTimerRef.current)
        successTimerRef.current = setTimeout(() => {
          if (isMountedRef.current) {
            setSubmitStatus(null)
          }
        }, 3000)
      } else {
        // Modal was closed while request was travelling - show bottom right corner toast
        dispatch(
          setContactBackgroundToast({
            message: 'Your message has been sent successfully!',
            type: 'success',
          })
        )
      }
    } catch (error: any) {
      console.error('Error submitting form:', error)
      dispatch(resetContactSubmitting())

      const isOfflineError =
        (typeof window !== 'undefined' && !navigator.onLine) ||
        error?.code === 'ERR_NETWORK' ||
        !error?.response

      if (isMountedRef.current) {
        setIsSubmitting(false)
        if (isOfflineError) {
          setIsOfflineModalOpen(true)
        } else {
          setSubmitStatus('error')
        }
      } else {
        if (!isOfflineError) {
          dispatch(
            setContactBackgroundToast({
              message: 'Failed to send message. Please try again.',
              type: 'error',
            })
          )
        }
      }
    }
  }

  return (
    <form className={`contact-form ${className} ${isModal ? 'is-modal' : ''}`} onSubmit={handleSubmit(onSubmit)}>
      <Title text="Full Name" />
      <div className="fullname">
        <FormControl error={!!errors.firstName} className="form-control">
          <TextField
            disabled={isBusy || submitStatus === 'success'}
            className={`first-name-input ${
              errors.firstName ? 'error-border' : ''
            }`}
            placeHolder="First Name"
            inputProps={{ maxLength: 50 }}
            onKeyDown={handleNameKeyDown}
            {...register('firstName', {
              required: 'First name is required',
              maxLength: { value: 50, message: 'First name cannot exceed 50 characters' },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Only alphabetic characters are allowed',
              },
              validate: (val) => !val || val.trim().length > 0 || 'First name cannot be empty or whitespace',
            })}
          />
          {errors.firstName && (
            <FormHelperText className="error-text">
              {errors.firstName.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl error={!!errors.lastName} className="form-control">
          <TextField
            disabled={isBusy || submitStatus === 'success'}
            className={`last-name-input ${
              errors.lastName ? 'error-border' : ''
            }`}
            placeHolder="Last Name"
            inputProps={{ maxLength: 50 }}
            onKeyDown={handleNameKeyDown}
            {...register('lastName', {
              required: 'Last name is required',
              maxLength: { value: 50, message: 'Last name cannot exceed 50 characters' },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Only alphabetic characters are allowed',
              },
              validate: (val) => !val || val.trim().length > 0 || 'Last name cannot be empty or whitespace',
            })}
          />
          {errors.lastName && (
            <FormHelperText className="error-text">
              {errors.lastName.message}
            </FormHelperText>
          )}
        </FormControl>
      </div>

      <Title text="Email" />
      <FormControl error={!!errors.email} className="form-control">
        <TextField
          disabled={isBusy || submitStatus === 'success'}
          className={`email-input ${errors.email ? 'error-border' : ''}`}
          placeHolder="Email"
          endAdornment={<Message className="end-adornment" />}
          inputProps={{ maxLength: 50 }}
          {...register('email', {
            required: 'Email is required',
            maxLength: { value: 50, message: 'Email cannot exceed 50 characters' },
            validate: {
              notEmptyOrWhitespace: (val) =>
                !val || val.trim().length > 0 || 'Email cannot be empty or whitespace',
              validEmail: (val) => {
                if (!val || val.trim().length === 0) return true
                return validateEmail(val) || 'Invalid email address'
              },
            },
          })}
        />
        {errors.email && (
          <FormHelperText className="error-text">
            {errors.email.message}
          </FormHelperText>
        )}
      </FormControl>

      <Title text="Your Phone" />
      <FormControl error={!!errors.phone && submitStatus !== 'success'} className="form-control">
        <Controller
          name="phone"
          control={control}
          rules={{
            required: 'Phone number is required',
            validate: {
              hasDigits: (val) =>
                !val || hasNationalDigits(val) || 'Phone number is required',
              validPhone: (val) =>
                !val ||
                !hasNationalDigits(val) ||
                isPhoneValid(val) ||
                'Please enter a valid phone number for the selected country',
            },
          }}
          render={({ field }) => (
            <PhoneInputWithSearch
              disabled={isBusy || submitStatus === 'success'}
              className="phone-number-input"
              defaultCountry="in"
              placeholder="Your Phone"
              value={field.value || ''}
              onChange={field.onChange}
              error={!!errors.phone && submitStatus !== 'success'}
              height="max(44px, 2.8vw)"
              fontSize="var(--font-size-16)"
              borderRadius="8px"
              endAdornment={<Mobile className="end-adornment" />}
            />
          )}
        />
        {submitStatus !== 'success' && errors.phone && (
          <FormHelperText className="error-text">
            {errors.phone.message}
          </FormHelperText>
        )}
      </FormControl>

      <Title text="Message" />
      <FormControl error={!!errors.message} className="form-control">
        <div className={`message ${errors.message ? 'error-border' : ''}`}>
          <TextField
            disabled={isBusy || submitStatus === 'success'}
            multiline
            className={`message-input`}
            placeHolder="Write Message.."
            rows={3}
            inputProps={{ maxLength: 800 }}
            onKeyDown={handleMessageKeyDown}
            {...register('message', {
              required: 'Message is required',
              maxLength: { value: 800, message: 'Message cannot exceed 800 characters' },
              validate: {
                noWhitespace: (val) =>
                  !val || val.trim().length > 0 || 'Message cannot be empty or whitespace',
              },
            })}
          />
          <PaperPlane className="end-adornment" />
        </div>
        {errors.message && (
          <FormHelperText className="error-text">
            {errors.message.message}
          </FormHelperText>
        )}
      </FormControl>

      {submitStatus === 'error' && (
        <p style={{ color: '#d32f2f', fontSize: '14px', marginTop: '10px' }}>
          Failed to send message. Please try again later.
        </p>
      )}

      <div className="button-wrapper">
        <BaseButton
          className={`send-button ${submitStatus === 'success' ? 'success-btn' : ''}`}
          disabled={isBusy || submitStatus === 'success'}
          disableShine={submitStatus === 'success'}
          showArrow={false}
          endAdornment={
            submitStatus === 'success' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <Send className="send-button-icon" />
            )
          }
          type={submitStatus === 'success' ? 'button' : 'submit'}
          sx={
            submitStatus === 'success'
              ? {
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%) !important',
                  backgroundColor: '#10B981 !important',
                  color: '#ffffff !important',
                  pointerEvents: 'none !important',
                  cursor: 'default !important',
                  '&.Mui-disabled': {
                    color: '#ffffff !important',
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%) !important',
                    backgroundColor: '#10B981 !important',
                  },
                }
              : undefined
          }
        >
          {isBusy ? 'Sending...' : submitStatus === 'success' ? 'Sent Successfully' : 'Send Message'}
        </BaseButton>
      </div>

      <NoInternetModal
        open={isOfflineModalOpen}
        onClose={() => setIsOfflineModalOpen(false)}
      />
    </form>
  )
}
