import nodemailer from 'nodemailer';

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
        <div style="background-color: #f4f5f7; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <!-- Logo -->
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://zenmonk.tech/assets/images/logo.png" alt="Zenmonk Logo" style="height: 50px; width: auto;" />
          </div>

          <!-- Card -->
          <div style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; max-width: 600px; margin: 0 auto;">
            
            <!-- Header -->
            <div style="background: #F69333; padding: 28px 88px; text-align: left;">
              <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700;">Application Received!</h1>
            </div>
            
            <!-- Body -->
            <div style="padding: 40px 88px;">
              <p style="font-size: 16px; font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 20px;">Hi ${name},</p>
              
              <p style="font-size: 15px; color: #374151; margin-top: 0; margin-bottom: 16px; line-height: 1.6;">
                Thank you for applying for the <strong>${jobTitle}</strong> position at Zenmonk!
              </p>
              
              <p style="font-size: 15px; color: #374151; margin-top: 0; margin-bottom: 20px; line-height: 1.6;">
                We've received your application and our team will review it shortly. If your profile matches our requirements, we'll get in touch for the next steps.
              </p>

              <p style="font-size: 15px; color: #374151; margin-top: 0; margin-bottom: 24px; line-height: 1.6;">
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
        <div style="background-color: #f4f5f7; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <!-- Logo -->
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://zenmonk.tech/assets/images/logo.png" alt="Zenmonk Logo" style="height: 50px; width: auto;" />
          </div>

          <!-- Card -->
          <div style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; max-width: 600px; margin: 0 auto;">
            
            <!-- Header -->
            <div style="background: #F69333; padding: 28px 88px; text-align: left;">
              <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700;">New Contact Inquiry</h1>
            </div>
            
            <!-- Body -->
            <div style="padding: 40px 88px;">
              <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 24px;">Details</h2>
              
              <table style="width: 100%; border-collapse: collapse; font-size: 16px; font-family: 'Inter', sans-serif;">
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 0; color: #6b7280; width: 100px; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; letter-spacing: 0px;">Name:</td>
                  <td style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; letter-spacing: 0px;">${firstName} ${lastName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 0; color: #6b7280; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; letter-spacing: 0px;">Email:</td>
                  <td style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; letter-spacing: 0px;">${email}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 14px 0; color: #6b7280; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; letter-spacing: 0px;">Phone:</td>
                  <td style="padding: 14px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; letter-spacing: 0px;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 16px 0 8px 0; color: #6b7280; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; letter-spacing: 0px;" colspan="2">Message:</td>
                </tr>
                <tr>
                  <td style="padding: 0 0 16px 0; color: #111827; font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 20px; letter-spacing: 0px;" colspan="2">
                    ${message.replace(/\n/g, '<br>')}
                  </td>
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
