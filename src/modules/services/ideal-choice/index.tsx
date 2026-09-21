'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { useMediaQuery } from '@mui/material'
import { idealChoiceDataMap } from './service-mapper'
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

interface YourIdealChoiceProps {
  serviceId?: string
}

const YourIdealChoice = ({ serviceId = 'software-development' }: YourIdealChoiceProps) => {
  const isMobile = useMediaQuery('(max-width:780px)')
  const ref = useRef(null)
  // Fires once when 30% of the section enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const currentData = idealChoiceDataMap[serviceId] || idealChoiceDataMap['software-development']
  const { title, markText, description, cards } = currentData

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
            text={title}
            markText={isMobile ? 'Choice' : markText}
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
            text={description}
            className="ideal-choice-ideal-description"
          />
        </motion.div>
      </div>

      {/* Each card fades and slides up with a snug stagger */}
      {cards.map(({ icon: Icon, title, description }: any, index) => {
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
