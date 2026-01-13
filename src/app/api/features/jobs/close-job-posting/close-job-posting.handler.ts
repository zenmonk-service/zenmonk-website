import { CloseJobPostingQuery } from "./close-job-posting.query";
import JobPosting from "@/models/job-posting";

export class CloseJobPostingHandler {
    async handle(query: CloseJobPostingQuery) {
        const jobPosting = await JobPosting.findById(query.id).exec();
        await jobPosting.close();
        await jobPosting.save();
    }
}