import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { OpenJobPostingQuery } from "./open-job-posting.query";
import { OpenJobPostingHandler } from "./open-job-posting.handler";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";


export class OpenJobPostingController {
    private readonly handler;

    constructor({ openJobPostingHandler }: Dependency<OpenJobPostingHandler>) {
        this.handler = openJobPostingHandler;
    }

    async handle(params: { id: string }) {
      try{
        const { id } = params;
        const query = new OpenJobPostingQuery(id);
        await this.handler.handle(query);
        return NextResponse.json(
          { message: "Job posting opened successfully" },
          { status: HttpStatusCode.Ok }
        );
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}