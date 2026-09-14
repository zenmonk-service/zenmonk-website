'use client'

import { useState, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { isPhoneValid, hasNationalDigits } from '@/lib/helper'
import { FormControl, FormHelperText } from '@mui/material'
import axios from 'axios'
import {
  Message,
  PaperPlane,
  Send,
} from '@/assets/icons/contact-us/contact'
import BaseButton from '@/shared/button'
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

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

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

  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    const trimmedData = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      message: data.message.trim(),
    }
    try {
      await axios.post('/api/contact', trimmedData)
      setSubmitStatus('success')
      reset({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      })
      clearErrors()
      if (successTimerRef.current) clearTimeout(successTimerRef.current)
      successTimerRef.current = setTimeout(() => {
        reset({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        })
        clearErrors()
        setSubmitStatus(null)
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <Title text="Full Name" />
      <div className="fullname">
        <FormControl error={!!errors.firstName} className="form-control">
          <TextField
            className={`first-name-input ${
              errors.firstName ? 'error-border' : ''
            }`}
            placeHolder="First Name"
            inputProps={{ maxLength: 256 }}
            onKeyDown={handleNameKeyDown}
            {...register('firstName', {
              required: 'First name is required',
              maxLength: { value: 256, message: 'First name cannot exceed 256 characters' },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Only alphabetic characters are allowed',
              },
              validate: (val) => (val && val.trim().length > 0) || 'First name cannot be empty or whitespace',
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
            className={`last-name-input ${
              errors.lastName ? 'error-border' : ''
            }`}
            placeHolder="Last Name"
            inputProps={{ maxLength: 256 }}
            onKeyDown={handleNameKeyDown}
            {...register('lastName', {
              required: 'Last name is required',
              maxLength: { value: 256, message: 'Last name cannot exceed 256 characters' },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Only alphabetic characters are allowed',
              },
              validate: (val) => (val && val.trim().length > 0) || 'Last name cannot be empty or whitespace',
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
          className={`email-input ${errors.email ? 'error-border' : ''}`}
          placeHolder="Email"
          endAdornment={<PaperPlane className="end-adornment" />}
          inputProps={{ maxLength: 256 }}
          {...register('email', {
            required: 'Email is required',
            maxLength: { value: 256, message: 'Email cannot exceed 256 characters' },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            },
            validate: (val) => (val && val.trim().length > 0) || 'Email cannot be empty or whitespace',
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
                (val && hasNationalDigits(val)) || 'Phone number is required',
              validPhone: (val) =>
                !val ||
                !hasNationalDigits(val) ||
                isPhoneValid(val) ||
                'Please enter a valid phone number for the selected country',
            },
          }}
          render={({ field }) => (
            <PhoneInput
              defaultCountry="in"
              value={field.value || ''}
              onChange={field.onChange}
              style={{
                width: '100%',
              }}
              inputStyle={{
                width: '100%',
                height: '48px',
                borderRadius: '0 8px 8px 0',
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif',
                backgroundColor: '#ffffff',
                borderColor: errors.phone && submitStatus !== 'success' ? '#d32f2f' : '#E5E7EB',
              }}
              countrySelectorStyleProps={{
                buttonStyle: {
                  height: '48px',
                  borderRadius: '8px 0 0 8px',
                  backgroundColor: '#ffffff',
                  borderColor: errors.phone && submitStatus !== 'success' ? '#d32f2f' : '#E5E7EB',
                  paddingLeft: '8px',
                  paddingRight: '8px',
                },
              }}
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
            multiline
            className={`message-input`}
            placeHolder="Write Message.."
            rows={3}
            inputProps={{ maxLength: 800 }}
            {...register('message', {
              required: 'Message cannot be empty',
              maxLength: { value: 800, message: 'Message cannot exceed 800 characters' },
              validate: (val) => (val && val.trim().length > 0) || 'Message cannot be empty or whitespace',
            })}
          />
          <Message className="end-adornment" />
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
          disabled={isSubmitting}
          type="submit"
          sx={
            submitStatus === 'success'
              ? {
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%) !important',
                  backgroundColor: '#10B981 !important',
                  color: '#ffffff !important',
                }
              : undefined
          }
        >
          {isSubmitting ? (
            'Sending...'
          ) : submitStatus === 'success' ? (
            <>
              Sent Successfully{' '}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '6px' }}>
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          ) : (
            <>
              Send Message <Send className="send-button-icon" />
            </>
          )}
        </BaseButton>
      </div>
    </form>
  )
}
