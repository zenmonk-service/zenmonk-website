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
    const firstName = data.firstName?.trim().replace(/\s+/g, ' ');
    const lastName = data.lastName?.trim().replace(/\s+/g, ' ');
    const email = data.email?.trim();
    const phone = data.phone?.trim();
    const message = data.message?.trim().replace(/\s+/g, ' ');

    if (!firstName || !lastName || !email || !phone || !message) {
      throw new Error('All fields are required');
    }

    await this.contactRepository.createContact({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      message,
    });

    await this.mailService.sendContactInquiry(
      firstName,
      lastName,
      email,
      phone,
      message
    );

    return { success: true, message: 'Contact inquiry sent successfully' };
  }
}
