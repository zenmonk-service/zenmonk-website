const NewSubscriber = (email: string) => {
  return (
    <html>
      <body>
        <h1>New Newsletter Subscription</h1>
        <p>A new user has subscribed to the newsletter.</p>
        <p><strong>Email:</strong> {email}</p>
      </body>
    </html>
  )
}

export default NewSubscriber
