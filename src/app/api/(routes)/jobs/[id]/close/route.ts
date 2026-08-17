import { NextRequest } from 'next/server'
import { closeJobPosting } from '@/app/api/features/jobs';

export const PATCH = async (
  _request: NextRequest,
  context: any
) => {
  return await closeJobPosting(context.params);
}
