'use client'

import { motion } from 'framer-motion'
import { useAppDispatch } from '@/store/hooks'
import { openContactModal } from '@/store/features/header/header-slice'
import { SectionDescription } from '@/shared/typography'
import BaseButton from '@/shared/button'
import DottedBackground from './assets/dotted-background.svg'
import HeroImage from './hero-image'
import styles from './hero-section.module.scss'

const HeroSection = () => {
  const dispatch = useAppDispatch()

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
            <span>How We Work </span><br />
            From Challenge to Impact
          </motion.p>
          <SectionDescription
            initial={{ opacity: 0, y: '2.6vw' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: 'easeOut',
            }}
            text="We understand the challenge, find the right technology, and build solutions that move your business forward."
            className={styles.textDescription}
          />
          <BaseButton
            onClick={() => dispatch(openContactModal())}
            className={styles.button}
            showArrow
          >
            Start Your Project
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
