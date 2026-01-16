import { Html, Heading, Text, Link } from "@react-email/components";

const NewSubscriber = (email: string) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Subscriber Joined!</Heading>
      <Text>A new subscriber with Email: <Link>{email}</Link> has subscribed to Zenmonk's newsletter </Text>
    </Html>
  );
};
export default NewSubscriber
