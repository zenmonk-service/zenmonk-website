import { Box, Typography } from "@mui/material";
import "./styles.scss";
import Title from "@/components/title";

const ClientSatisfaction = ({}) => {
  return (
    <Box className="client-satisfaction-section">
      <Title
        text="The Evolution of Client Satisfaction"
        align="center"
        className="title"
      />
     <Box>
     <Typography component="p" className="description">
        We are a top mobile app development company in India, known for our. We
        are a top mobile app development company in India, known for oure. We
        are a top mobile app development company in India, known for our. We are
        a top mobile app development company in India, known for oure
      </Typography>
     </Box>
    </Box>
  );
};

export { ClientSatisfaction };
