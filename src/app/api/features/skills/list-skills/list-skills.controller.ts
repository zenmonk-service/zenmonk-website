import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { ListSkillsHandler } from "./list-skills.handler";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class ListSkillsController {
    private readonly handler;

    constructor({ listSkillHandler }: Dependency<ListSkillsHandler>) {
        this.handler = listSkillHandler;
    }

    async handle() {
      try{
        const response = await this.handler.handle();
        return NextResponse.json(response, { status: HttpStatusCode.Ok });
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}
