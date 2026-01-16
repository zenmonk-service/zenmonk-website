import { Html, Text, CodeInline } from "@react-email/components";

const CareerTemplate = (name: string) => {
  return (
    <Html lang="en">
      <Text>Hi <CodeInline style={{textTransform: 'capitalize'}}>{name}</CodeInline>,</Text>
      <Text>
        Thankyou for applying at Zenmonk. We'll reach out to you as soon as possible
      </Text>
      <Text>Regards,</Text>
      <Text>Team Zenmonk</Text>
    </Html>
  );
};
export default CareerTemplate;
