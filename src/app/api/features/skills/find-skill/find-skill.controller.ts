import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { FindSkillHandler } from "./find-skill.handler";
import { FindSkillQuery } from "./find-skill.query";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class FindSkillController {
    private readonly handler;

    constructor({ findSkillHandler }: Dependency<FindSkillHandler>) {
        this.handler = findSkillHandler
    }

    async handle(params: { id: string }) {
      try{
        const { id } = params;
        const query = new FindSkillQuery(id);
        const response = await this.handler.handle(query);
        return NextResponse.json(response, { status: HttpStatusCode.Ok });
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }

}