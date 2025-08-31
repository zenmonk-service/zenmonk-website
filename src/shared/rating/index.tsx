import RatingCard from '../rating-card'
import AboutSectionWrapper from '../wrapper/about-wrapper'
import { ratings } from './rating'
import styles from './styles.module.scss'

const Rating = () => {
  return (
    <AboutSectionWrapper>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          {ratings.map((rating, index) => (
            <RatingCard
              key={index}
              bg={rating.bg}
              description={rating.description}
              rating={rating.rating}
              icon={rating.icon}
            />
          ))}
        </div>
      </div>
    </AboutSectionWrapper>
  )
}

export default Rating
