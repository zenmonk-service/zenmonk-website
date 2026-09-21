import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { ApplicationRepository } from "@/app/api/infrastructure/repositories/application.repository";
import { JobPostingRepository } from "@/app/api/infrastructure/repositories/job-posting.repository";
import { MailService } from "@/app/api/infrastructure/services/mail.service";
import { normalizeMultilineText, normalizeWhitespace } from "@/lib/helper";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CreateApplicationPayload {
  name: string;
  email: string;
  job_posting: string;
  phone?: string;
  message?: string;
  resumeFile?: File | null;
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

    let documentUrl = '';
    if (data.resumeFile) {
      if (data.resumeFile.size > 10 * 1024 * 1024) {
        throw new Error('Resume file size exceeds the 10MB limit.');
      }
      try {
        const arrayBuffer = await data.resumeFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        documentUrl = await new Promise<string>((resolve, reject) => {
          const originalName = data.resumeFile?.name || 'resume';
          const sanitizedName = originalName.replace(/[^a-zA-Z0-9.-]/g, '_');
          const uploadStream = cloudinary.uploader.upload_stream(
            { 
              folder: 'zenmonk_resumes', 
              resource_type: 'raw',
              public_id: `resume_${Date.now()}_${sanitizedName}`
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result?.secure_url || '');
            }
          );
          uploadStream.end(buffer);
        });
      } catch (uploadError) {
        console.error('Failed to upload resume to Cloudinary:', uploadError);
      }
    }

    const sanitizedName = normalizeWhitespace(data.name);
    const sanitizedEmail = data.email?.trim();
    const sanitizedPhone = data.phone?.trim();
    const sanitizedMessage = data.message ? normalizeMultilineText(data.message) : undefined;

    const applicationData = {
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      message: sanitizedMessage,
      job_posting: data.job_posting,
      document: documentUrl,
      tracking_id,
      status: 'submitted'
    };

    const application = await this.applicationRepository.createApplication(applicationData);

    try {
      const job = await this.jobPostingRepository.findById(data.job_posting);
      if (job) {
        const appUrl = (process.env.APP_URL || 'https://zenmonk.tech').trim();
        const trackingUrl = `${appUrl.replace(/\/$/, '')}/track-application/${tracking_id}`;

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
