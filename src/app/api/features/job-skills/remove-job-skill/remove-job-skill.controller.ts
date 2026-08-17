import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { RemoveJobSkillHandler } from "./remove-job-skill.handler";
import { RemoveJobSkillQuery } from "./remove-job-skill.query";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class RemoveJobSkillController {
    private readonly handler;
    constructor({ removeJobSkillHandler }: Dependency<RemoveJobSkillHandler>) {
        this.handler = removeJobSkillHandler;
    }

    async handle(params: { id: string }) {
      try{
        const { id } = params;
        const query = new RemoveJobSkillQuery(id);
        await this.handler.handle(query);
        return NextResponse.json(
          { message: "Job skill removed successfully" },
          { status: HttpStatusCode.Ok }
        );
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}