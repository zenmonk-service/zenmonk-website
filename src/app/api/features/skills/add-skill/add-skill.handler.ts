import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { SkillRepository } from "@/app/api/infrastructure/repositories/skill.repository";
import { AddSkillCommand } from "./add-skill.command";

export class AddSkillHandler {
    private readonly repository;

    constructor({ skillRepository }: Dependency<SkillRepository>) {
        this.repository = skillRepository
    }

    async handle(payload: AddSkillCommand) {
        await this.repository.save(payload);
    }
}