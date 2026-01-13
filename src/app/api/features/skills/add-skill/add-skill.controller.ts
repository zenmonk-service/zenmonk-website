import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { AddSkillHandler } from "./add-skill.handler";
import { AddSkillPayload } from "./add-skill.interface";
import { AddSkillCommand } from "./add-skill.command";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class AddSkillController {
    private readonly handler;

    constructor({ addSkillHandler }: Dependency<AddSkillHandler>) {
        this.handler = addSkillHandler
    }

    async handle(request: Request) {
      try{
        const body: AddSkillPayload = await request.json();
        const command = new AddSkillCommand(body.name, body.description);
        await this.handler.handle(command);
        return NextResponse.json(
          { message: "Skill added successfully" },
          { status: HttpStatusCode.Created }
        );
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}