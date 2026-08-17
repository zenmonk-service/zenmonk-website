import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { JobPostingRepository } from "@/app/api/infrastructure/repositories/job-posting.repository";
import { AddJobPostingCommand } from "./add-job-posting.command";


export class AddJobPostingHandler {
    private readonly repository;
    constructor({ jobPostingRepository }: Dependency<JobPostingRepository>) {
        this.repository = jobPostingRepository;
    }

    async handle(command: AddJobPostingCommand) {
        return await this.repository.save(command);
    }
}
