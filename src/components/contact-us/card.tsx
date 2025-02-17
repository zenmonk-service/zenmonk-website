import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import "./styles.scss"

interface ContactCardProps {
  url: StaticImageData;
  title: string;
  description: string;
}

const ContactCard = ({ url, title, description }: ContactCardProps) => {
  return (
    <Box className="contact-card">
      <Image src={url} alt={title} className="contact-card-image" />
      <Box className="contact-card-content">
        <Typography variant="h1" component="h1" className="title">{title}</Typography>
        <Typography variant="h2" component="p" className="description">{description}</Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
