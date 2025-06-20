'use client'

import { useForm } from 'react-hook-form'
import { Message, Phone, Send, Telegram } from '@mui/icons-material'
import { Box, FormControl, FormHelperText } from '@mui/material'
import BaseButton from '@/shared/button'
import { BaseInput } from './input'
import './styles.scss'
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
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    console.log('Form Data Submitted:', data)
  }

  return (
    <Box
      className="contact-form"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title text="Full Name" />
      <Box className="fullname">
        <FormControl error={!!errors.firstName} className="form-control">
          <BaseInput
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
          <BaseInput
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
      </Box>

      <Title text="Email" />
      <FormControl error={!!errors.email} className="form-control">
        <BaseInput
          className={`email-input ${errors.email ? 'error-border' : ''}`}
          placeHolder="Email"
          endAdornment={<Telegram className="end-adornment" />}
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
        <BaseInput
          className={`phone-number-input ${errors.phone ? 'error-border' : ''}`}
          placeHolder="Phone"
          endAdornment={<Phone className="end-adornment" />}
          {...register('phone', {
            required: 'Phone number is required',
            pattern: { value: /^[0-9]+$/, message: 'Invalid phone number' },
          })}
        />
        {errors.phone && (
          <FormHelperText className="error-text">
            {errors.phone.message}
          </FormHelperText>
        )}
      </FormControl>

      <Title text="Message" />
      <FormControl error={!!errors.message} className="form-control">
        <Box className={`message ${errors.message ? 'error-border' : ''}`}>
          <BaseInput
            multiline
            className={`message-input`}
            placeHolder="Write message ..."
            rows={3}
            {...register('message', { required: 'Message cannot be empty' })}
          />
          <Message className="end-adornment" />
        </Box>
        {errors.message && (
          <FormHelperText className="error-text">
            {errors.message.message}
          </FormHelperText>
        )}
      </FormControl>

      <Box className="button-wrapper">
        <BaseButton className='send-button'>
          Send Message <Send className="send-button-icon" />
        </BaseButton>
      </Box>
    </Box>
  )
}
