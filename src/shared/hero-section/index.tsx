'use client'

import parse from 'html-react-parser'
import Grid from '@mui/material/Grid2'
import BaseButton from '../button'
import styles from './hero-section.module.scss'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  description: string
  textWidth?: number
  highlightedText?: string
  imgWidth?: number
  url?: string
  imageStyle?: React.CSSProperties
  children?: React.ReactNode
  showImage?: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  textWidth,
  highlightedText = '',
  imgWidth,
  url,
  imageStyle = {},
  children,
  showImage = true,
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
      className={styles.section}
      container
      spacing={4}
      alignItems="center"
      height="100%"
    >
      <Grid size={{ xs: 12, md: 6 }} className={styles.text}>
        <div className={styles.textWrapper} style={{ width: textWidth }}>
          <h1 className={styles.heading}>{highlightTitle(title)}</h1>
          <p className={styles.description}>{parse(description)}</p>
        </div>
        <div className={styles.buttonContainer}>
          <BaseButton className={styles.button}>EXPLORE MORE</BaseButton>
        </div>
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        className={styles.imageContainer}
        display="flex"
        justifyContent="center"
      >
        {showImage && url && (
          <Image
            className={styles.image}
            src={url}
            alt="Hero Image"
            width={600}
            height={600}
            priority
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 2,
              ...imageStyle,
            }}
          />
        )}
        {children}
      </Grid>
    </Grid>
  )
}

export { HeroSection }
