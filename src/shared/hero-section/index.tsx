'use client'

import parse from 'html-react-parser'
import { Typography, Grid2 } from '@mui/material'
import BaseButton from '@/shared/button'
import './styles.scss'

interface HeroSectionProps {
  title: string
  description: string
  textWidth?: number
  highlightedText?: string
  imgWidth?: number
  url: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  textWidth,
  highlightedText = '',
  imgWidth,
  url,
}) => {
  const highlightTitle = (text: string) => {
    if (!highlightedText || !text.includes(highlightedText)) return parse(text)

    const parts = text.split(highlightedText)
    return (
      <>
        {parse(parts[0])}
        <span>{parse(highlightedText)}</span>
        {parse(parts[1])}
      </>
    )
  }

  return (
    <div className="service-hero-section">
      <Grid2 container spacing={4} alignItems="center" height="100%">
        <Grid2 size={{ xs: 12, md: 6 }} className="global-hero-section-text">
          <div
            className="global-hero-section-text-wrapper"
            style={{ width: textWidth }}
          >
            <h1 className="global-text-heading">{highlightTitle(title)}</h1>
            <Typography variant="body1" className="global-text-description">
              {parse(description)}
            </Typography>
          </div>
          {/* <BaseButton className="button">EXPLORE MORE</BaseButton> */}
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
          <img
            className="global-hero-section-image-wrapper"
            src={url}
            alt="Hero Image"
            style={{
              width: imgWidth ?? '100%',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 2,
            }}
          />
        </Grid2>
      </Grid2>
    </div>
  )
}

export { HeroSection }
