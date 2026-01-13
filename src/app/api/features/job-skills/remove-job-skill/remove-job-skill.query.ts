import { Types } from "mongoose";

export class RemoveJobSkillQuery {
    constructor(
        public readonly id: Types.ObjectId | string,
    ) { }
}