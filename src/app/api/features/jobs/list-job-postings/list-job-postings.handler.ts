import { JobPostingRepository } from "@/app/api/infrastructure/repositories/job-posting.repository";
import { ListJobPostingsQuery } from "./list-job-postings.query";
import { JobSkillRepository } from "@/app/api/infrastructure/repositories/job-skill.repository";
import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import JobSkill from "@/models/job-skills";
import JobPosting from "@/models/job-posting";


export class ListJobPostingsHandler {
  private readonly jobPostingRepository;
  private readonly jobSkillRepository;

  constructor({ jobPostingRepository, jobSkillRepository }: Dependency<JobPostingRepository & JobSkillRepository>) {
    this.jobPostingRepository = jobPostingRepository
    this.jobSkillRepository = jobSkillRepository;
  }

  async handle(query: ListJobPostingsQuery) {

    const filter: Record<string, any> = {
      ...(query.category ? { category: query.category } : {}),
      ...(query.status ? { status: query.status } : {}),
    };

    const jobs = await JobPosting.find(filter).exec();
    
    const composedData = await Promise.all(
      jobs.map(async (job) => {
        const skills = await JobSkill.find({ job_posting: job._id }).populate("skill").exec();
        return {
          ...job.toObject(),
          required_skills: skills,
        }
      })
    )
    return composedData;
  }
}
