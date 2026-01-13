import mongoose from 'mongoose'

const jobPostingSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['full-time', 'part-time', 'contract', 'internship'],
      required: true,
    },
    category: {
      type: String,
      enum: [
        'development',
        'ui/ux_designer',
        'management',
        'marketing',
        'sales',
        'admin',
        'QA',
      ],
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['open', 'closed'],
      default: 'open',
    },
  },
  {
    timestamps: true,
  }
)

jobPostingSchema.methods.close = function () {
  this.status = 'closed';
};

jobPostingSchema.methods.open = function () {
  this.status = 'open';
};

const JobPosting =
  mongoose.models.job_postings ||
  mongoose.model('job_postings', jobPostingSchema)
export default JobPosting
