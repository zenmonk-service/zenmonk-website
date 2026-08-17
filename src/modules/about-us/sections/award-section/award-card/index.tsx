'use client'

import Image from 'next/image'
import StarIcon from '../star-animation/star-animation'
import styles from './award-card.module.scss'

interface AwardProofCardProps {
  title: string
  description: string
  image: string
  index: number
}

const AwardProofCard = ({ image, title, description, index }: AwardProofCardProps) => {
  const isEven = index % 2 !== 0;
  const cardIndexClass = styles[`card-${index + 1}`] || '';
  return (
    <div className={`${styles.awardProofCard} ${isEven ? styles.evenCard : styles.oddCard} ${cardIndexClass}`}>
      <div className={styles.awardImageContainer}>
        <StarIcon className={styles.hoverExpandWrapper} />
        <Image
          src={image}
          width={113}
          height={174}
          alt={`${title}-icon`}
          className={styles.awardMainImage}
        />
      </div>

      <div className={styles.awardCardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default AwardProofCard
