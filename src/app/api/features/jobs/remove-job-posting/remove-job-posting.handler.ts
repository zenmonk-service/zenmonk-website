import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { JobPostingRepository } from "@/app/api/infrastructure/repositories/job-posting.repository";
import { RemoveJobPostingQuery } from "./remove-job-posting.query";

export class RemoveJobPostingHandler {

    private readonly repository;

    constructor({ jobPostingRepository }: Dependency<JobPostingRepository>) {
        this.repository = jobPostingRepository;
    }

    async handle(query : RemoveJobPostingQuery){
        await this.repository.delete(query);
    }
}