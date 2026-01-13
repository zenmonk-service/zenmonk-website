import mongoose from 'mongoose'
import { validateEmail } from '@/lib/helper'

const contactSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      validate: [validateEmail, 'Please fill a valid email address'],
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Contact =
  mongoose.models.contacts || mongoose.model('contacts', contactSchema)
export default Contact
