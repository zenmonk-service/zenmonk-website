import Skill from "@/models/skills";

export class ListSkillsHandler {
    async handle() {
        return await Skill.find();
    }
}
