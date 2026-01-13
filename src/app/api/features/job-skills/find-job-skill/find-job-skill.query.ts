import { Types } from "mongoose";

export class FindJobSkillQuery {
    constructor(
        public readonly id: Types.ObjectId | string,
    ) { }
}