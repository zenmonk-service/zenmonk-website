import { Box, Typography } from "@mui/material";
import "./styles.scss";
import Image from "next/image";

interface BusinessCardProps {
  icon: string;
  title: string;
  description: string;
}
const BusinessCard = ({ icon, title, description }: BusinessCardProps) => {
  return (
    <Box className="about-us-business-card-container">
     <Box className="business-card-icon-container"> <Image src={icon} alt={`${title}-icon`} className="business-card-icon" width={110} height={70}/></Box>
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
