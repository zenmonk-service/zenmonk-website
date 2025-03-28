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
import './styles.scss'

const HeroSection = () => {
  return (
    <Box className="hero-section-wrapper">
      <Box className="toolbar">      <Toolbar /></Box>

      <Image quality={100} src={Vector} alt="vector" className="vector" />
      <Box className="hero-section">
        <Box className="hero-section-text-wrapper">
          <Typography variant="h4" className="text-heading">
            Super Charge Your Business <br />
            Growth With
            <Typography variant="inherit" component="span">
              {' '}
              Efficient
            </Typography>
            ,
            <Typography variant="inherit" component="span">
              {' '}
              Intelligent
            </Typography>
            ,
            <Typography variant="inherit" component="span">
              {' '}
              Versatile
            </Typography>
            &nbsp;Software Inovations
          </Typography>
          <Typography component="p" className="text-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Typography>
        </Box>
        <BaseButton sx={{ width: '180px' }}>EXPLORE MORE</BaseButton>
      </Box>
      <Box className="hero-section-image-wrapper">
        {HeroTech && (
          <Image className="hero-section-image" src={HeroTech} alt="techs" />
        )}
        <>
          <Image
            className="hero-section-small-image balance"
            src={HeroBalance}
            alt="techs"
          />
          <Image
            className="hero-section-small-image db"
            src={HeroDb}
            alt="techs"
          />
          <Image
            className="hero-section-small-image figma"
            src={HeroFigma}
            alt="techs"
          />
          <Image
            className="hero-section-small-image income"
            src={HeroIncome}
            alt="techs"
          />
          <Image
            className="hero-section-small-image js"
            src={HeroJs}
            alt="techs"
          />
          <Image
            className="hero-section-small-image php"
            src={HeroPhp}
            alt="techs"
          />
          <Image
            className="hero-section-small-image react"
            src={HeroReact}
            alt="techs"
          />
          <Image
            className="hero-section-small-image xd"
            src={HeroXd}
            alt="techs"
          />
          <Image
            className="hero-section-small-image circle"
            src={HeroCircle}
            alt="techs"
          />
        </>
      </Box>
    </Box>
  )
}

export { HeroSection }
