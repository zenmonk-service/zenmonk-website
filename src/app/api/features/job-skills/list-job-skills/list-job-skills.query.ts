import { Types } from "mongoose";

export class ListJobSkillsQuery {
    constructor(
        public readonly job_posting_id: Types.ObjectId | string,
    ) { }
}