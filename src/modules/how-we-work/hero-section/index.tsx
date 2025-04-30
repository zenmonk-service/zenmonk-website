import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { Hero } from '@/modules/how-we-work/assets'
import BaseButton from '@/shared/button'
import { SectionDescription } from '@/shared/typography'
import HorizontalDottedImage from '../assets/hero/horizontal-dotted-image.png'
import VerticalDottedImage from '../assets/hero/vert-dotted-image.png'
import './styles.scss'

const HeroSection = () => {
  return (
    <Box className="how-we-work-hero-section-wrapper">
      <Box className="hero-section">
        <Box className="hero-section-text-wrapper">
          <Typography className="text-heading">
            <Typography variant="inherit" component="span">
              How We Work
            </Typography>{' '}
            for <br />
            Seamless Solutions
          </Typography>
          <SectionDescription
            text="We deliver Zen-inspired precise, 
            mindful solutions by integrating deep expertise with client collaboration,
            prioritizing transparency, innovation, and purposeful development to 
            innovate impactful technology."
            className="text-description"
          ></SectionDescription>
        </Box>
      </Box>
      <Box className="hero-section-image-wrapper">
        <Image className="hero-section-image" src={Hero} alt="innovator" fill />
      </Box>
      <Image
        alt=""
        src={HorizontalDottedImage}
        className="bottom-horizontal-dotted-image"
      />
      <Image
        alt=""
        src={HorizontalDottedImage}
        className="top-horizontal-dotted-image"
      />
      <Image
        alt=""
        src={VerticalDottedImage}
        className="vertical-dotted-image"
      />
    </Box>
  )
}

export { HeroSection }
