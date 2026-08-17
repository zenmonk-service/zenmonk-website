import RatingCard from './rating-card'
import { ratings } from './rating'
import styles from './styles.module.scss'

const Rating = () => {
  return (
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
  )
}

export default Rating
