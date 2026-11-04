import nodemailer from 'nodemailer';
import { formatPhoneNumber } from '@/lib/helper';

export class MailService {
  private transporter;
  private readonly from;
  private readonly contactTo;

  constructor() {
    const user = (process.env.MAIL_USER)?.trim();
    const password = (process.env.MAIL_PASSWORD)?.trim();

    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.MAIL_PORT) || 587,
      secure: (process.env.MAIL_SECURE) === "true",
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
    const rawDigits = phone.replace(/\D/g, '');
    const telLink = phone.trim().startsWith('+') ? `+${rawDigits}` : `+${rawDigits}`;
    const formattedPhone = formatPhoneNumber(phone);

    const mailOptions = {
      from: this.from,
      replyTo: email,
      to: this.contactTo,
      subject: "New Contact Inquiry - Zenmonk",
      html: `
        <style>
          @media only screen and (max-width: 768px) {
            .outer-container {
              padding-top: 12px !important;
              padding-left: 8px !important;
              padding-right: 8px !important;
            }
            .email-logo-container {
              margin-bottom: 12px !important;
            }
            .email-logo {
              height: 56px !important;
            }
            .card-header {
              padding-left: 8px !important;
              padding-right: 8px !important;
              padding-top: 20px !important;
              padding-bottom: 20px !important;
            }
            .card-body {
              padding-left: 8px !important;
              padding-right: 8px !important;
              padding-top: 20px !important;
              padding-bottom: 20px !important;
            }
            .email-footer {
              margin-top: 12px !important;
              font-size: 10px !important;
              line-height: 14px !important;
            }
            .contact-table,
            .contact-table tbody,
            .contact-table tr,
            .contact-table td {
              display: block !important;
              width: 100% !important;
              box-sizing: border-box !important;
            }
            .contact-table tr {
              padding: 10px 0 !important;
              border-bottom: 1px solid #e5e7eb !important;
            }
            .contact-table .field-label {
              padding: 0 0 4px 0 !important;
              font-size: 13px !important;
              line-height: 18px !important;
              color: #6b7280 !important;
              font-weight: 600 !important;
            }
            .contact-table .field-value {
              padding: 0 !important;
              font-size: 15px !important;
              line-height: 22px !important;
              color: #111827 !important;
              font-weight: 400 !important;
            }
          }
        </style>
        <div class="outer-container" style="background-color: #f4f5f7; padding: 24px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <!-- Logo -->
          <div class="email-logo-container" style="text-align: center; margin-bottom: 16px;">
            <img class="email-logo" src="https://zenmonk-website.vercel.app/logo.svg" alt="Zenmonk Logo" style="height: 56px; width: auto; display: inline-block;" />
          </div>

          <!-- Card -->
          <div style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; max-width: 600px; margin: 0 auto;">
            
            <!-- Header -->
            <div class="card-header" style="background: #F69333; padding: 28px 32px; text-align: left; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
              <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">New Contact Inquiry</h1>
            </div>
            
            <!-- Body -->
            <div class="card-body" style="padding: 32px 32px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
              <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 24px;">Details</h2>
              
              <table class="contact-table" style="width: 100%; border-collapse: collapse; font-size: 16px; font-family: 'Inter', sans-serif; table-layout: fixed;">
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td class="field-label" style="padding: 14px 0; color: #6b7280; width: 90px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 16px; line-height: 22px; letter-spacing: 0px; vertical-align: top;">Name:</td>
                  <td class="field-value" style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word; vertical-align: top;">${firstName} ${lastName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td class="field-label" style="padding: 14px 0; color: #6b7280; width: 90px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 16px; line-height: 22px; letter-spacing: 0px; vertical-align: top;">Email:</td>
                  <td class="field-value" style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word; vertical-align: top;">
                    <a href="mailto:${email}" style="color: #2563EB; text-decoration: none; font-weight: 500;">${email}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td class="field-label" style="padding: 14px 0; color: #6b7280; width: 90px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 16px; line-height: 22px; letter-spacing: 0px; vertical-align: top;">Phone:</td>
                  <td class="field-value" style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word; vertical-align: top;">
                    <a href="tel:${telLink}" style="color: #2563EB; text-decoration: none; font-weight: 500;">${formattedPhone}</a>
                  </td>
                </tr>
                <tr>
                  <td class="field-label" style="padding: 14px 0; color: #6b7280; width: 90px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 16px; line-height: 22px; letter-spacing: 0px; vertical-align: top;">Message:</td>
                  <td class="field-value" style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word; vertical-align: top; white-space: pre-wrap;">${message.trim()}</td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Footer -->
          <div class="email-footer" style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 24px; line-height: 1.5; max-width: 600px; margin-left: auto; margin-right: auto;">
            F382, Phase, 8B,&#8203; Industrial Area, focal point, Sahibzada Ajit Singh Nagar, Punjab 160055
          </div>
        </div>
      `,
    };

