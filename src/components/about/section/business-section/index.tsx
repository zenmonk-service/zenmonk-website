import Title from "@/components/shared/title";
import { Box, Typography } from "@mui/material";
import "./styles.scss";
import { businesses } from "./business";
import BusinessCard from "../../card/business-card";

export const BusinessSection = () => {
  return (
    <Box className="business-container">
      <Title
        text="We Are The Complete For Your Business Success"
        align="center"
      />
      <Typography className="description" variant="body1" component="p">
        We offer exceptional services, quality customer experience and loyal
        support to our clients by ensuring high success rates. We aim is to
        deliver outstanding results with the help of top-notch services.
      </Typography>
      <Box className="business-card-container">
        {businesses.map((business, index) => {
          return (
            <BusinessCard
              key={index}
              description={business.description}
              title={business.title}
              icon={business.icon}
            />
          );
        })}
      </Box>
    </Box>
  );
};
