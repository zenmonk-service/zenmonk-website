import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { SkillRepository } from "@/app/api/infrastructure/repositories/skill.repository";
import Skill from "@/models/skills";

export class ListSkillsHandler {
    private readonly repository;

    constructor({ skillRepository }: Dependency<SkillRepository>) {
        this.repository = skillRepository
    }

    async handle() {
        return await Skill.find();
    }
}