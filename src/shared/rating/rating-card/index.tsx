import styles from './rating-card.module.scss'

interface RatingCardProps {
  rating: string
  description: string
  icon: any
  bg: string
}

const RatingCard = ({
  rating,
  description,
  icon: Icon,
  bg,
}: RatingCardProps) => {
  return (
    <div className={styles.ratingCard} style={{ background: bg }}>
      <div className={styles.ratingCardIcon}>
        <Icon />
      </div>
      <div className={styles.ratingCardContent}>
        <h5 className={styles.rating}>{rating}</h5>
        <p className={styles.ratingCardDescription}>{description}</p>
      </div>
    </div>
  )
}

export default RatingCard
