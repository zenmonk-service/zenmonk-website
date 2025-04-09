import parse from 'html-react-parser'
import React from 'react'
import { Box, Typography, Grid2 } from '@mui/material'
import './styles.scss'
import BaseButton from '@/shared/button'

interface HeroSectionProps {
  title: string
  description: string
  textWidth?: number
  image: string
  highlightedText?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  textWidth,
  image,
  highlightedText = '',
}) => {
  const highlightTitle = (text: string) => {
    if (!highlightedText || !text.includes(highlightedText)) return parse(text)

    const parts = text.split(highlightedText)
    return (
      <>
        {parse(parts[0])}
        <Typography component="span">{parse(highlightedText)}</Typography>
        {parse(parts[1])}
      </>
    )
  }

  return (
    <Box sx={{ width: '100%', py: 8, px: 4 }}>
      <Grid2 container spacing={4} alignItems="center">
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            className="hero-section-text-wrapper"
            style={{ width: textWidth }}
          >
            <Typography variant="h3" component="h1" className="text-heading">
              {highlightTitle(title)}
            </Typography>
            <Typography variant="body1" className="text-description">
              {parse(description)}
            </Typography>
            <BaseButton>EXPLORE MORE</BaseButton>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            className="hero-section-image-wrapper"
            component="img"
            src={image}
            alt="Hero Image"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 2,
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  )
}

export { HeroSection }
