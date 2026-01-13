import { NextRequest } from 'next/server'
import { addJobPosting, listJobPostings } from '../../features/jobs'

export const POST = async (
  request: NextRequest,
) => {
  return await addJobPosting(request);
}

export const GET = async (request: NextRequest) => {
  return await listJobPostings(request);
}