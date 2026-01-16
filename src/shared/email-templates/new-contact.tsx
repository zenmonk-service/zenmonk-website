const NewContact = (name: string, email: string, phone: string, message: string) => {
  return (
    <html>
      <body>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Message:</strong></p>
        <p>{message}</p>
      </body>
    </html>
  )
}

export default NewContact
