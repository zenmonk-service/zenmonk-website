'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import COST_EFFECTIVE from './assets/cost_effective.svg'
import EXPERT_KNOWLEDGE from './assets/expert_knowledge.svg'
import ON_TIME from './assets/on_time.svg'
import PROVEN_SUCCESS from './assets/proven_sucess.svg'
import SUPPORT from './assets/support.svg'
import { useMediaQuery } from '@mui/material'
import './styles.scss'

// Each card fades, scales, and slides up with a snug stagger.
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: '2.6vw',
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    },
  },
}

const descriptionVariants = {
  hidden: { 
    opacity: 0, 
    y: '2.6vw',
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1.0],
      delay: 0.15
    },
  },
}

const YourIdealChoice = () => {
  const isMobile = useMediaQuery('(max-width:780px)')
  const ref = useRef(null)
  // Fires once when 30% of the section enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const ChoicesData = [
    {
      icon: PROVEN_SUCCESS,
      title: 'Proven Success',
      description: 'A history of successful projects and satisfied clients.',
    },
    {
      icon: EXPERT_KNOWLEDGE,
      title: 'Expert Knowledge',
      description: 'Deep insights and innovative solutions for your business.',
    },
    {
      icon: ON_TIME,
      title: 'On-Time Delivery',
      description: 'Delivering projects right on schedule, every time.',
    },
    {
      icon: COST_EFFECTIVE,
      title: 'Cost-Effective & Scalable Solutions',
      description: 'Designed to be both budget-friendly and adaptable.',
    },
    {
      icon: SUPPORT,
      title: '24/7 Support',
      description: 'A dedicated support team is available round the clock ',
    },
  ]

  return (
    <div className="ideal-choice-your-ideal-choice" ref={ref}>
      {/* Title block animates in first */}
      <div className="ideal-choice-first-container">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionTitle
            text="Why Our Expertise is Your Ideal Choice"
            markText={isMobile ? 'Choice' : 'Expertise'}
            align="left"
            className="ideal-choice-title"
          />
        </motion.div>
        <motion.div
          variants={descriptionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionDescription
            text="See how our expert insights are prominent fit for your unique
            challenges."
            className="ideal-choice-ideal-description"
          />
        </motion.div>
      </div>

      {/* Each card fades and slides up with a snug stagger */}
      {ChoicesData.map(({ icon: Icon, title, description }: any, index) => {
        return (
          <motion.div
            className="ideal-choice-ideal-choice-container"
            key={title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{
              willChange: 'transform, opacity',
            }}
          >
            <Icon className="ideal-choice-icon" />
            <p className="ideal-choice-card-title">{title}</p>
            <p className="ideal-choice-card-description">{description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

export default YourIdealChoice
