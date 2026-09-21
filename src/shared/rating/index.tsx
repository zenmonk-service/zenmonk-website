'use client'
import { usePathname } from 'next/navigation'
import RatingCard from './rating-card'
import { getRatings } from './rating'
import styles from './styles.module.scss'

interface RatingProps {
  clients?: string
  projects?: string
  experience?: string
  support?: string
}

const Rating = ({
  clients,
  projects,
  experience,
  support,
}: RatingProps) => {
  const pathname = usePathname() || '/services'
  const items = getRatings(pathname).map((item) => {
    if (item.description === 'Happy Clients' && clients) {
      return { ...item, rating: clients }
    }
    if (item.description === 'Project Done' && projects) {
      return { ...item, rating: projects }
    }
    if (item.description === 'Help Support' && support) {
      return { ...item, rating: support }
    }
    if (item.description === 'Experience' && experience) {
      return { ...item, rating: experience }
    }
    return item
  })

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {items.map((rating, index) => (
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

