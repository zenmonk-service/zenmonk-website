import { Box, Typography } from '@mui/material'
import BaseButton from '@/shared/button'
import BallDecorator from './assets/ball-decorator.svg'
import HomeHeroImage from './assets/hero.svg'
import './styles.scss'

const ColorTypography = ({ text }: { text: string }) => {
  return (
    <Typography variant="inherit" component="span">
      &nbsp;{text}
    </Typography>
  )
}
const HeroSection = () => {
  return (
    <Box className="hero-section">
      <BallDecorator className="ball-decorator" />
      <Box className="container">
        <Box className="text-container">
          <Typography variant="h4" className="heading">
            Super Charge Your Business <br />
            Growth With <ColorTypography text="Efficient" />,{' '}
            <ColorTypography text="Intelligent" />,
            <ColorTypography text=" Versatile" /> &nbsp;Software Innovations
          </Typography>
          <Typography className="description">
            Zenmonk believes in the power of harmony between- Technology and
            Precision, Innovation and Mindfulness.
          </Typography>
        </Box>
        <BaseButton sx={{ bgcolor: 'red', width: '100%' }}>
          EXPLORE MORE
        </BaseButton>
      </Box>
      <Box className="image-container">
        <HomeHeroImage />
      </Box>
    </Box>
  )
}

export { HeroSection }