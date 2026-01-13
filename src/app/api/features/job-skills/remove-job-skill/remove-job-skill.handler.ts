import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { JobSkillRepository } from "@/app/api/infrastructure/repositories/job-skill.repository";
import { RemoveJobSkillQuery } from "./remove-job-skill.query";

export class RemoveJobSkillHandler {
    private readonly repository;
    constructor({ jobSkillRepository }: Dependency<JobSkillRepository>) {
        this.repository = jobSkillRepository;
    }

    async handle(query: RemoveJobSkillQuery) {
        return await this.repository.delete(query.id);
    }
}