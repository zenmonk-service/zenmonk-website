import nodemailer from 'nodemailer';
import { formatPhoneNumber } from '@/lib/helper';

export class MailService {
  private transporter;
  private readonly from;

  constructor() {
    const user = process.env.MAIL_USER?.trim();
    const password = process.env.MAIL_PASSWORD?.trim();

    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'localhost',
      port: parseInt(process.env.MAIL_PORT || '1025'),
      secure: process.env.MAIL_SECURE === 'true',
      auth: user && password ? { user, pass: password } : undefined,
    });
    this.from = process.env.MAIL_FROM || 'ZenMonk Careers <careers@zenmonk.com>';
  }

  async sendApplicationConfirmation(
    to: string,
    name: string,
    jobTitle: string,
    tracking_id: string,
    trackingUrl: string
  ) {
    const mailOptions = {
      from: this.from,
      to,
      subject: 'Application Received - Zenmonk',
      html: `
        <style>
          @media only screen and (max-width: 768px) {
            .outer-container {
              padding-top: 12px !important;
              padding-left: 4px !important;
              padding-right: 4px !important;
            }
            .email-logo-container {
              margin-bottom: 12px !important;
            }
            .email-logo {
              height: 80px !important;
            }
            .card-header {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .card-body {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
          }
        </style>
        <div class="outer-container" style="background-color: #f4f5f7; padding: 24px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <!-- Logo -->
          <div class="email-logo-container" style="text-align: center; margin-bottom: 16px;">
            <img class="email-logo" src="https://zenmonk-website.vercel.app/logo.svg" alt="Zenmonk Logo" style="height: 100px; width: auto; display: inline-block;" />
          </div>

          <!-- Card -->
          <div style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; max-width: 600px; margin: 0 auto;">
            
            <!-- Header -->
            <div class="card-header" style="background: #F69333; padding: 28px 88px; text-align: left; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
              <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">Application Received!</h1>
            </div>
            
            <!-- Body -->
            <div class="card-body" style="padding: 40px 88px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
              <p style="font-size: 16px; font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 20px; line-height: 1.4; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">Hi ${name},</p>
              
              <p style="font-size: 15px; color: #374151; margin-top: 0; margin-bottom: 16px; line-height: 1.6; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
                Thank you for applying for the <strong>${jobTitle}</strong> position at Zenmonk!
              </p>
              
              <p style="font-size: 15px; color: #374151; margin-top: 0; margin-bottom: 20px; line-height: 1.6; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
                We've received your application and our team will review it shortly. If your profile matches our requirements, we'll get in touch for the next steps.
              </p>

              <p style="font-size: 15px; color: #374151; margin-top: 0; margin-bottom: 24px; line-height: 1.6; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
                You can track your application status anytime using the link below:
              </p>
              
              <div style="margin-bottom: 32px;">
                <a href="${trackingUrl}" style="display: inline-block; background: #F69333; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 15px;">
                  Track Application Status
                </a>
              </div>
              
              <p style="font-size: 15px; color: #374151; margin: 0; line-height: 1.6;">
                Best regards,<br>
                <strong>Team Zenmonk</strong>
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 24px; line-height: 1.5; max-width: 600px; margin-left: auto; margin-right: auto;">
            F382, Phase, 8B, Industrial Area, focal point, Sahibzada Ajit<br/>Singh Nagar, Punjab 160055
          </div>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Confirmation email sent to:', to);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendContactInquiry(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string
  ) {
    const mailOptions = {
      from: email,
      to: 'admin@zenmonk.tech',
      subject: 'New Contact Inquiry - Zenmonk',
      html: `
        <style>
          @media only screen and (max-width: 768px) {
            .outer-container {
              padding-top: 12px !important;
              padding-left: 4px !important;
              padding-right: 4px !important;
            }
            .email-logo-container {
              margin-bottom: 12px !important;
            }
            .email-logo {
              height: 80px !important;
            }
            .card-header {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .card-body {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
          }
        </style>
        <div class="outer-container" style="background-color: #f4f5f7; padding: 24px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <!-- Logo -->
          <div class="email-logo-container" style="text-align: center; margin-bottom: 16px;">
            <img class="email-logo" src="https://zenmonk-website.vercel.app/logo.svg" alt="Zenmonk Logo" style="height: 100px; width: auto; display: inline-block;" />
          </div>

          <!-- Card -->
          <div style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; max-width: 600px; margin: 0 auto;">
            
            <!-- Header -->
            <div class="card-header" style="background: #F69333; padding: 28px 88px; text-align: left; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
              <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">New Contact Inquiry</h1>
            </div>
            
            <!-- Body -->
            <div class="card-body" style="padding: 40px 88px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;">
              <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 24px;">Details</h2>
              
              <table style="width: 100%; border-collapse: collapse; font-size: 16px; font-family: 'Inter', sans-serif; table-layout: fixed;">
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 0; color: #6b7280; width: 80px; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; vertical-align: top;">Name:</td>
                  <td style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word; vertical-align: top;">${firstName} ${lastName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 0; color: #6b7280; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; vertical-align: top;">Email:</td>
                  <td style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word; vertical-align: top;">${email}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 0; color: #6b7280; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; vertical-align: top;">Phone:</td>
                  <td style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word; vertical-align: top;">${formatPhoneNumber(phone)}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; color: #6b7280; width: 80px; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; vertical-align: top;">Message:</td>
                  <td style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 22px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; overflow-wrap: break-word; vertical-align: top; white-space: pre-wrap;">${message.trim()}</td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 24px; line-height: 1.5; max-width: 600px; margin-left: auto; margin-right: auto;">
            F382, Phase, 8B, Industrial Area, focal point, Sahibzada Ajit<br/>Singh Nagar, Punjab 160055
          </div>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Contact inquiry email sent successfully');
    } catch (error) {
      console.error('Error sending contact inquiry email:', error);
      throw new Error('Failed to send email');
    }
  }
}
