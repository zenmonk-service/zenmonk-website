import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { JobPostingRepository } from "@/app/api/infrastructure/repositories/job-posting.repository";
import { FindJobPostingQuery } from "./find-job-posting.query";


export class FindJobPostingHandler {
  private readonly repository;

  constructor({ jobPostingRepository }: Dependency<JobPostingRepository>
  ) {
    this.repository = jobPostingRepository
  }

  async handle(query: FindJobPostingQuery) {
    return this.repository.findById(query.id);
  }

}