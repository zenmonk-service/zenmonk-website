'use client'

import { useRouter } from 'next/navigation'
import BaseButton from '@/shared/button'
import Rating from '@/shared/rating'
import HeroImage from './assets/about.svg'
import Background from './assets/dotted-bg.svg'
import styles from './styles.module.scss'

const AboutUsHeroSection = () => {
  const router = useRouter()
  return (
    <div className={styles.backgroundWrapper}>
      <Background className={styles.backgroundLine} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Meet the Innovators Behind
            <span className={styles.highlightedText}> ZENMONK</span>
          </h1>
          <p className={styles.description}>
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
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
      <Rating />
    </div>
  )
}
export default AboutUsHeroSection
