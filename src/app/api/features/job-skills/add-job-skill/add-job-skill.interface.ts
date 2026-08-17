import { Types } from "mongoose";

export interface JobSkillPayload {
    job_posting: Types.ObjectId | string;
    skill: Types.ObjectId | string;
}