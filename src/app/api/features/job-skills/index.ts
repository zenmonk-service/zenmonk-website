import { container } from '../../infrastructure/providers/app.provider'

export async function removeJobSkill(params: { id: string }) {
  return await container.resolve('removeJobSkillController').handle(params)
}

export async function listJobSkills(request: any) {
  return await container.resolve('listJobSkillsController').handle(request)
}

export async function addJobSkill(request: any) {
  return await container.resolve('addJobSkillController').handle(request)
}

export async function findJobSkill(params: { id: string }) {
  return await container.resolve('findJobSkillController').handle(params)
}