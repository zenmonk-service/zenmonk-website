import parse from 'html-react-parser'
import React from 'react'
import { Box, Typography, Toolbar, Grid2 } from '@mui/material'
import BaseButton from '@/shared/button'
import './styles.scss'

interface HeroSectionProps {
  title: string
  description: string
  textWidth?: number
  image: string
  highlightedText?: string
  imgWidth?: number
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  textWidth,
  image,
  highlightedText = '',
  imgWidth,
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
    <Box className="service-hero-section" sx={{ width: '100%' }}>
      <Grid2 container spacing={4} alignItems="center">
        <Grid2 size={{ xs: 12, md: 6 }} className="global-hero-section-text">
          <Box
            className="global-hero-section-text-wrapper"
            style={{ width: textWidth }}
          >
            <Typography
              variant="h3"
              component="h1"
              className="global-text-heading"
            >
              {highlightTitle(title)}
            </Typography>
            <Typography variant="body1" className="global-text-description">
              {parse(description)}
            </Typography>
          </Box>
          <BaseButton>EXPLORE MORE</BaseButton>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
          <Box
            className="global-hero-section-image-wrapper"
            component="img"
            src={image}
            alt="Hero Image"
            sx={{
              width: imgWidth ?? '100%',
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
