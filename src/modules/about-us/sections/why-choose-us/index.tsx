'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import WhyChooseUsCard from '../../components/card/why-choose-us'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { skills } from './skills'
import { whyChooseUs } from './why-choose-us'
import styles from './why-choose-us.module.scss'

const Star = '/about-us/why-choose-us/star.svg'

const cardVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

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
            <motion.div key={index} variants={cardVariant}>
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
            <motion.div key={index} variants={cardVariant}>
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