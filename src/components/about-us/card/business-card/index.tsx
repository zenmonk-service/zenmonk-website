import { Box, Typography } from "@mui/material";
import "./styles.scss";
import Image from "next/image";

interface BusinessCardProps {
  Icon: any;
  title: string;
  name: String;
  description: string;
}
const BusinessCard = ({ Icon, title, name, description }: BusinessCardProps) => {
  return (
    <Box className={`about-us-business-card-container ${name}`}>
     <Box className="business-card-icon-container"> 
      <Icon/>
      </Box>
      <Box className="business-card-content">
        <Typography component="h3" className="business-card-title">
          {title}
        </Typography>
        <Typography component="p" className="business-card-description">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BusinessCard;
