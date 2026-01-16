import React from 'react'

const CareerTemplate = (name: string) => {
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
            background-color: #4CAF50;
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
          <h1>Thank You for Your Application!</h1>
        </div>
        <div className="content">
          <p>Dear {name},</p>
          <p>
            Thank you for applying to join the Zenmonk team! We have received
            your application and our recruitment team will review it carefully.
          </p>
          <p>
            We appreciate your interest in working with us. If your profile
            matches our requirements, we will contact you soon to discuss the
            next steps.
          </p>
          <p>
            In the meantime, feel free to explore more about us at{' '}
            <a href="https://zenmonk.tech">zenmonk.tech</a>.
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

export default CareerTemplate
