import { Types } from "mongoose";
import { UpdateSkillCommand } from "./update-skill.command";
import Skill from "@/models/skills";

export class UpdateSkillHandler {
    async handle(id: Types.ObjectId | string, payload: UpdateSkillCommand) {
        return await Skill.findByIdAndUpdate({ _id: id }, { $set: payload }).exec();
    }
}