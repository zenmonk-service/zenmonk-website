import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { RemoveSkillHandler } from "./remove-skill.handler";
import { RemoveSkillQuery } from "./remove-skill.query";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class RemoveSkillController {
    private readonly handler;

    constructor({ removeSkillHandler }: Dependency<RemoveSkillHandler>) {
        this.handler = removeSkillHandler;
    }

    async handle(params: { id: string }) {
      try{
        const { id } = params;
        const query = new RemoveSkillQuery(id);
        await this.handler.handle(query);
        return NextResponse.json(
          { message: "Remove Skill" },
          { status: HttpStatusCode.Ok }
        );
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}