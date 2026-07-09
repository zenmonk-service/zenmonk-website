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

// Each card unfolds from the previous — like a deck of cards being spread open.
// scaleX starts at 0 (collapsed), animates to 1 (fully open).
// transformOrigin 'left center' makes each card appear to hinge open from its left edge.
const cardVariants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
    x: -20,
  },
  visible: (i: number) => ({
    opacity: 1,
    scaleX: 1,
    x: 0,
    transition: {
      // Base delay: 0.15s for the first card, then 0.25s apart for each subsequent card
      // This gives a much faster, snappier "unfolding from previous card" feel
      delay: 0.15 + i * 0.25,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1], // custom ease-out curve
    },
  }),
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const YourIdealChoice = () => {
  const isMobile = useMediaQuery('(max-width:780px)')
  const ref = useRef(null)
  // Fires once when 20% of the section enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
      <motion.div
        className="ideal-choice-first-container"
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
        <SectionDescription
          text="See how our expert insights are prominent fit for your unique
          challenges."
          className="ideal-choice-ideal-description"
        />
      </motion.div>

      {/* Each card unfolds from the previous one with a chained stagger */}
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
              // Each card unfolds from its left edge — the "hinge" of the unfold chain
              transformOrigin: 'left center',
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
