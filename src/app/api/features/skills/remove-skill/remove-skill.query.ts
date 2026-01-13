import { Types } from "mongoose";

export class RemoveSkillQuery {
    constructor(
        public readonly id: Types.ObjectId | string,
    ) { }

}    