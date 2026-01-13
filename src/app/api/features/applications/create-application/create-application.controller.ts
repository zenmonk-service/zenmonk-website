import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { CreateApplicationHandler } from "./create-application.handler";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class CreateApplicationController {
  private readonly handler;
  constructor({ createApplicationHandler }: Dependency<CreateApplicationHandler>) {
    this.handler = createApplicationHandler
  }

  async handle(request: Request) {
    try {
      const body = await request.json();
      const response = await this.handler.handle(body);
      return NextResponse.json(response, {
        status: HttpStatusCode.Created,
      });
    } catch (error) {
      return new ErrorHandler(error).handle();
    }
  }
}
