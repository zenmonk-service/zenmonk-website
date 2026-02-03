'use client'

import { useState } from 'react'
import parse from 'html-react-parser'
import Grid from '@mui/material/Grid2'
import BaseButton from '../button'
import styles from './hero-section.module.scss'
import Image from 'next/image'
import { Skeleton } from '@mui/material'

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
  textWrapperStyle?: React.CSSProperties
  titleProps?: React.HTMLAttributes<HTMLHeadingElement>
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
  textWrapperStyle = {},
  titleProps = {},
}) => {
  const [loading, setLoading] = useState(true)

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
    >
      <Grid size={{ xs: 12, md: 6 }} className={styles.textContainer}>
        <div className={styles.textWrapper} style={{ width: textWidth, ...textWrapperStyle }}>
          <h1 className={styles.heading} {...titleProps}>{highlightTitle(title)}</h1>
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
        flexDirection="column"
        alignItems="center"
      >
        {showImage && url && (
          <>
            {loading && (
              <Skeleton
                variant="rectangular"
                width="100%"
                height={400}
                sx={{ borderRadius: 2, bgcolor: 'rgba(255,255,255,0.1)' }}
              />
            )}
            <Image
              className={styles.image}
              src={url}
              alt="Hero Image"
              width={400}
              height={500}
              priority
              onLoad={() => setLoading(false)}
              style={{
                width: '100%',
                height: loading ? 0 : 'auto',
                objectFit: 'contain',
                borderRadius: 2,
                opacity: loading ? 0 : 1,
                transition: 'opacity 0.3s ease-in-out',
                ...imageStyle,
              }}
            />
          </>
        )}
        {children}
      </Grid>
    </Grid>
  )
}

export { HeroSection }
