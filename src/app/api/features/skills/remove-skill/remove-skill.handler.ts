import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { SkillRepository } from "@/app/api/infrastructure/repositories/skill.repository";
import { RemoveSkillQuery } from "./remove-skill.query";

export class RemoveSkillHandler {
    private readonly repository;

    constructor({ skillRepository }: Dependency<SkillRepository>) {
        this.repository = skillRepository
    }

    async handle(query : RemoveSkillQuery){
        await this.repository.delete(query);
    }
}