import { RESPONSE_CODES } from "@/common/status-codes";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export class ErrorHandler {
  private readonly error: unknown;
  constructor(error: unknown) {
    this.error = error;
  }
  handle() {
    const err = this.error as AxiosError;
    return NextResponse.json((err.response?.data as any) ?? "Internal server error", {
      status: err?.response?.status ?? RESPONSE_CODES.INTERNAL_SERVER_ERROR,
    });
  }
}
