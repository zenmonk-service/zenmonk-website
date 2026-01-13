import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { JobSkillRepository } from "@/app/api/infrastructure/repositories/job-skill.repository";
import { AddJobSkillCommand } from "./add-job-skill.command";

export class AddJobSkillHandler {
    private readonly repository;

    constructor({ jobSkillRepository }: Dependency<JobSkillRepository>) {
        this.repository = jobSkillRepository;
    }

    async handle(command: AddJobSkillCommand) {
        return await this.repository.save(command);
    }
}