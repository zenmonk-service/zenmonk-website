import { OpenJobPostingQuery } from "./open-job-posting.query";
import JobPosting from "@/models/job-posting";

export class OpenJobPostingHandler {
    async handle(query: OpenJobPostingQuery) {
        const jobPosting = await JobPosting.findById(query.id).exec();
        await jobPosting.open();
        await jobPosting.save();
    }
}