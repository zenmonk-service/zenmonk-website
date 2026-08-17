import { ListJobPostingsQuery } from "./list-job-postings.query";
import JobSkill from "@/models/job-skills";
import JobPosting from "@/models/job-posting";


export class ListJobPostingsHandler {
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
