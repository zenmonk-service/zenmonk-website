'use client'

import BaseButton from '@/shared/button'
import Decorator from './assets/decorator.svg'
import HeroImage from './assets/hero.svg'
import styles from './styles.module.scss'

const CareerHeroSection = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <Decorator className={styles.decorator2} />
      <Decorator className={styles.decorator} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span className={styles.highlightedText}>Join Our Team </span>
            And Make an Impact in Tech
          </h1>
          <p className={styles.description}>
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
          </p>
          <BaseButton className={styles.button}>EXPLORE MORE</BaseButton>
        </div>
        <div className={styles.imageContainer}>
          <HeroImage className={styles.heroImage} />
        </div>
      </div>
    </div>
  )
}

export default CareerHeroSection
