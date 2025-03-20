import { Box, Typography } from "@mui/material";
import Image from "next/image";
import "./styles.scss"

interface StandOutCardProps {
  icon: string;
  title: string;
  description: string;
  bgImage: string
}

const StandOutCard = ({ icon, title, description, bgImage }: StandOutCardProps) => {
  return (
    <Box className="stand-out-card" sx={{ backgroundImage: `url(${bgImage})` }}>
      <Image src={icon} alt="Stand Out Card" width={181} height={181} />
      <Box className="stand-out-card-content">
        <Typography component="h3" className="title">{title}</Typography>
        <Typography component="p" className="description">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default StandOutCard;
