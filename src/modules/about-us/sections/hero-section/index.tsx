'use client'
import Image from 'next/image'
import { Box, Toolbar, Typography, useMediaQuery } from '@mui/material'
import About from '@/assets/images/about/about.png'
import BaseButton from '@/shared/button'
import SectionWrapper from '@/shared/wrapper'
import './styles.scss'

const HeroSection = () => {
  const isLaptop = useMediaQuery('(max-width:1499px)')

  const content = (
    <Box className="about-us-hero-section-wrapper">
      <Toolbar />
      <Box className="hero-section">
        <Box className="hero-section-text-wrapper">
          <Typography variant="h4" className="text-heading">
            Meet the Innovators <br />
            Behind{' '}
            <span className="highlight-text">ZENMONK</span>
          </Typography>
          <Typography component="p" className="text-description">
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values
            into action, simplifying tech to deliver user-centered solutions.
          </Typography>
        </Box>
        <BaseButton  className="base-button" >Explore Services</BaseButton>
      </Box>
      <Box className="hero-section-image-wrapper">
        <Image
          className="hero-section-image"
          src={About}
          alt="innovator"
          fill
        />
      </Box>
    </Box>
  )

  return isLaptop ? <Box>{content}</Box> : <SectionWrapper>{content}</SectionWrapper>
}

export { HeroSection }
