import { PhoneNumberUtil } from 'google-libphonenumber'

const phoneUtil = PhoneNumberUtil.getInstance()

export const validateEmail = function (email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const hasNationalDigits = (phone: string): boolean => {
  if (!phone) return false
  try {
    const parsed = phoneUtil.parseAndKeepRawInput(phone)
    return parsed.hasNationalNumber() && String(parsed.getNationalNumber()).length > 0
  } catch {
    return false
  }
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
