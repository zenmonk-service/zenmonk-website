'use client'

import BaseButton from '@/shared/button'
import Decorator from './assets/decorator.svg'
import Image from 'next/image'
import ExperienceCard from './assets/card_experience.svg'
import SalaryCard from './assets/card_salary.svg'
import CultureCard from './assets/card_culture.svg'
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
            And
            <br />
            Make a Meaningful
            <br />
            Impact in Tech
          </h1>
          <p className={styles.description}>
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
          </p>
          <BaseButton 
            className={styles.button}
            onClick={() => {
              const el = document.getElementById('open-positions')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Join Now
          </BaseButton>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.heroWrapper}>
            <Image 
              src="/careers/hero.svg" 
              className={styles.heroImage} 
              alt="Hero background" 
              width={907}
              height={651}
              priority
              unoptimized
            />
            <div className={`${styles.cardWrapper} ${styles.cardExperience}`}>
              <ExperienceCard className={styles.cardSvg} />
              <div className={styles.shineContainer}>
                <div className={styles.shineLine} />
              </div>
            </div>
            <div className={`${styles.cardWrapper} ${styles.cardSalary}`}>
              <SalaryCard className={styles.cardSvg} />
              <div className={styles.shineContainer}>
                <div className={styles.shineLine} />
              </div>
            </div>
            <div className={`${styles.cardWrapper} ${styles.cardCulture}`}>
              <CultureCard className={styles.cardSvg} />
              <div className={styles.shineContainer}>
                <div className={styles.shineLine} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerHeroSection

