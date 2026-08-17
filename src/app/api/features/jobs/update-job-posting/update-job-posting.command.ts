import { Types } from "mongoose";

export class UpdateJobPostingCommand {
    constructor(
        public readonly id: Types.ObjectId | string,
        public readonly type: string,
        public readonly category: string,
        public readonly role: string,
        public readonly description: string,
        public readonly status?: string,
    ) { }
}