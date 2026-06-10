'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import IconButton from '@mui/material/IconButton'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import CultureCard from '../card/culture-card'
import './styles.scss'
import { workCultures } from '../work-cultures'

const CARD_WIDTH_VW = 16
const GAP_VW = 1.5

const WorkCultureDesktop = () => {
  const [index, setIndex] = useState(0)
  const totalItems = workCultures.length

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalItems)
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  return (
    <div className="work-culture-wrapper">
      <div className="work-culture-section">
        <div className="title-description-action-wrapper">
          <div className="title-description-wrapper">
            <SectionTitle
              align="left"
              text="Healthy Work Culture"
              className="work-culture-title"
              markText="Culture"
            />
            <SectionDescription
              className="work-culture-description"
              text="State burst think end are its. Arrived off she elderly beloved him affix ed noisier yet. Course regard to up he hardly elder noisier. state burst think end are its."
            ></SectionDescription>
          </div>
          <div className="action-button-wrapper">
            <IconButton
              className="action-button"
              onClick={handlePrev}
              centerRipple
            >
              <NavigateBeforeIcon fontSize="inherit" />
            </IconButton>
            <IconButton className="action-button" onClick={handleNext}>
              <NavigateNextIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>

        <div className="work-cultures-mask">
          <motion.div
            className="work-cultures-track"
            animate={{
              x: `-${index * (CARD_WIDTH_VW + GAP_VW)}vw`,
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20,
            }}
          >
            {/* Render multiple sets to allow infinite-like button navigation */}
            {[...workCultures, ...workCultures].map((culture, i) => (
              <CultureCard key={`${culture.title}-${i}`} details={culture} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default WorkCultureDesktop
