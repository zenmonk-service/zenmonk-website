import { Types } from "mongoose";

export class OpenJobPostingQuery {
    constructor(
        public readonly id: Types.ObjectId | string,
    ) { }
}