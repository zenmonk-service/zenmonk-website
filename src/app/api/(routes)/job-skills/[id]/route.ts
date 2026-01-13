import { NextRequest } from 'next/server'
import { findJobSkill, removeJobSkill } from '@/app/api/features/job-skills';

export const DELETE = async (
  req: NextRequest,
  context: any
) => {
  return await removeJobSkill(context.params);
}
export const GET = async (
  request: NextRequest,
  context: any
) => {
  return await findJobSkill(context.params);
}
