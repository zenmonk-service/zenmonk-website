import { Types } from "mongoose";

export class CloseJobPostingQuery {
    constructor(
        public readonly id: Types.ObjectId | string,
    ) { }
}