import mongoose from 'mongoose'
import JobPosting from './job-posting'
import Skill from './skills'

const jobSkillSchema = new mongoose.Schema(
  {
    job_posting: {
      type: mongoose.Schema.Types.ObjectId,
      ref: JobPosting,
      required: true,
    },
    skill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Skill,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const JobSkill =
  mongoose.models.job_skills || mongoose.model('job_skills', jobSkillSchema)
export default JobSkill
