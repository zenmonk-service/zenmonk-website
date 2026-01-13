import { NextRequest } from 'next/server'
import { deleteSkill, findSkill, updateSkill } from '@/app/api/features/skills'

export const PUT = async (
  request: NextRequest,
  context: any
) => {
  return await updateSkill(request, context.params)
}

export const GET = async (
  req: NextRequest,
  context: any
) => {
  return await findSkill(context.params)
}

export const DELETE = async (
  req: NextRequest,
  context: any
) => {
  return await deleteSkill(context.params);
}
