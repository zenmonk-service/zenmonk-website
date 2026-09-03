'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FormControl, FormHelperText } from '@mui/material'
import axios from 'axios'
import {
  Message,
  Mobile,
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
    formState: { errors },
  } = useForm<ContactFormData>()

  const [phoneTypeError, setPhoneTypeError] = useState(false)
  const phoneErrorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow keyboard shortcuts (Ctrl+A, Ctrl+C, Ctrl+V, etc.)
    if (e.ctrlKey || e.metaKey) return

    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Home',
      'End',
    ]
    if (!allowedKeys.includes(e.key) && !/^[0-9]$/.test(e.key)) {
      e.preventDefault()
      setPhoneTypeError(true)
      if (phoneErrorTimerRef.current) clearTimeout(phoneErrorTimerRef.current)
      phoneErrorTimerRef.current = setTimeout(
        () => setPhoneTypeError(false),
        2000
      )
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    try {
      await axios.post('/api/contact', data)
      setSubmitStatus('success')
      reset()
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
            {...register('firstName', { required: 'First name is required' })}
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
            {...register('lastName', { required: 'Last name is required' })}
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
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
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
      <FormControl error={!!errors.phone} className="form-control">
        <TextField
          className={`phone-number-input ${errors.phone ? 'error-border' : ''}`}
          placeHolder="Phone"
          endAdornment={<Mobile className="end-adornment" />}
          inputMode="numeric"
          onKeyDown={handlePhoneKeyDown}
          {...register('phone', {
            required: 'Phone number is required',
            pattern: { value: /^[0-9]+$/, message: 'Invalid phone number' },
          })}
        />
        {phoneTypeError && (
          <FormHelperText className="error-text" style={{ color: '#d32f2f' }}>
            Only numbers are allowed.
          </FormHelperText>
        )}
        {!phoneTypeError && errors.phone && (
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
            {...register('message', { required: 'Message cannot be empty' })}
          />
          <Message className="end-adornment" />
        </div>
        {errors.message && (
          <FormHelperText className="error-text">
            {errors.message.message}
          </FormHelperText>
        )}
      </FormControl>

      {submitStatus === 'success' && (
        <p style={{ color: 'green', fontSize: '14px', marginTop: '10px' }}>
          Your message has been sent successfully!
        </p>
      )}
      {submitStatus === 'error' && (
        <p style={{ color: '#d32f2f', fontSize: '14px', marginTop: '10px' }}>
          Failed to send message. Please try again later.
        </p>
      )}

      <div className="button-wrapper">
        <BaseButton className="send-button" disabled={isSubmitting} type='submit'>
          {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="send-button-icon" />
        </BaseButton>
      </div>
    </form>
  )
}

