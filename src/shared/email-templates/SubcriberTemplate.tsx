import { Html, Heading, Text, render } from "@react-email/components";

const SubscriberTemplate = () => {
  return (
    <Html lang="en">
      <Heading as="h1">Subscription Successful!</Heading>
      <Text>Thankyou, you are now subscribed to Zenmonk's newsletter </Text>
    </Html>
  );
};
export default SubscriberTemplate
