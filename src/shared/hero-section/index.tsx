'use client'

import parse from 'html-react-parser'
import Grid from '@mui/material/Grid2'
import { motion } from 'framer-motion'
import BaseButton from '../button'
import styles from './hero-section.module.scss'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  description: string
  textWidth?: number
  highlightedText?: string
  url?: string
  imageStyle?: React.CSSProperties
  children?: React.ReactNode
  showImage?: boolean
  textWrapperStyle?: React.CSSProperties
  titleProps?: React.HTMLAttributes<HTMLHeadingElement>
  style?: React.CSSProperties
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  textWidth,
  highlightedText = '',
  url,
  imageStyle = {},
  children,
  showImage = true,
  textWrapperStyle = {},
  titleProps = {},
  style = {},
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

  const buttonVariants = {
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
        delay: 0.3
      },
    },
  }

  const safeTitleProps = { ...titleProps, onAnimationStart: undefined }

  return (
    <Grid
      className={styles.section}
      container
      spacing={4}
      style={style}
    >
      <Grid size={{ xs: 12, md: 6 }} className={styles.textContainer}>
        <div 
          className={styles.textWrapper} 
          style={{ width: textWidth, ...textWrapperStyle }}
        >
          <motion.h1 
            className={styles.heading} 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity: 0 }}
            {...(safeTitleProps as any)}
          >
            {highlightTitle(title)}
          </motion.h1>
          <motion.p 
            className={styles.description}
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity: 0 }}
          >
            {parse(description)}
          </motion.p>
          <motion.div 
            className={styles.buttonContainer}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity: 0 }}
          >
            <BaseButton className={styles.button}>EXPLORE MORE</BaseButton>
          </motion.div>
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
          <Image
            className={styles.image}
            src={url}
            alt="Hero Image"
            width={400}
            height={500}
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
