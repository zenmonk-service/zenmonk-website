import { Box } from "@mui/material";
import { ratings } from "./rating";
import RatingCard from "../card/rating-card";
import "./styles.scss";

const Rating = () => {
  return (
    <Box className="rating-container">
      {ratings.map((rating, index) => (
        <RatingCard
          key={index}
          bg={rating.bg}
          description={rating.description}
          rating={rating.rating}
          icon={rating.icon}
        />
      ))}
    </Box>
  );
};

export default Rating;
