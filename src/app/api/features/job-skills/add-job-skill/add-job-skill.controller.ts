import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { AddJobSkillHandler } from "./add-job-skill.handler";
import { AddJobSkillCommand } from "./add-job-skill.command";
import { JobSkillPayload } from "./add-job-skill.interface";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class AddJobSkillController {
    private readonly handler;
    constructor({ addJobSkillHandler }: Dependency<AddJobSkillHandler>) {
        this.handler = addJobSkillHandler;

    }
    async handle(req: Request) {
      try{
        const payload: JobSkillPayload = await req.json();
        const command = new AddJobSkillCommand(payload.job_posting, payload.skill);
        await this.handler.handle(command);
        return NextResponse.json(
          { message: "Job Skill created successfully" },
          { status: HttpStatusCode.Created }
        );
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}