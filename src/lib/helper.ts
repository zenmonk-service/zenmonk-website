import { PhoneNumberUtil } from 'google-libphonenumber'

const phoneUtil = PhoneNumberUtil.getInstance()

export const validateEmail = function (email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
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
    return phoneUtil.isValidNumber(parsed)
  } catch {
    return false
  }
}
