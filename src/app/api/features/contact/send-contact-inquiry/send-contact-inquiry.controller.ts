import { Dependency } from "@/app/api/infrastructure/providers/app.type.provider";
import { SendContactInquiryHandler } from "./send-contact-inquiry.handler";
import { ErrorHandler } from "@/app/api/infrastructure/exceptions/handler";
import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export class SendContactInquiryController {
  private readonly handler;
  constructor({ sendContactInquiryHandler }: Dependency<SendContactInquiryHandler>) {
    this.handler = sendContactInquiryHandler
  }

  async handle(request: Request) {
    try {
      const body = await request.json();
      const response = await this.handler.handle(body);
      return NextResponse.json(response, {
        status: HttpStatusCode.Ok,
      });
    } catch (error) {
      return new ErrorHandler(error).handle();
    }
  }
}
