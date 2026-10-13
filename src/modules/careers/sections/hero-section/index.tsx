'use client'

import BaseButton from '@/shared/button'
import Decorator from './assets/decorator.svg'
import Image from 'next/image'
import InnovationCard from './assets/card_innovation.svg'
import MentorshipCard from './assets/card_mentorship.svg'
import RemoteCard from './assets/card_remote.svg'
import FlexibleHoursCard from './assets/card_flexible_hours.svg'
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
            Join a forward-thinking team where your creativity and technical skills
            drive real impact. We empower engineers and designers to innovate, grow,
            and build future-ready solutions together.
          </p>
          <BaseButton 
            className={styles.button}
            showArrow
            onClick={() => {
              const el = document.getElementById('open-positions')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Explore Open Roles
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
            <div className={`${styles.cardWrapper} ${styles.cardInnovation}`}>
              <InnovationCard className={styles.cardSvg} />
              <div className={styles.shineContainer}>
                <div className={styles.shineLine} />
              </div>
            </div>
            <div className={`${styles.cardWrapper} ${styles.cardMentorship}`}>
              <MentorshipCard className={styles.cardSvg} />
              <div className={styles.shineContainer}>
                <div className={styles.shineLine} />
              </div>
            </div>
            <div className={`${styles.cardWrapper} ${styles.cardRemote}`}>
              <RemoteCard className={styles.cardSvg} />
              <div className={styles.shineContainer}>
                <div className={styles.shineLine} />
              </div>
            </div>
            <div className={`${styles.cardWrapper} ${styles.cardFlexibleHours}`}>
              <FlexibleHoursCard className={styles.cardSvg} />
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

