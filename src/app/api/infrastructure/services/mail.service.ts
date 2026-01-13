import nodemailer from 'nodemailer';

export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'localhost',
      port: parseInt(process.env.MAIL_PORT || '1025'),
      secure: false, // MailHog doesn't use SSL by default
    });
  }

  async sendApplicationConfirmation(
    to: string,
    name: string,
    jobTitle: string,
    tracking_id: string,
    trackingUrl: string
  ) {
    const mailOptions = {
      from: '"ZenMonk Careers" <careers@zenmonk.com>',
      to,
      subject: 'Application Received - Zenmonk',
      html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #F69333 0%, #E67E22 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                        <h1 style="color: white; margin: 0;">Application Received!</h1>
                    </div>
                    
                    <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 8px 8px;">
                        <h2 style="color: #333;">Hi ${name},</h2>
                        <p>Thank you for applying for the <strong>${jobTitle}</strong> position at Zenmonk!</p>
                        <p>We've received your application and our team will review it shortly. If your profile matches our requirements, we'll get in touch for the next steps.</p>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #F69333;">
                            <p style="margin: 0 0 10px 0;"><strong>Your Tracking ID:</strong></p>
                            <p style="font-size: 18px; color: #F69333; font-weight: bold; margin: 0;">${tracking_id}</p>
                        </div>
                        
                        <p>You can track your application status anytime using the link below:</p>
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${trackingUrl}" style="background: #F69333; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                                Track Application Status
                            </a>
                        </div>
                        
                        <p style="color: #666; font-size: 14px;">Or copy this link: <a href="${trackingUrl}" style="color: #F69333;">${trackingUrl}</a></p>
                        
                        <p style="margin-top: 30px;">Best regards,<br><strong>Team Zenmonk</strong></p>
                    </div>
                </div>
            `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Confirmation email sent to:', to);
    } catch (error) {
      console.error('Error sending email:', error);
      // We don't necessarily want to fail the whole application process if email fails
    }
  }
}
