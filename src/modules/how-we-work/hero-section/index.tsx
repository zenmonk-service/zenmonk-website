'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { SectionDescription } from '@/shared/typography'
import BaseButton from '@/shared/button'
import DottedBackground from './assets/dotted-background.svg'
import HeroImage from './hero-image'
import styles from './hero-section.module.scss'

const HeroSection = () => {
  const router = useRouter()

  return (
    <div className={styles.howWeWorkHeroSectionWrapper}>
      <div className={styles.heroSection}>
        <div className={styles.heroSectionTextWrapper}>
          <motion.p
            initial={{ opacity: 0, y: '2.6vw' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={styles.textHeading}
          >
            <span>How We Work</span> for <br />
            Seamless End-to-End Solutions
          </motion.p>
          <SectionDescription
            initial={{ opacity: 0, y: '2.6vw' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: 'easeOut',
            }}
            text="We deliver Zen-inspired precise, 
            mindful solutions by integrating deep expertise with client collaboration,
            prioritizing transparency, innovation, and purposeful development to 
            innovate impactful technology."
            className={styles.textDescription}
          />
          <BaseButton
            onClick={() => router.push('/contact')}
            className={styles.button}
          >
            EXPLORE MORE
          </BaseButton>
        </div>
      </div>
      <HeroImage />
      <DottedBackground className={styles.topHorizontalDottedImage} />
      <DottedBackground className={styles.bottomHorizontalDottedImage} />
      <DottedBackground className={styles.verticalDottedImage} />
    </div>
  )
}

export default HeroSection
