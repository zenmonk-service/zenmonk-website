'use client'

import { motion } from 'framer-motion'
import DownloadSvg from '../assets/download.svg'
import NoteSvg from '../assets/note.svg'
import SearchSvg from '../assets/search.svg'
import ThunderSvg from '../assets/thunder.svg'
import styles from './desktop.module.scss'

const options = [
  {
    title: 'Our Mission Title',
    description:
      'Providing good quality customer experience and support is as import and pivotal as offering top grade product.',
    icon: SearchSvg,
    scale: 5,
  },
  {
    title: 'Our Mission Title',
    description:
      'Providing good quality customer experience and support is as import and pivotal as offering top grade product.',
    icon: DownloadSvg,
    scale: 5,
  },
  {
    title: 'Our Mission Title',
    description:
      'Providing good quality customer experience and support is as import and pivotal as offering top grade product.',
    icon: ThunderSvg,
    scale: 3.8,
  },
  {
    title: 'Our Mission Title',
    description:
      'Providing good quality customer experience and support is as import and pivotal as offering top grade product.',
    icon: NoteSvg,
    scale: 4.2,
  },
]

const StandOutSectionDesktop = () => {
  const textMotion = {
    rest: {
      color: '#383838',
      transition: { duration: 0.2, ease: 'easeIn' },
    },
    hover: {
      color: '#FFF',
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  }

  const descriptionMotion = {
    rest: {
      color: '#565656',
      transition: { duration: 0.2, ease: 'easeIn' },
    },
    hover: {
      color: '#FFF',
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  }

  // Parent (list) animation
  const listVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.2, // gap between items
        delayChildren: 0.3,   // wait before starting children
      },
    },
  }

  // Each option
  const itemVariants = {
    closed: { opacity: 0, y: 30 }, // start hidden & pushed down
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      initial="closed"
      whileInView="open"
      viewport={{ once: true, amount: 0.5 }}
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        <div className={styles.overlay} />
        <div className={styles.textContainer}>
          <div className={styles.title}>
            Our <br /> <span>Mission</span>
          </div>
          <div className={styles.description}>
            Providing good quality customer experience and <br /> support is as
            important and pivotal as offering top <br /> grade product.
            Providing good quality customer <br /> experience and support is as
            important and <br /> pivotal as offering top grade product.
          </div>
          <div className={styles.divider} />
        </div>
      </div>

      {/* List with stagger animation */}
      <motion.div className={styles.list} variants={listVariants}>
        {options.map((option, idx) => {
          const MotionMyIcon = motion.create(option.icon)
          return (
            <motion.div
              key={idx}
              className={styles.option}
              variants={itemVariants}
              whileHover="hover"
            >
              <div className={styles.optionIconContainer}>
                <MotionMyIcon
                  variants={{
                    rest: {
                      fill: 'black',
                      x: 0,
                      scale: 1,
                      filter: 'none',
                      transition: { duration: 0.5, ease: 'easeInOut' },
                    },
                    hover: {
                      fill: '#FFF',
                      scale: option.scale,
                      x: '-6vw',
                      filter:
                        'drop-shadow(0 0.208vw 2.13vw rgba(0, 0, 0, 0.25))',
                      transition: { duration: 0.5, ease: 'easeInOut' },
                    },
                  }}
                  className={styles.optionIcon}
                />
              </div>
              <div className={styles.optionContent}>
                <motion.div
                  variants={textMotion}
                  className={styles.optionTitle}
                >
                  {option.title}
                </motion.div>
                <motion.div
                  variants={descriptionMotion}
                  className={styles.optionDescription}
                >
                  {option.description}
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default StandOutSectionDesktop
