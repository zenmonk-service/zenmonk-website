import mongoose from 'mongoose'
import { validateEmail } from '@/lib/helper'
import Job from './job-posting'

const applicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: [validateEmail, 'Please fill a valid email address'],
    },
    phone: {
      type: String,
      required: false,
    },
    message: {
      type: String,
    },
    document: {
      type: String,
    },
    job_posting: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Job,
      required: true,
    },
    tracking_id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    status: {
      type: String,
      enum: ['submitted', 'under_review', 'interview_scheduled', 'rejected', 'accepted'],
      default: 'submitted',
    },
  },
  {
    timestamps: true,
  }
)

const Application =
  mongoose.models.applications ||
  mongoose.model('applications', applicationSchema)
export default Application
