import { Html, Heading, Text, Link, CodeInline } from "@react-email/components";

const NewContact = (name: string, email: string, mobile: string, message: string) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Client Update!</Heading>
      <Heading as="h2">
        A new client has contacted
      </Heading>
      <Text>Name: <CodeInline style={{textTransform: 'capitalize'}}>{name}</CodeInline> </Text>
      <Text>Email: <Link>{email}</Link> </Text>
      <Text>Mobile Number: {mobile}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};
export default NewContact;
