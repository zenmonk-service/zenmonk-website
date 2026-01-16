import { Html, Heading, Text, CodeInline } from "@react-email/components";

const ContactTemplate = (name: string) => {
  return (
    <Html lang="en">
      <Text>Hi <CodeInline style={{textTransform: 'capitalize'}}>{name}</CodeInline>,</Text>
      <Text>
        Thankyou for contacting us. We'll reach out to you as soon as possible
      </Text>
      <Text>Regards,</Text>
      <Text>Team Zenmonk</Text>
    </Html>
  );
};
export default ContactTemplate;
