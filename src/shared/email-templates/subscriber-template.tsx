import React from 'react'

const SubscriberTemplate = () => {
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
            background-color: #2196F3;
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
          <h1>Welcome to Zenmonk!</h1>
        </div>
        <div className="content">
          <p>Hello,</p>
          <p>
            Thank you for subscribing to our newsletter! We're excited to have you with us.
          </p>
          <p>
            You'll now receive regular updates, insights, and news from the team at Zenmonk.
          </p>
          <p>
            If you have any questions, feel free to reach out to us.
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

export default SubscriberTemplate
