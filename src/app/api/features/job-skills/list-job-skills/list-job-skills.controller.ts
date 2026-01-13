import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { ListJobSkillsHandler } from "./list-job-skills.handler";
import { ListJobSkillsQuery } from "./list-job-skills.query";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class ListJobSkillsController {
    private readonly handler;

    constructor({ listJobSkillsHandler }: Dependency<ListJobSkillsHandler>) {
        this.handler = listJobSkillsHandler;
    }

    async handle(req: Request) {
      try{
        const url = new URL(req.url);
        const job_posting_id = url.searchParams.get("job_posting_id") ?? "";
        const query = new ListJobSkillsQuery(job_posting_id);
        const response = await this.handler.handle(query);
        return NextResponse.json(response, {
          status: HttpStatusCode.Ok,
        });
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}