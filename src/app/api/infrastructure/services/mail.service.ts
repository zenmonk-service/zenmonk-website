import nodemailer from "nodemailer";
import { formatPhoneNumber } from "@/lib/helper";
import { escapeHtml } from "@/lib/file-preview";

const unwrapHardWrapped = (text: string): string =>
  text.replace(/\r\n?/g, "\n").replace(/(\S{20,})\n(?=\S+(?:\n|$))/g, "$1");

const formatMessageToHtml = (text: string): string =>
  escapeHtml(unwrapHardWrapped(text.trim()))
    .split("\n")
    .map((line) => {
      const withLongWordBreaks = line.replace(
        /\S{22,}/g,
        (match) => `<span style="word-break: break-all;">${match}</span>`,
      );
      return withLongWordBreaks.trim() === ""
        ? "&nbsp;"
        : withLongWordBreaks.replace(/ {2}/g, "&nbsp; ");
    })
    .join("<br/>");

export class MailService {
  private transporter;
  private readonly from;
  private readonly contactTo;

  constructor() {
    const user = process.env.MAIL_USER?.trim();
    const password = process.env.MAIL_PASSWORD?.trim();

    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.MAIL_PORT) || 587,
      secure: process.env.MAIL_SECURE === "true",
      auth: {
        user,
        pass: password,
      },
    });

    this.from = process.env.MAIL_FROM || "admin@zenmonk.tech";
    this.contactTo = process.env.MAIL_TO;
  }

  async sendContactInquiry(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string,
  ) {
    const rawDigits = phone.replace(/\D/g, "");
    const telLink = `+${rawDigits}`;
    const formattedPhone = escapeHtml(formatPhoneNumber(phone));
    const safeName = escapeHtml(`${firstName} ${lastName}`);
    const safeEmail = escapeHtml(email);
    const formattedMessage = formatMessageToHtml(message);

    const mailOptions = {
      from: this.from,
      replyTo: email,
      to: this.contactTo,
      subject: "New Contact Inquiry - Zenmonk",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>New Contact Inquiry</title>
          <style>
            .email-footer {
  text-align: center;
  color: #9CA3AF;
  font-size: 12px;
  margin-top: 24px;
  line-height: 1.5;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  width: 340px;
}
            @media only screen and (max-width: 768px) {
              .outer-container {
                padding-top: 12px !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              .email-logo-container {
                margin-bottom: 12px !important;
              }
              .email-logo {
                height: 56px !important;
              }
              .card-header {
                padding: 20px 16px !important;
              }
              .card-header h1 {
                font-size: 21px !important;
                line-height: 28px !important;
              }
              .card-body {
                padding: 20px 16px !important;
              }
              .details-heading {
                font-size: 17px !important;
                margin-bottom: 12px !important;
              }
              .field-label {
                padding: 7px 0 !important;
                font-size: 14px !important;
                line-height: 18px !important;
                width: 65px !important;
              }
              .field-value {
                padding: 7px 0 !important;
                font-size: 14px !important;
                line-height: 18px !important;
              }
              .message-section {
                padding-top: 8px !important;
              }
              .message-label {
                font-size: 14px !important;
                line-height: 18px !important;
                margin-bottom: 3px !important;
              }
              .message-value {
                font-size: 14px !important;
                line-height: 19px !important;
              }
              .email-footer {
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 12px !important;
    font-size: 10px !important;
    line-height: 14px !important;
    padding: 0 16px !important;
    width: auto !important;
  }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f5f7;">
          <div class="outer-container" style="background-color: #f4f5f7; padding: 24px 0px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <!-- Logo -->
            <div class="email-logo-container" style="text-align: center; margin-bottom: 16px;">
              <img class="email-logo" src="https://zenmonk-website.vercel.app/monk.svg" alt="Zenmonk Logo" style="height: 50px; width: 51.5px; display: inline-block;" />
            </div>

            <!-- Card -->
            <div style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; max-width: 600px; margin: 0 auto;">

              <!-- Header -->
              <div class="card-header" style="background: #F69333; padding: 24px 88px; text-align: left; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">New Contact Inquiry</h1>
              </div>

              <!-- Body -->
              <div class="card-body" style="padding: 24px 88px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
                <h2 class="details-heading" style="font-size: 20px; font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 20px;">Details</h2>

                <table class="contact-table" style="width: 100%; border-collapse: collapse; font-size: 16px; font-family: 'Inter', sans-serif; table-layout: fixed;">
                  <tr style="border-bottom: 1px solid #e5e7eb;">
                    <td class="field-label" style="padding: 10px 0; color: #6b7280; width: 127px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 16px; line-height: 20px; vertical-align: top;">Name:</td>
                    <td class="field-value" style="padding: 10px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word; vertical-align: top;">${safeName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e5e7eb;">
                    <td class="field-label" style="padding: 10px 0; color: #6b7280; width: 127px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 16px; line-height: 20px; vertical-align: top;">Email:</td>
                    <td class="field-value" style="padding: 10px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; word-break: break-all; overflow-wrap: break-word; vertical-align: top;">${safeEmail}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e5e7eb;">
                    <td class="field-label" style="padding: 10px 0; color: #6b7280; width: 127px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 16px; line-height: 20px; vertical-align: top;">Phone:</td>
                    <td class="field-value" style="padding: 10px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word; vertical-align: top;">${formattedPhone}</td>
                  </tr>
                </table>

                <div class="message-section" style="padding-top: 10px;">
                  <div class="message-label" style="color: #6b7280; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 16px; line-height: 20px; margin-bottom: 4px;">Message:</div>
                  <div class="message-value" style="color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 21px; word-break: break-word; overflow-wrap: break-word;">${formattedMessage}</div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="email-footer">
              F382, Phase, 8B, Industrial Area, focal point, Sahibzada Ajit Singh Nagar, Punjab 160055
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const confirmationMailOptions = {
      from: this.from,
      to: email,
      subject: "Inquiry Submitted - Zenmonk",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>Inquiry Submitted</title>
          <style>
            .email-footer {
  text-align: center;
  color: #9CA3AF;
  font-size: 12px;
  margin-top: 24px;
  line-height: 1.5;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  width: 340px;
}
            @media only screen and (max-width: 768px) {
              .confirmation-outer-container {
                padding: 12px 0px !important;
              }
              .confirmation-logo-container {
                margin-bottom: 12px !important;
              }
              .confirmation-logo {
                height: 56px !important;
              }
              .confirmation-card-header {
                padding: 20px 16px !important;
              }
              .confirmation-heading {
                font-size: 21px !important;
                line-height: 28px !important;
                white-space: nowrap !important;
              }
              .confirmation-check {
                height: 22px !important;
                width: 22px !important;
                margin-right: 5px !important;
              }
              .confirmation-card-body {
                padding: 20px 16px !important;
                font-size: 14px !important;
                line-height: 20px !important;
              }
              .confirmation-card-body h2 {
                font-size: 17px !important;
                line-height: 22px !important;
              }
              .email-footer {
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 12px !important;
    font-size: 10px !important;
    line-height: 14px !important;
    padding: 0 16px !important;
    width: auto !important;
  }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f5f7;">
          <div class="confirmation-outer-container" style="background-color: #f4f5f7; padding: 24px 0px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="confirmation-logo-container" style="text-align: center; margin-bottom: 16px;">
              <img class="confirmation-logo" src="https://zenmonk-website.vercel.app/monk.svg" alt="Zenmonk Logo" style="height: 50px; width: 51.5px; display: inline-block;" />
            </div>

            <div style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; max-width: 600px; margin: 0 auto;">
              <div class="confirmation-card-header" style="background: #F69333; padding: 24px 88px; text-align: left;">
                <h1 class="confirmation-heading" style="color: white; margin: 0; font-size: 28px; font-weight: 700; white-space: nowrap;"><img class="confirmation-check" src="https://zenmonk-website.vercel.app/check.svg" alt="" style="height: 28px; width: 28px; vertical-align: middle; margin-right: 8px;" />Inquiry Submitted!</h1>
              </div>

              <div class="confirmation-card-body" style="padding: 24px 88px; color: #111827; font-family: 'Inter', sans-serif; font-size: 16px; line-height: 22px;">
                <h2 style="font-size: 18px; margin: 0 0 20px;">Dear ${safeName},</h2>
                <p style="margin: 0 0 16px;">Thank you for contacting us!</p>
                <p style="margin: 0 0 16px;">We are pleased to inform you that your inquiry has been successfully submitted. Our team has received your message and will review it shortly.</p>

                <p style="margin: 0 0 8px; font-weight: 700;">Your Submitted Details</p>
                <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
                <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
                <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${formattedPhone}</p>
                <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
                <div style="margin: 0 0 16px; overflow-wrap: break-word; word-break: normal; word-wrap: break-word; line-height: 22px;">${formattedMessage}</div>

                <p style="margin: 0 0 28px;">Our team will get in touch with you as soon as possible to assist you with your inquiry.</p>
                <p style="margin: 0 0 16px;">We appreciate your interest and look forward to connecting with you!</p>
                <p style="margin: 0;">Best Regards,<br/><strong>Support Team</strong></p>
                <p style="margin: 16px 0 0;">Zenmonk<br/><a href="https://zenmonk.tech" style="color: #2563EB; text-decoration: none;">https://zenmonk.tech</a></p>
              </div>
            </div>

            <!-- Footer -->
            <div class="email-footer">
              F382, Phase, 8B, Industrial Area, focal point, Sahibzada Ajit Singh Nagar, Punjab 160055
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await Promise.all([
        this.transporter.sendMail(mailOptions),
        this.transporter.sendMail(confirmationMailOptions),
      ]);
      console.log("Contact inquiry and confirmation emails sent successfully");
    } catch (error) {
      console.error("Error sending contact inquiry email:", error);
      throw new Error("Failed to send email");
    }
  }
}
