import Image from 'next/image'
import { Box, Toolbar, Typography } from '@mui/material'
import BaseButton from '@/shared/button'
import SectionWrapper from '@/shared/wrapper'
import { Hero } from '../../../assets'
import './styles.scss'

const SoftwareDevelopmentHeroSection = () => {
  return (
    <SectionWrapper>
      <Box className="software-development-hero-section-wrapper">
        <Toolbar />
        <Box className="hero-section">
          <Box className="hero-section-text-wrapper">
            <Typography variant="h4" className="text-heading">
              Reliable & Scalable<br />
              <Typography variant="inherit" component="span">
              Software Development
              </Typography>
            </Typography>
            <Typography component="p" className="text-description">
              We believe in ZenFusion, merging technology with mindfulness. As
              your partners in technological excellence, we transform values
              into action, simplifying tech to deliver user-centered solutions.
            </Typography>
          </Box>
          <BaseButton className="base-button">Explore More</BaseButton>
        </Box>
        <Box className="hero-section-image-wrapper">
          <Image
            className="hero-section-image"
            src={Hero}
            alt="innovator"
            fill
          />
        </Box>
      </Box>
    </SectionWrapper>
  )
}

export { SoftwareDevelopmentHeroSection  }
