import React from 'react'

const ContactTemplate = (name: string) => {
  return (
    <html>
      <head>
        <style>{`
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #673AB7;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background-color: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 5px 5px;
          }
          .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
          }
        `}</style>
      </head>
      <body>
        <div className="header">
          <h1>Thank You for Contacting Us!</h1>
        </div>
        <div className="content">
          <p>Dear {name},</p>
          <p>
            We have received your message and we'll get back to you as soon as possible.
          </p>
          <p>
            Thank you for reaching out to us. We appreciate your interest in Zenmonk.
          </p>
          <p>Best regards,</p>
          <p>
            <strong>Team Zenmonk</strong>
          </p>
          <div className="footer">
            <p>
              This is an automated email. Please do not reply to this message.
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}

export default ContactTemplate
