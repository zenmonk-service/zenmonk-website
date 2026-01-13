import { NextRequest } from 'next/server'
import { openJobPosting } from '@/app/api/features/jobs';

export const PATCH = async (
  req: NextRequest,
  context: any
) => {
  return await openJobPosting(context.params);
}
