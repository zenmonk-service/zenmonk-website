import { z } from 'zod'
import { isPhoneValid, hasNationalDigits, isValidUrl } from '@/lib/helper'

export const nameValidation = z
  .string()
  .min(1, 'Name is required')
  .max(50, 'Name cannot exceed 50 characters')
  .regex(/^[a-zA-Z\s]+$/, 'Only alphabetic characters are allowed')
  .refine((val) => val.trim().length > 0, {
    message: 'Name cannot be empty or whitespace',
  })

export const emailValidation = z
  .string()
  .min(1, 'Email is required')
  .max(50, 'Email cannot exceed 50 characters')
  .email('Invalid email address')

export const phoneValidation = z
  .string()
  .min(1, 'Phone number is required')
  .refine((val) => hasNationalDigits(val), {
    message: 'Phone number is required',
  })
  .refine((val) => isPhoneValid(val), {
    message: 'Please enter a valid phone number for the selected country',
  })

export const urlValidation = z
  .string()
  .max(256, 'Link cannot exceed 256 characters')
  .optional()
  .or(z.literal(''))
  .refine(
    (val) => {
      if (!val || !val.trim()) return true
      return isValidUrl(val)
    },
    {
      message: 'Please enter a valid URL.',
    }
  )

export const messageValidation = z
  .string()
  .max(800, 'Message cannot exceed 800 characters')
  .optional()
  .or(z.literal(''))
  .refine(
    (val) => {
      if (!val) return true
      return val.trim().length > 0
    },
    {
      message: 'Message cannot contain only whitespace',
    }
  )

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Only alphabetic characters are allowed')
    .refine((val) => val.trim().length > 0, 'First name cannot be empty or whitespace'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Only alphabetic characters are allowed')
    .refine((val) => val.trim().length > 0, 'Last name cannot be empty or whitespace'),
  email: emailValidation,
  phone: phoneValidation,
  message: z
    .string()
    .min(1, 'Message is required')
    .max(800, 'Message cannot exceed 800 characters')
    .refine((val) => val.trim().length > 0, 'Message cannot be empty or whitespace'),
})

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>

export const applicationModalSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .max(50, 'Full name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Only alphabetic characters are allowed')
    .refine((val) => val.trim().length > 0, 'Full name cannot be empty or whitespace'),
  email: emailValidation,
  phone: phoneValidation,
  portfolioLink: urlValidation,
  message: messageValidation,
})

export type ApplicationModalSchemaType = z.infer<typeof applicationModalSchema>
