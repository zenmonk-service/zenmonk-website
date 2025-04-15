import Image from 'next/image'
import { Box, Container, Toolbar, Typography } from '@mui/material'
import {
  BigEllipse,
  Circle,
  Ellipse,
  Experience,
  Freelancer,
  HappyCulture,
  SalaryHike,
} from '@/modules/careers/assets'
import BaseButton from '@/shared/button'
import './styles.scss'

const HeroSection = () => {
  return (
    <Box className="career-hero-section-wrapper">
      {/* <Toolbar /> */}
      <Box className="hero-section">
        <Image className="ellipse" src={Ellipse} alt="ellipse" />
        <Box className="hero-section-text-wrapper">
          <Typography variant="h4" className="text-heading">
            <Typography variant="inherit" component="span">
              Join Our Team{' '}
            </Typography>
            and Make <br />
            an Impact in Tech
          </Typography>
          <Typography component="p" className="text-description">
          Find your Zen in your career at Zenmonk. A monastery-like workplace for growth, new ideas, and making a difference, where our team is encouraged to discover balance and purpose in work.
          </Typography>
        </Box>
        <BaseButton>JOIN NOW</BaseButton>
      </Box>
      <Box className="hero-section-image-wrapper">
        <Box className="image-container">
          <Image className="big-ellipse" src={BigEllipse} alt="ellipse" />
          <Image
            className="hero-section-image freelancer"
            src={Freelancer}
            alt="freelancer"
            fill
          />
          <Image
            className="hero-section-circle-image"
            src={Circle}
            alt="circle"
            fill
          />
          <Image
            alt="experience"
            src={Experience}
            className="hero-section-experience-image"
          />
          <Image
            alt="hike"
            src={SalaryHike}
            className="hero-section-hike-image"
          />
          <Image
            alt="happy-culture"
            src={HappyCulture}
            className="hero-section-happy-culture-image"
          />
        </Box>
      </Box>
    </Box>
  )
}

export { HeroSection }
