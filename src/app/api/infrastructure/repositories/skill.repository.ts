import Skill from "@/models/skills";
import { Types } from "mongoose";
import { AddSkillPayload } from "../../features/skills/add-skill/add-skill.interface";


export class SkillRepository {

    async save(data: AddSkillPayload) {
        const skill = new Skill(data);
        return skill.save();
    }

    async delete({ id }: { id: Types.ObjectId | string }) {
        return Skill.findByIdAndDelete(id).exec();
    }

}
