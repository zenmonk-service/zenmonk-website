import { NextRequest } from 'next/server'
import { addJobSkill, listJobSkills } from '../../features/job-skills';

export const POST = async (request: NextRequest) => {
  return await addJobSkill(request);
}

export const GET = async (request: NextRequest) => {
  return await listJobSkills(request);
}
