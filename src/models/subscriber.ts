import mongoose from 'mongoose'
import { validateEmail } from '@/lib/helper'

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, 'Please fill a valid email address'],
    },
    isSubscribed: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const Subscriber =
  mongoose.models.subscribers || mongoose.model('subscribers', subscriberSchema)
export default Subscriber
