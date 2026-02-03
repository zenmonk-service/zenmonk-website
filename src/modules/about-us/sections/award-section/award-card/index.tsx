'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import BigStarSvg from '../assets/big-star.svg'
import CircleSvg from '../assets/circle.svg'
import StarSvg from '../assets/star.svg'
import TriangleSvg from '../assets/triangle.svg'
import StarIcon from '../star-animation/star-animation'
import styles from './award-card.module.scss'

interface AwardProofCardProps {
  title: string
  description: string
  image: string
}

const BigStar = motion(BigStarSvg)
const Star = motion(StarSvg)
const CIrcle = motion(CircleSvg)
const Triangle = motion(TriangleSvg)

const AwardProofCard = ({ image, title, description }: AwardProofCardProps) => {
  return (
    <div className={styles.awardProofCard}>
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
