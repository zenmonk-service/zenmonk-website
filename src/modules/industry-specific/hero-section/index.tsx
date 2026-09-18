'use client'

import { useRouter } from 'next/navigation'
import BaseButton from '@/shared/button'
import HeroImage from './assets/industry.svg'
import styles from './styles.module.scss'

const IndustrySpecificHeroSection = () => {
  const router = useRouter()
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span className={styles.highlightedText}>Advanced Industry-Specific</span>
            <br />
            Digital Solutions
          </h1>
          <p className={styles.description}>
            We deliver bespoke digital solutions crafted specifically for complex
            industry verticals. Ensuring strict compliance, seamless legacy integration,
            and high reliability, we empower enterprise growth.
          </p>
          <BaseButton
            onClick={() => router.push('/contact')}
            className={styles.button}
          >
            EXPLORE MORE
          </BaseButton>
        </div>
        <div className={styles.imageContainer}>
          <HeroImage className={styles.heroImage} />
        </div>
      </div>
    </div>
  )
}
export default IndustrySpecificHeroSection
