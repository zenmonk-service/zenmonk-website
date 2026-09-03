import { container } from '../../infrastructure/providers/app.provider'

export async function sendContactInquiry(request: Request) {
  return await container.resolve('sendContactInquiryController').handle(request)
}
