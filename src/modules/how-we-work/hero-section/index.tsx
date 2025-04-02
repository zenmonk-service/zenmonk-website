import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { Hero } from '@/modules/how-we-work/assets'
import BaseButton from '@/shared/button'
import './styles.scss'
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
          <Typography component="p" className="text-description">
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
          </Typography>
        </Box>
        <BaseButton sx={{ width: '180px' }}>EXPLORE MORE</BaseButton>
      </Box>
      <Box className="hero-section-image-wrapper">
        <Image className="hero-section-image" src={Hero} alt="innovator" fill />
      </Box>
    </Box>
  )
}

export { HeroSection }
