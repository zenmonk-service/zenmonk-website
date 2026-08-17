import { Types } from "mongoose";

export class RemoveJobPostingQuery {
    constructor(
        public readonly id: Types.ObjectId | string,
    ) { }
}