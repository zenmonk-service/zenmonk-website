import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { AddJobPostingCommand } from "./add-job-posting.command";
import { AddJobPostingHandler } from "./add-job-posting.handler";
import { JobPostingPayload } from "./add-job-posting.interface";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";


export class AddJobPostingController {
    private readonly handler;

    constructor({ addJobPostingHandler }: Dependency<AddJobPostingHandler>) {
        this.handler = addJobPostingHandler;
    }

    async handle(req: Request) {
      try{
        const payload: JobPostingPayload = await req.json();
        const command = new AddJobPostingCommand(payload.type, payload.category, payload.role, payload.description, payload.status);
        await this.handler.handle(command);
        return NextResponse.json(
          { message: "Job posting created successfully" },
          { status: HttpStatusCode.Created }
        );
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}