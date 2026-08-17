import { NextRequest } from 'next/server'
import { findJobPosting, removeJobPosting, updateJobPosting } from '@/app/api/features/jobs';

export const PUT = async (
  request: NextRequest,
  context: any
) => {
  return await updateJobPosting(request, context.params);
}


export const GET = async (
  _request: NextRequest,
  context: any
) => {
  return await findJobPosting(context.params);
}

export const DELETE = async (
  _request: NextRequest,
  context: any
) => {
  return await removeJobPosting(context.params);
}
