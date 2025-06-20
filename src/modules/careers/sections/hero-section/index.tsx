import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BaseButton from '@/shared/button'
import Hero from './hero.svg'
import './styles.scss'

const HeroSection = () => {
  return (
    <Box className="career-hero-section-wrapper">
      <Box className="hero-section">
        <Box className="hero-section-text-wrapper">
          <Typography variant="h4" className="text-heading">
            Join Us At {" "}
            <Typography variant="inherit" component="span">
              ZENMONK
            </Typography>
            <br />
          </Typography>
          <Typography component="p" className="text-description">
            Find your Zen in your career at Zenmonk. A monastery-like workplace
            for growth, new ideas, and making a difference, where our team is
            encouraged to discover balance and purpose in work.
          </Typography>
        </Box>
        <BaseButton className="button">Apply NOW</BaseButton>
      </Box>
      <Box className="hero-section-image-wrapper">
        <Box className="image-container">
          <Hero />
        </Box>
      </Box>
    </Box>
  )
}

export { HeroSection }
