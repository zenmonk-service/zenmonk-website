import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { MailService } from "@/app/api/infrastructure/services/mail.service";
import { ContactRepository } from "@/app/api/infrastructure/repositories/contact.repository";

interface SendContactInquiryPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export class SendContactInquiryHandler {
  private readonly mailService: MailService;
  private readonly contactRepository: ContactRepository;

  constructor({ mailService, contactRepository }: Dependency<MailService> & Dependency<ContactRepository>) {
    this.mailService = mailService;
    this.contactRepository = contactRepository;
  }

  async handle(data: SendContactInquiryPayload) {
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.message) {
      throw new Error('All fields are required');
    }

    await this.contactRepository.createContact({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    await this.mailService.sendContactInquiry(
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.message
    );

    return { success: true, message: 'Contact inquiry sent successfully' };
  }
}
