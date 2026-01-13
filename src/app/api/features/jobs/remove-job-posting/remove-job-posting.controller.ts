import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { RemoveJobPostingHandler } from "./remove-job-posting.handler";
import { RemoveJobPostingQuery } from "./remove-job-posting.query";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class RemoveJobPostingController {
    private readonly handler;

    constructor({ removeJobPostingHandler }: Dependency<RemoveJobPostingHandler>) {
        this.handler = removeJobPostingHandler;
    }
    async handle(params: { id: string }) {
      try{
        const { id } = params;
        const query = new RemoveJobPostingQuery(id);
        await this.handler.handle(query);
        return NextResponse.json(
          { message: "Job posting removed successfully" },
          { status: HttpStatusCode.Ok }
        );
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}