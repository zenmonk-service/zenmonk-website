import { FindSkillQuery } from "./find-skill.query";
import Skill from "@/models/skills";

export class FindSkillHandler {
    async handle(query: FindSkillQuery) {
      return Skill.findById(query.id).exec();
    }
}