    const confirmationMailOptions = {
      from: this.from,
      to: email,
      subject: "Inquiry Submitted - Zenmonk",
      html: `
        <style>
          @media only screen and (max-width: 768px) {
            .confirmation-outer-container {
              padding: 12px 8px !important;
            }
            .confirmation-logo-container {
              margin-bottom: 12px !important;
            }
            .confirmation-logo {
              height: 56px !important;
            }
            .confirmation-card-header {
              padding: 20px 8px !important;
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
              padding: 20px 8px !important;
              font-size: 14px !important;
              line-height: 20px !important;
            }
            .confirmation-card-body h2 {
              font-size: 17px !important;
              line-height: 22px !important;
            }
            .confirmation-footer {
              margin-top: 12px !important;
              font-size: 10px !important;
              line-height: 14px !important;
            }
          }
        </style>
        <div class="confirmation-outer-container" style="background-color: #f4f5f7; padding: 24px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div class="confirmation-logo-container" style="text-align: center; margin-bottom: 16px;">
            <img class="confirmation-logo" src="https://zenmonk-website.vercel.app/logo.svg" alt="Zenmonk Logo" style="height: 56px; width: auto; display: inline-block;" />
          </div>

          <div style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; max-width: 600px; margin: 0 auto;">
            <div class="confirmation-card-header" style="background: #F69333; padding: 28px 32px; text-align: left;">
              <h1 class="confirmation-heading" style="color: white; margin: 0; font-size: 26px; font-weight: 700; white-space: nowrap;"><img class="confirmation-check" src="https://zenmonk-website.vercel.app/check.svg" alt="" style="height: 28px; width: 28px; vertical-align: middle; margin-right: 8px;" />Inquiry Submitted!</h1>
            </div>

            <div class="confirmation-card-body" style="padding: 32px; color: #111827; font-family: 'Inter', sans-serif; font-size: 15px; line-height: 22px;">
              <h2 style="font-size: 18px; margin: 0 0 20px;">Dear ${firstName} ${lastName},</h2>
              <p style="margin: 0 0 16px;">Thank you for contacting us!</p>
              <p style="margin: 0 0 16px;">We are pleased to inform you that your inquiry has been successfully submitted. Our team has received your message and will review it shortly.</p>

              <p style="margin: 0 0 8px; font-weight: 700;">Your Submitted Details</p>
              <p style="margin: 0 0 8px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${formattedPhone}</p>
              <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
              <p style="margin: 0 0 16px; white-space: pre-wrap; overflow-wrap: break-word;">${message.trim()}</p>

              <p style="margin: 0 0 28px;">Our team will get in touch with you as soon as possible to assist you with your inquiry.</p>
              <p style="margin: 0 0 16px;">We appreciate your interest and look forward to connecting with you!</p>
              <p style="margin: 0;">Best Regards,<br/><strong>Support Team</strong></p>
              <p style="margin: 16px 0 0;">Zenmonk<br/><a href="https://zenmonk.tech" style="color: #2563EB; text-decoration: none;">https://zenmonk.tech</a></p>
            </div>
          </div>

          <div class="confirmation-footer" style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 24px; line-height: 1.5; max-width: 600px; margin-left: auto; margin-right: auto;">
            F382, Phase, 8B,&#8203; Industrial Area, focal point, Sahibzada Ajit Singh Nagar, Punjab 160055
          </div>
        </div>
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
