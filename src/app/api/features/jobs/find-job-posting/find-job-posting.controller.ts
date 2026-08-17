import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { FindJobPostingHandler } from "./find-job-posting.handler";
import { FindJobPostingQuery } from "./find-job-posting.query";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class FindJobPostingController {
    private readonly handler;

    constructor({ findJobPostingHandler }: Dependency<FindJobPostingHandler>) {
        this.handler = findJobPostingHandler
    }

    async handle(params: { id: string }) {
      try{
        const { id } = params;
        const query = new FindJobPostingQuery(id);
        const response = await this.handler.handle(query);
        return NextResponse.json(response, { status: HttpStatusCode.Ok });
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }

}