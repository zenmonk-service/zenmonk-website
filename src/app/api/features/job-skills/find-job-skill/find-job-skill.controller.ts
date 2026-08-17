import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { FindJobSkillHandler } from "./find-job-skill.handler";
import { FindJobSkillQuery } from "./find-job-skill.query";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class FindJobSkillController {
    private readonly handler;

    constructor({ findJobSkillHandler }: Dependency<FindJobSkillHandler>) {
        this.handler = findJobSkillHandler;
    }

    async handle(params: { id: string }) {
      try{
        const { id } = params;
        const query = new FindJobSkillQuery(id);
        const response = await this.handler.handle(query);
        return NextResponse.json(response, {
          status: HttpStatusCode.Ok,
        });
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }

}