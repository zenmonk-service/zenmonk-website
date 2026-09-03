import { sendContactInquiry } from '../../features/contact'

export const POST = async (request: Request) => {
  return await sendContactInquiry(request);
}
