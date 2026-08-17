import Application from '@/models/job-application';

export class ApplicationRepository {

  async listApplications() {
    return Application.find().populate('job_posting').exec();
  }

  async createApplication(data: any) {
    const application = new Application(data);
    return await application.save();
  }
}
