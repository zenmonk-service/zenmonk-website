import { ListJobSkillsQuery } from "./list-job-skills.query";
import JobSkill from "@/models/job-skills";

export class ListJobSkillsHandler {

    async handle(query: ListJobSkillsQuery) {
        return await JobSkill.find({ job_posting: query.job_posting_id }).populate("skill").exec();
    }
}