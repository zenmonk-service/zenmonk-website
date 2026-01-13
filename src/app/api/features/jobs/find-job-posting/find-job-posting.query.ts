import { Types } from "mongoose";

export class FindJobPostingQuery {
    constructor(
        public readonly id: Types.ObjectId | string,
    ) { }
}