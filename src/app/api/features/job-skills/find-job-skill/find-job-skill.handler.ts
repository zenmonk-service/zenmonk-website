import JobSkill from '@/models/job-skills'
import { FindJobSkillQuery } from './find-job-skill.query'

export class FindJobSkillHandler {
  async handle(query: FindJobSkillQuery) {
    return await JobSkill.findById(query.id).populate('skill').exec()
  }
}
