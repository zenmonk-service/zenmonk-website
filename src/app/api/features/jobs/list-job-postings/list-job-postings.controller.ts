import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { ListJobPostingsHandler } from "./list-job-postings.handler";
import { ListJobPostingsQuery } from "./list-job-postings.query";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";



export class ListJobPostingsController {
    private readonly handler;

    constructor({ listJobPostingsHandler }: Dependency<ListJobPostingsHandler>) {
        this.handler = listJobPostingsHandler;
    }

    async handle(req: Request) {
      try{
        const url = new URL(req.url);
        const category = url.searchParams.get("category") ?? undefined;
        const status = url.searchParams.get("status") ?? undefined;
        const query = new ListJobPostingsQuery(category, status);
        const response = await this.handler.handle(query);
        return NextResponse.json(response, { status: HttpStatusCode.Ok });
        
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}