import Application from "@/models/job-application";

export class ListApplicationHandler {
    async handle() {
        return await Application.find();
    }
}