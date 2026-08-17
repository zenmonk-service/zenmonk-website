import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { ApplicationRepository } from "@/app/api/infrastructure/repositories/application.repository";
import { JobPostingRepository } from "@/app/api/infrastructure/repositories/job-posting.repository";
import { MailService } from "@/app/api/infrastructure/services/mail.service";

interface CreateApplicationPayload {
  name: string;
  email: string;
  job_posting: string;
  phone?: string;
  message?: string;
  document?: string;
}

export class CreateApplicationHandler {
  private readonly applicationRepository: ApplicationRepository;
  private readonly jobPostingRepository: JobPostingRepository;
  private readonly mailService: MailService;

  constructor({
    applicationRepository,
    jobPostingRepository,
    mailService
  }: Dependency<ApplicationRepository & JobPostingRepository & MailService>) {
    this.applicationRepository = applicationRepository;
    this.jobPostingRepository = jobPostingRepository;
    this.mailService = mailService;
  }

  async handle(data: CreateApplicationPayload) {
    const tracking_id = `APP-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    const applicationData = {
      ...data,
      tracking_id,
      status: 'submitted'
    };

    const application = await this.applicationRepository.createApplication(applicationData);

    try {
      const job = await this.jobPostingRepository.findById(data.job_posting);
      if (job) {
        const applicationUrl =
          process.env.APP_URL ||
          process.env.NEXT_PUBLIC_APP_URL ||
          'http://localhost:3000';
        const trackingUrl = `${applicationUrl.replace(/\/$/, '')}/track-application/${tracking_id}`;

        await this.mailService.sendApplicationConfirmation(
          data.email,
          data.name,
          job.role,
          tracking_id,
          trackingUrl
        );
      }
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
    }

    return application;
  }
}
