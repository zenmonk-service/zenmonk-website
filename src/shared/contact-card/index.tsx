import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import "./styles.scss";

interface ContactCardProps {
  url: StaticImageData;
  title?: string;
  description: string;
  className?: string;
}

const ContactCard = ({
  url,
  title,
  description,
  className,
}: ContactCardProps) => {
  return (
    <Box className={`contact-card ${className}`}>
      <Image
        src={url}
        alt={`${title ?? ""}-image`}
        className="contact-card-image"
      />
      <Box className="contact-card-content">
        {title && (
          <Typography variant="h3" component="h3" className="title">
            {title}
          </Typography>
        )}
        <Typography variant="h2" component="p" className="description">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
