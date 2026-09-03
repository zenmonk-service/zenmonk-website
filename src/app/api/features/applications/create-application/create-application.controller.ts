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
      const formData = await request.formData();
      const file = formData.get('resume') as File | null;
      
      const body = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
        job_posting: formData.get('job_posting') as string,
        resumeFile: file,
      };

      const response = await this.handler.handle(body);
      return NextResponse.json(response, {
        status: HttpStatusCode.Created,
      });
    } catch (error) {
      return new ErrorHandler(error).handle();
    }
  }
}
