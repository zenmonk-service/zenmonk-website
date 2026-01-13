import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { ListApplicationHandler } from "./list-applications.handler";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class ListApplicationsController {
    private readonly handler;
    constructor({ listApplicationsHandler }: Dependency<ListApplicationHandler>) {
        this.handler = listApplicationsHandler
    }

    async handle() {
      try{
        const response = await this.handler.handle();
        return NextResponse.json(response, {
          status: HttpStatusCode.Ok,
        });
      } catch (error) {
        return new ErrorHandler(error).handle();
      }
    }
}