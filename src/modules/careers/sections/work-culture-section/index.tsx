'use client'

import { useState } from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box, Container, IconButton, Typography } from '@mui/material'
import Title from '@/shared/title'
import CultureCard from './card/culture-card'
import './styles.scss'
import { workCultures } from './work-cultures'

const CARDS_TO_SHOW = 4

const WorkCulture = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalCultures = workCultures.length

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCultures)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCultures - 1 : prevIndex - 1
    )
  }

  const visibleCultures = Array.from({ length: CARDS_TO_SHOW }).map(
    (_, i) => workCultures[(currentIndex + i) % totalCultures]
  )

  return (
    <Container maxWidth="xl">
      <Box className="work-culture-section">
        <Box className="title-description-action-wrapper">
          <Box className="title-description-wrapper">
            <Title
              align="left"
              text="Zen Focused Work Environment"
              className="work-culture-title"
            />
            <Typography className="work-culture-description" component="p">
              At Zenmonk, we cultivate serenity and growth, balancing
              professional success with personal well-being. Blending
              mindfulness with innovation, we nurture a supportive community
              where continuous learning and creative fulfillment prosper.
            </Typography>
          </Box>
          <Box className="action-button-wrapper">
            <IconButton className="action-button" onClick={handlePrev}>
              <NavigateBeforeIcon fontSize="inherit" />
            </IconButton>
            <IconButton className="action-button" onClick={handleNext}>
              <NavigateNextIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
        <Box className="work-cultures">
          {visibleCultures.map((culture, index) => (
            <CultureCard key={index} details={culture} />
          ))}
        </Box>
      </Box>
    </Container>
  )
}

export default WorkCulture
