import { Box } from '@mui/material'
import RatingCard from '../card/rating-card'
import { ratings } from './rating'
import './styles.scss'
import SectionWrapper from '@/shared/wrapper';

const Rating = () => {
  return (
    <SectionWrapper>
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
    </SectionWrapper>
  );
};

export default Rating
