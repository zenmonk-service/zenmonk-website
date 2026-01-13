import { NextRequest } from 'next/server'
import { findJobPosting, removeJobPosting, updateJobPosting } from '@/app/api/features/jobs';

export const PUT = async (
  request: NextRequest,
  context: any
) => {
  return await updateJobPosting(request, context.params);
}


export const GET = async (
  request: NextRequest,
  context: any
) => {
  return await findJobPosting(context.params);
}

export const DELETE = async (
  request: NextRequest,
  context: any
) => {
  return await removeJobPosting(context.params);
}
