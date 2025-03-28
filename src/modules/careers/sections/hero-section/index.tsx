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
      <Toolbar />
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
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
          </Typography>
        </Box>
        <BaseButton sx={{ width: '180px' }}>EXPLORE MORE</BaseButton>
        {/* <BaseButton className="base-button">Explore More</BaseButton> */}
      </Box>
      <Box className="hero-section-image-wrapper">
        <Box className="image-container">
          <Image className="big-ellipse" src={BigEllipse} alt="ellipse" />
          <Image
            className="hero-section-image"
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
            width={147}
            height={150}
            src={Experience}
            className="hero-section-experience-image"
          />
          <Image
            alt="hike"
            width={137}
            height={113}
            src={SalaryHike}
            className="hero-section-hike-image"
          />
          <Image
            alt="happy-culture"
            width={150}
            height={165}
            src={HappyCulture}
            className="hero-section-happy-culture-image"
          />
        </Box>
      </Box>
    </Box>
  )
}

export { HeroSection }
