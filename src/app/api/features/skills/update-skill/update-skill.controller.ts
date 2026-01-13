import { UpdateSkillPayload } from "./update-skill.interface";
import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { UpdateSkillHandler } from "./update-skill.handler";
import { UpdateSkillCommand } from "./update-skill.command";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class UpdateSkillController {
    private readonly handler;

    constructor({ updateSkillHandler }: Dependency<UpdateSkillHandler>) {
        this.handler = updateSkillHandler
    }

    async handle(request: Request, params: { id: string }) {
      try{
        const { id } = params;
        const payload: UpdateSkillPayload = await request.json();
        const command = new UpdateSkillCommand(payload.name, payload.description);
        await this.handler.handle(id, command);
        return NextResponse.json(
          { message: "Skill updated successfully" },
          { status: HttpStatusCode.Ok }
        );
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}