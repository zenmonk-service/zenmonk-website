export class AddJobPostingCommand {
    constructor(
        public readonly type: string,
        public readonly category: string,
        public readonly role: string,
        public readonly description: string,
        public readonly status?: string,

    ) { }
}