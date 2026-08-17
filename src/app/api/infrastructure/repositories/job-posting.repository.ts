import JobPosting from '@/models/job-posting';
import { Types } from 'mongoose';
import { JobPostingPayload } from '../../features/jobs/add-job-posting/add-job-posting.interface';

export class JobPostingRepository {

  async save(data: JobPostingPayload) {
    const job = new JobPosting(data);
    return job.save();
  }

  async delete({ id }: { id: Types.ObjectId | string }) {
    return JobPosting.findByIdAndDelete(id).exec();
  }

  async findById(id: string | Types.ObjectId) {
    return JobPosting.findById(id).exec();
  }
}
