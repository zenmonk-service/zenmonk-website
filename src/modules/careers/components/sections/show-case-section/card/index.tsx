import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { Calender } from "../assets";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./styles.scss";

interface ShowCaseCardProps {
  imageProps?: {
    place: "left" | "top";
  };
  cardProps?: {
    height?: number;
    width?: number;
    details?: {
      image: any;
      date: string;
      title: string;
      description: string;
    };
  };
}

const ShowCaseCard = ({ imageProps, cardProps }: ShowCaseCardProps) => {
  const cardDetails = cardProps?.details;
  return (
   <Container maxWidth="xl">
     <Box
      className="showcase-event-card"
      width={cardProps?.width}
      height={cardProps?.height}
    >
      <Box
        className={`show-case-image-container ${
          imageProps?.place ? "top" : "left"
        }`}
      >
        {cardDetails?.image && (
          <Image
            className="show-case-image"
            src={cardDetails?.image}
            alt="show-case-image"
          />
        )}
      </Box>
      <Box className="event-details">
        <Box className="event-date">
          <Image src={Calender} alt="calendar-image" />
          <Typography component="p" className="date-text">
            {cardDetails?.date}
          </Typography>
        </Box>
        <Box className="event-content-details">
          <Typography component="h1" className="title-text">
            {cardDetails?.title}
          </Typography>
          <Typography component="p" className="description-text">
            {cardDetails?.description}
          </Typography>
          <Button className="button" variant="text">
            Show More <ArrowRightAltIcon className="icon"/>
          </Button>
        </Box>
      </Box>
    </Box>
   </Container>
  );
};

export default ShowCaseCard;
