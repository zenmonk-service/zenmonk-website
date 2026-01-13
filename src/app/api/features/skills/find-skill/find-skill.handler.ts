import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { JobPostingRepository } from "@/app/api/infrastructure/repositories/job-posting.repository";
import { FindSkillQuery } from "./find-skill.query";
import Skill from "@/models/skills";

export class FindSkillHandler {
    private readonly repository;

    constructor({ jobPostingRepository }: Dependency<JobPostingRepository>
    ) {
        this.repository = jobPostingRepository
    }

    async handle(query: FindSkillQuery) {
      return Skill.findById(query.id).exec();
    }
}