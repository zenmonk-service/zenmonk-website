'use client'

import { motion } from 'framer-motion'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { businesses } from './business'
import BusinessCard from './business-card'
import styles from './business.module.scss'

export const BusinessSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  return (
    <div className={styles.businessContainer}>
      <SectionTitle
        text="We Are The Complete Solution For Your Business Success"
        markText="Success"
        markTextProps={{ rotate: 2 }}
        align="center"
        className={styles.heading}
      />

      <SectionDescription
        className={styles.description}
        text="We offer exceptional services, quality customer experience and loyal
        support to our clients by ensuring high success rates. We aim to
        deliver outstanding results with the help of top-notch services."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2, once: true }}
        variants={container}
        className={styles.businessCardContainer}
      >
        {businesses.map((business) => (
          <BusinessCard
            key={business.title}
            description={business.description}
            title={business.title}
            Icon={business.icon}
            fill={business.fill}
            background={business.background}
          />
        ))}
      </motion.div>
    </div>
  )
}
