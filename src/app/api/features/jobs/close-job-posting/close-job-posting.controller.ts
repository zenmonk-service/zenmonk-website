import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { CloseJobPostingHandler } from "./close-job-posting.handler";
import { CloseJobPostingQuery } from "./close-job-posting.query";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class CloseJobPostingController {
    private readonly handler;

    constructor({ closeJobPostingHandler }: Dependency<CloseJobPostingHandler>) {
        this.handler = closeJobPostingHandler;
    }

    async handle(params: {id : string}) {
      try{
        const { id } = params;
        const query = new CloseJobPostingQuery(id);
        await this.handler.handle(query);
        return NextResponse.json(
          { message: "Job posting closed successfully" },
          { status: HttpStatusCode.Ok }
        );
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}

