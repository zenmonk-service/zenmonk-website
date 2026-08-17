import mongoose from 'mongoose'

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Skill = mongoose.models.skills || mongoose.model('skills', skillSchema)
export default Skill
