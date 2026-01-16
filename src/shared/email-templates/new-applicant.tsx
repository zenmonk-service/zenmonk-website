import React from 'react'

const NewApplicant = (name: string, email: string, phone: string, message: string, document: string) => {
  return (
    <html>
      <body>
        <h1>New Job Application</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Message:</strong></p>
        <p>{message}</p>
        <p><strong>Resume/Document:</strong> {document}</p>
      </body>
    </html>
  )
}

export default NewApplicant
