'use client'

import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import VisionCard from '../../components/card/vision-card'
import './styles.scss'
import { visions } from './visions'

// Each card slides in from the left side of the screen
// Reversed stagger: last card (rightmost) animates first, first card (leftmost) last
const makeCardVariant = (reverseIndex: number) => ({
  hidden: {
    opacity: 0,
    x: -180,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: reverseIndex * 0.25, // last card = delay 0, first card = delay 0.75
    },
  },
})

export const VisionSection = () => {
  const total = visions.length

  return (
    <Box className="vision-section">
      <SectionTitle
        markText="Values"
        text="Driven by Vision, Guided by Values"
        className="section-title"
      />
      <SectionDescription
        text="Empower and help Small & Medium enterprises to grow by providing reliable and cost-effective services & solutions."
        className="section-description"
      />
      <motion.div
        className="vision-list"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {visions.map((vision, index) => {
          // Reverse the index: last card gets delay 0, first card gets the longest delay
          const reverseIndex = total - 1 - index
          return (
            <motion.div
              key={index}
              variants={makeCardVariant(reverseIndex)}
              style={{ flex: 1, minWidth: 0 }}
            >
              <VisionCard
                description={vision.description}
                title={vision.title}
                image={vision.image}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </Box>
  )
}
