'use client'

import parse from 'html-react-parser'
import Grid from '@mui/material/Grid2'
import BaseButton from '../button'
import './styles.scss'

interface HeroSectionProps {
  title: string
  description: string
  textWidth?: number
  highlightedText?: string
  imgWidth?: number
  url: string
  imageStyle?: React.CSSProperties
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  textWidth,
  highlightedText = '',
  imgWidth,
  url,
  imageStyle = {},
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
    <Grid
      className="service-hero-section"
      container
      spacing={4}
      alignItems="center"
      height="100%"
    >
      <Grid size={{ xs: 12, md: 6 }} className="global-hero-section-text">
        <div
          className="global-hero-section-text-wrapper"
          style={{ width: textWidth }}
        >
          <h1 className="global-text-heading">{highlightTitle(title)}</h1>
          <p className="global-text-description">{parse(description)}</p>
        </div>
        <BaseButton className="button">EXPLORE MORE</BaseButton>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
        <img
          className="global-hero-section-image-wrapper"
          src={url}
          alt="Hero Image"
          style={{
            width: imgWidth ?? '100%',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 2,
            ...imageStyle,
          }}
        />
      </Grid>
    </Grid>
  )
}

export { HeroSection }
