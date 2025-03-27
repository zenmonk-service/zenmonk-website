import Image from 'next/image'
import { Box, Toolbar, Typography } from '@mui/material'
import About from '@/assets/images/about/about.png'
import BaseButton from '@/shared/button'
import './styles.scss'
import SectionWrapper from '@/shared/wrapper'

const HeroSection = () => {
  return (
    <SectionWrapper>
    <Box className="about-us-hero-section-wrapper">
      <Toolbar />
      <Box className="hero-section">
        <Box className="hero-section-text-wrapper">
          <Typography variant="h4" className="text-heading">
            Meet the Innovators <br />
            Behind
            <Typography variant="inherit" component="span">
              ZENMONK
            </Typography>
          </Typography>
          <Typography component="p" className="text-description">
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
          </Typography>
        </Box>
        <BaseButton className="base-button">Explore Services</BaseButton>
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
    </SectionWrapper>
  );
};

export { HeroSection }
