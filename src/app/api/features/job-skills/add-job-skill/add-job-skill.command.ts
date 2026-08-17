import { Types } from "mongoose";

export class AddJobSkillCommand {
    constructor(
        public readonly job_posting: Types.ObjectId | string,
        public readonly skill: Types.ObjectId | string,
    ) { }
}