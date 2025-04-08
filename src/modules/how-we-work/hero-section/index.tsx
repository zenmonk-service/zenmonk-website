import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { Hero } from '@/modules/how-we-work/assets'
import BaseButton from '@/shared/button'
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
