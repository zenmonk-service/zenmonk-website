import { Html, Heading, Text, Link, CodeInline } from '@react-email/components'

const NewApplicant = (
  name: string,
  email: string,
  mobile: string,
  message: string,
  fileName?: string | null
) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Applicant Update!</Heading>
      <Heading as="h2">A new applicant has contacted</Heading>
      <Text>
        Name:{' '}
        <CodeInline style={{ textTransform: 'capitalize' }}>
          {name}
        </CodeInline>{' '}
      </Text>
      <Text>
        Email: <Link>{email}</Link>{' '}
      </Text>
      <Text>Mobile Number: {mobile}</Text>
      <Text>Message: {message}</Text>
      {fileName && (
        <Text>Attachment: {process.env.APP_URL + '/uploads/' + fileName}</Text>
      )}
    </Html>
  )
}
export default NewApplicant
