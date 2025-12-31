'use client'

import { motion } from 'framer-motion'
import styles from './tradition-card.module.scss'

interface TraditionCustomCardProps {
  Icon: any
  index: number
  title: string
  description: string
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: '2vw',
    scale: 0.9,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: index * 0.1,
    },
  }),
}

const TraditionCustomCard = (props: TraditionCustomCardProps) => {
  const { Icon, title, description, index } = props
  return (
    <motion.div
      className={styles.card}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ amount: 0.8, once: true }}
      custom={index}
    >
      <div className={styles.imageContainer}>
        <Icon alt="image" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </motion.div>
  )
}

export default TraditionCustomCard
