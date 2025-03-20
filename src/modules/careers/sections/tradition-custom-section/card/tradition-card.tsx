import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import "./styles.scss"

interface TraditionCustomCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const TraditionCustomCard = ({
  image,
  title,
  description,
}: TraditionCustomCardProps) => {
  return (
    <Box className="tradition-custom-card">
      <Box className="image-container">
        <Image src={image} alt="tradition-custom-card" className="image" />
      </Box>
      <Box className="content">
        <Typography component="h1" className="title">
          {title}
        </Typography>
        <Typography component="p" className="description">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default TraditionCustomCard;
