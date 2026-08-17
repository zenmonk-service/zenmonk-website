import { NextRequest } from 'next/server'
import { openJobPosting } from '@/app/api/features/jobs';

export const PATCH = async (
  _request: NextRequest,
  context: any
) => {
  return await openJobPosting(context.params);
}
