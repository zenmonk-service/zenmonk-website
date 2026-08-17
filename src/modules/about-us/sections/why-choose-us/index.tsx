'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import WhyChooseUsCard from '../../components/card/why-choose-us'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { skills } from './skills'
import { whyChooseUs } from './why-choose-us'
import styles from './why-choose-us.module.scss'

const Star = '/about-us/why-choose-us/star.svg'

// Direction each card travels FROM (they start here and fly to their natural position)
// Layout: [0=top-left] [2=top-right]
//         [1=bot-left] [3=bot-right]
const cardOffsets = [
  { x: 220, y: 120 },   // card 0 (top-left)  → starts center-right-bottom
  { x: 220, y: -120 },  // card 1 (bot-left)  → starts center-right-top
  { x: -220, y: 120 },  // card 2 (top-right) → starts center-left-bottom
  { x: -220, y: -120 }, // card 3 (bot-right) → starts center-left-top
]

const cardVariant = (offset: { x: number; y: number }) => ({
  hidden: { opacity: 0, x: offset.x, y: offset.y, scale: 0.85 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
})

export const WhyChooseUsSection = () => {
  return (
    <div className={styles.aboutUsWhyChooseUsSection}>
      <motion.div
        className={styles.cardSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          },
        }}
      >
        <div className={styles.leftSection}>
          {whyChooseUs.slice(0, 2).map((item, index) => (
            <motion.div key={index} variants={cardVariant(cardOffsets[index])}>
              <WhyChooseUsCard
                description={item.description}
                icon={item.icon}
                title={item.title}
                className={styles.whyChooseUsCard}
              />
            </motion.div>
          ))}
        </div>
        <div className={styles.centerSection}>
          {whyChooseUs.slice(2, 4).map((item, index) => (
            <motion.div key={index} variants={cardVariant(cardOffsets[index + 2])}>
              <WhyChooseUsCard
                description={item.description}
                icon={item.icon}
                title={item.title}
                className={styles.whyChooseUsCard}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className={styles.rightSection}>
        <SectionTitle
          className={styles.sectionTitle}
          text="Here's How We Are Different From Others"
          markText="Others"
          align="left"
        />
        <SectionDescription
          className={styles.description}
          text="We combine cutting-edge technology and top-notch support to deliver tailored software solutions that prioritize your success"
        />
        <div className={styles.skillsSet}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillTitle}>{skill.title}</div>
              <div className={styles.rating}>
                {[...Array(skill.rating)].map((_, i) => (
                  <Image
                    key={i}
                    src={Star}
                    alt="star"
                    width={32}
                    height={32}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}