'use client'

import { motion } from 'framer-motion'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import AwardProofCard from './award-card'
import { awards } from './awards'
import styles from './award.module.scss'

const cardVariant = {
  hidden: {
    opacity: 0,
    y: -120,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      // Bounce effect as it lands
      type: 'spring',
      stiffness: 120,
      damping: 14,
      mass: 0.8,
    },
  },
}

export const AwardProofSection = () => {
  return (
    <div className={styles.awardProofSection}>
      <SectionTitle
        className={styles.sectionTitle}
        markText="Services"
        text="Awards Proof Your Business With Our IT Services"
      />
      <SectionDescription
        text="We are thrilled to showcase our esteemed awards that we have received
        throughout our business journey."
        className={styles.sectionDescription}
      />
      <motion.div
        className={styles.awardProofList}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.15,
            },
          },
        }}
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            style={{ flex: 1, width: '18.23vw', minWidth: 0 }}
          >
            <AwardProofCard
              description={award.description}
              image={award.image}
              title={award.title}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
