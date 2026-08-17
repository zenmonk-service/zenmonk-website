import { NextRequest } from 'next/server'
import { findJobSkill, removeJobSkill } from '@/app/api/features/job-skills';

export const DELETE = async (
  _request: NextRequest,
  context: any
) => {
  return await removeJobSkill(context.params);
}
export const GET = async (
  _request: NextRequest,
  context: any
) => {
  return await findJobSkill(context.params);
}
