import { UpdateJobPostingCommand } from "./update-job-posting.command";
import JobPosting from "@/models/job-posting";

export class UpdateJobPostingHandler {
    async handle(command: UpdateJobPostingCommand) {
        const { id, ...jobPosting } = command;
        await JobPosting.findByIdAndUpdate({ _id: id }, { $set: jobPosting }).exec();
        return { message: "Job Posting updated successfully" };
    }

}
