import { Box } from '@mui/material'
import SectionWrapper from '@/shared/wrapper'
import RatingCard from '../rating-card'
import { ratings } from './rating'
import './styles.scss'
import AboutSectionWrapper from '../wrapper/about-wrapper'

const Rating = () => {
  return (
    <AboutSectionWrapper>
      <Box className="rating-section">
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
      </Box>
    </AboutSectionWrapper>
  )
}

export default Rating
