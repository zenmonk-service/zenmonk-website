import { Box, Typography } from "@mui/material";
import Image from "next/image";
import "./styles.scss"

interface StandOutCardProps {
  icon: string;
  title: string;
}

const StandOutCard = ({ icon, title }: StandOutCardProps) => {
  return (
    <Box className="stand-out-card">
      <Image src={icon} alt="Stand Out Card" width={181} height={181} />
      <Box className="stand-out-card-content">
        <Typography component="h3" className="title">{title}</Typography>
        <Typography component="p" className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tristique, nunc nec ultricies.
        </Typography>
      </Box>
    </Box>
  );
};

export default StandOutCard;
