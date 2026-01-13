import { NextRequest } from 'next/server'
import { addSkill, listSkills } from '../../features/skills';

export const POST = async (request: NextRequest) => {
  return await addSkill(request);
}

export const GET = async (request: NextRequest) => {
  return await listSkills(request);
}
