'use client'

import { motion } from 'framer-motion'
import styles from './desktop.module.scss'
import { standOutList } from '../stand-out'


const StandOutSectionDesktop = () => {
  const textMotion = {
    rest: {
      color: '#383838',
      transition: { duration: 0.3, ease: 'easeIn' },
    },
    hover: {
      color: '#FFF',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  }

  const descriptionMotion = {
    rest: {
      color: '#565656',
      transition: { duration: 0.3, ease: 'easeIn' },
    },
    hover: {
      color: '#FFF',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  }

  // Scroll-entrance: each list item slides up & fades in
  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <motion.div
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        <div className={styles.overlay} />
        <div className={styles.textContainer}>
          <div className={styles.title}>
            Our <br /> <span>Mission</span>
          </div>
          <div className={styles.description}>
            Providing good quality customer experience and support is as
            important and pivotal as offering top grade product.
            Providing good quality customer experience and support is as
            important and pivotal as offering top grade product.
          </div>
          <div className={styles.divider} />
        </div>
      </div>

      {/* List with stagger scroll-entrance animation */}
      <motion.div
        className={styles.list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {standOutList.map((option, idx) => {
          const MotionMyIcon = motion.create(option.icon)
          return (
            // Outer: scroll entrance
            <motion.div
              key={idx}
              className={styles.option}
              variants={itemVariants}
              whileHover="hover"
              animate="rest"
            >
              <div className={styles.optionIconContainer}>
                <MotionMyIcon
                  variants={{
                    rest: {
                      fill: 'black',
                      x: 0,
                      scale: 1,
                      filter: 'none',
                      transition: { duration: 0.3, ease: 'easeInOut' },
                    },
                    hover: {
                      fill: '#FFF',
                      filter:
                        'drop-shadow(0 0.208vw 2.13vw rgba(0, 0, 0, 0.25))',
                      transition: { duration: 0.3, ease: 'easeInOut' },
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
