import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { UpdateJobPostingHandler } from "./update-job-posting.handler";
import { UpdateJobPostingPayload } from "./update-job-posting.interface";
import { UpdateJobPostingCommand } from "./update-job-posting.command";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class UpdateJobPostingController {
    private readonly handler;

    constructor({ updateJobPostingHandler }: Dependency<UpdateJobPostingHandler>) {
        this.handler = updateJobPostingHandler;
    }

    async handle(req: Request, params: { id: string }) {
      try{
        const payload: UpdateJobPostingPayload = await req.json();
        const { id } = params;
        const command = new UpdateJobPostingCommand(id, payload.type, payload.category, payload.role, payload.description, payload.status);
        await this.handler.handle(command);
        return NextResponse.json(
          { message: "Job Posting updated successfully" },
          { status: HttpStatusCode.Ok }
        );
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}