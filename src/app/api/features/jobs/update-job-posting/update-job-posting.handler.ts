import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { JobPostingRepository } from "@/app/api/infrastructure/repositories/job-posting.repository";
import { UpdateJobPostingCommand } from "./update-job-posting.command";
import JobPosting from "@/models/job-posting";

export class UpdateJobPostingHandler {
    private readonly repository;

    constructor({ jobPostingRepository }: Dependency<JobPostingRepository>) {
        this.repository = jobPostingRepository;
    }

    async handle(command: UpdateJobPostingCommand) {
        const { id, ...jobPosting } = command;
        await JobPosting.findByIdAndUpdate({ _id: id }, { $set: jobPosting }).exec();
        return { message: "Job Posting updated successfully" };
    }

}