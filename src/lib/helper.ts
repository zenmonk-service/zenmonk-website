import { PhoneNumberUtil } from 'google-libphonenumber'
import { defaultCountries, parseCountry } from 'react-international-phone'

const phoneUtil = PhoneNumberUtil.getInstance()
const parsedCountries = defaultCountries
  .map(parseCountry)
  .sort((a, b) => b.dialCode.length - a.dialCode.length)

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const validateEmail = function (email: string) {
  return EMAIL_REGEX.test(email)
}

export const normalizeWhitespace = (str: string | undefined | null): string => {
  if (!str) return ''
  return str.trim().replace(/\s+/g, ' ')
}

export const normalizeMultilineText = (str: string | undefined | null): string => {
  if (!str) return ''
  return str
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map((line) => line.replace(/[^\S\r\n]+/g, ' ').trim())
    .filter((line) => line.length > 0)
    .join('\n')
    .trim()
}

export const hasNationalDigits = (phone: string): boolean => {
  if (!phone) return false
  const digitsOnly = phone.replace(/\D/g, '')
  if (digitsOnly.length === 0) return false

  try {
    const parsed = phoneUtil.parseAndKeepRawInput(phone)
    if (parsed.hasNationalNumber() && String(parsed.getNationalNumber()).length > 0) {
      return true
    }
  } catch {
    // If libphonenumber throws for short inputs like "+910"
  }

  return digitsOnly.length > 2 || (phone.trim().startsWith('+1') && digitsOnly.length > 1)
}

export const isPhoneValid = (phone: string): boolean => {
  if (!phone) return false
  try {
    const parsed = phoneUtil.parseAndKeepRawInput(phone)
    if (!phoneUtil.isPossibleNumber(parsed)) return false

    const digitsOnly = phone.replace(/\D/g, '')
    const dialCode = String(parsed.getCountryCode())
    const nationalDigits = digitsOnly.startsWith(dialCode) ? digitsOnly.slice(dialCode.length) : digitsOnly

    if (/^(\d)\1+$/.test(nationalDigits)) {
      return false
    }

    return true
  } catch {
    return false
  }
}

export const formatPhoneNumber = (phone: string): string => {
  if (!phone) return phone
  const digits = phone.replace(/\D/g, '')
  if (!digits) return phone

  const country = parsedCountries.find((c) => digits.startsWith(c.dialCode))
  if (!country) return phone

  const dialCode = country.dialCode
  const nationalDigits = digits.slice(dialCode.length)
  const mask = typeof country.format === 'string' ? country.format : undefined

  if (!mask) {
    return `+${dialCode} ${nationalDigits}`.trim()
  }

  let formattedNational = ''
  let digitIdx = 0
  for (let i = 0; i < mask.length; i++) {
    if (digitIdx >= nationalDigits.length) break
    const char = mask[i]
    if (char === '.') {
      formattedNational += nationalDigits[digitIdx++]
    } else {
      formattedNational += char
    }
  }

  if (digitIdx < nationalDigits.length) {
    formattedNational += nationalDigits.slice(digitIdx)
  }

  return `+${dialCode} ${formattedNational}`.trim()
}

export const formatFileSize = (bytes: number): string => {
  if (!bytes || bytes <= 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1)
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}

