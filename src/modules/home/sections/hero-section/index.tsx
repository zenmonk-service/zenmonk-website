import Image from 'next/image'
import { Box, Toolbar, Typography } from '@mui/material'
import { Vector } from '@/assets/icons'
import { HeroTech } from '@/assets/images'
import {
  HeroBalance,
  HeroCircle,
  HeroDb,
  HeroFigma,
  HeroIncome,
  HeroJs,
  HeroPhp,
  HeroReact,
  HeroXd,
} from '@/assets/images/hero-section'
import BaseButton from '@/shared/button'
import HomeHeroImage from './hero.svg'
import './styles.scss'

const HeroSection = () => {
  return (
    <Box className="hero-section-wrapper">
      {/* <Box className="toolbar">      <Toolbar /></Box> */}
      {/* <Box className="vector"> */}
      {/* </Box> */}

      {/* <Image quality={100} src={Vector} alt="vector" className="vector" /> */}
      <Box className="hero-section">
        <Box className="hero-section-text-wrapper">
          <Typography variant="h4" className="text-heading">
            Super Charge Your Business <br />
            Growth With
            <Typography variant="inherit" component="span">
              &nbsp;Efficient
            </Typography>
            ,
            <Typography variant="inherit" component="span">
              &nbsp;Intelligent
            </Typography>
            ,
            <Typography variant="inherit" component="span">
              &nbsp; Versatile
            </Typography>
            &nbsp;Software Inovations
          </Typography>
          <Typography component="p" className="text-description">
            Zenmonk believes in the power of harmony between- Technology and
            Precision, Innovation and Mindfulness.
          </Typography>
        </Box>
        <BaseButton>EXPLORE MORE</BaseButton>
      </Box>
      <Box className="image-wrapper">
        <HomeHeroImage className="vector" />
      </Box>
    </Box>
  )
}

export { HeroSection }
