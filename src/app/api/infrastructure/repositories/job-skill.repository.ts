import JobSkill from "@/models/job-skills";
import { Types } from "mongoose";


export class JobSkillRepository {

    async save(data: { job_posting: Types.ObjectId | string; skill: Types.ObjectId | string }) {
        const jobSkill = new JobSkill(data);
        return jobSkill.save();
    }

    async delete(id: Types.ObjectId | string) {
        return JobSkill.findByIdAndDelete(id).exec();
    }

}
