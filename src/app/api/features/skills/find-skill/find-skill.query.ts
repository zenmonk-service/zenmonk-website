import { Types } from "mongoose";

export class FindSkillQuery {
    constructor(
        public readonly id: Types.ObjectId | string,
    ) { }
}