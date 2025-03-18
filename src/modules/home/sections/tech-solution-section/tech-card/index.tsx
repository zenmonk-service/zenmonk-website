import { Box, Typography } from "@mui/material";
import Image from "next/image";
import "./styles.scss";

interface TechProps {
  icon: string;
  title: string;
}

const TechCard = ({ icon, title }: TechProps) => {
  return (
    <Box className="tech-card-container">
      {icon && <Image src={icon} alt={title} className="tech-card-icon" />}
      <Typography component="p" className="tech-card-title">
        {title}
      </Typography>
    </Box>
  );
};

export default TechCard;
