import { NextRequest } from 'next/server'
import { container } from '../../infrastructure/providers/app.provider'

export async function addSkill(request: NextRequest) {
  return await container.resolve('addSkillController').handle(request)
}

export async function listSkills(request: NextRequest) {
  return await container.resolve('listSkillController').handle(request)
}

export async function updateSkill(
  request: NextRequest,
  params: { id: string }
) {
  return await container
    .resolve('updateSkillController')
    .handle(request, params)
}

export async function findSkill(params: { id: string }) {
  return await container.resolve('findSkillController').handle(params)
}

export async function deleteSkill(params: { id: string }) {
  return await container.resolve('removeSkillController').handle(params)
}
