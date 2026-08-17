'use client'

import { motion } from 'framer-motion'
import Icon from '../assets/dotted-background-square.svg'
import styles from './hero-image.module.scss'

const DottedBackground = motion.create(Icon)
const HeroImage = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.topCard}
        initial={{
          opacity: 1,
          top: '20%',
          left: '20%',
          scale: 0.7,
        }}
        animate={{
          top: 0,
          left: '4.3%',
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        }}
      />

      <motion.div
        className={styles.rightCard}
        initial={{
          opacity: 1,
          top: '25%',
          right: '32%',
          scale: 0.8,
        }}
        animate={{
          right: 0,
          top: '7.2%',
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        }}
      />

      <motion.div
        className={styles.bottomCard}
        initial={{
          opacity: 1,
          bottom: '23%',
          right: '26%',
          scale: 0.9,
        }}
        animate={{
          bottom: 0,
          right: '7%',
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        }}
      />

      <motion.div
        className={styles.leftCard}
        initial={{
          opacity: 1,
          bottom: '28%',
          left: '28%',
          scale: 0.8,
        }}
        animate={{
          bottom: '1%',
          left: '8.6%',
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        }}
      >
        <p className={styles.title}>15+</p>
        <p className={styles.description}>
          Years of <br /> Experience
        </p>
      </motion.div>
      <DottedBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, duration: 0.6 }}
        className={styles.dottedBackground}
      />
    </div>
  )
}

export default HeroImage
