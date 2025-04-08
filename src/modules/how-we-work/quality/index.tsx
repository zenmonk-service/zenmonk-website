import Image from 'next/image'
import { Box, Stack, Typography } from '@mui/material'
import {
  First,
  Quality as QualityImg,
  Second,
  Third,
  GraphIcon,
} from '@/modules/how-we-work/assets'
import Title from '@/shared/title'
import TopRightDottedImage from '../assets/quality/top-right-dotted.png'
import VerticalDottedImage from '../assets/quality/vertical-dotted.png'
import './styles.scss'

const Quality = () => {
  return (
    <Box className="quality-hero-section-wrapper">
      <Stack className="first-section">
        <Title
          align="left"
          text={'Our Promise of Quality Analysis'}
          className="quality-title"
        />
        <Typography className="subheading">
          We deliver Zen-inspired precise, mindful solutions by integrating deep
          expertise with client collaboration; prioritizing transparency,
          innovation, and purposeful development to innovate impactful
          technology.
        </Typography>

        <Stack className="stats-img-container">
          <Image src={First} alt="" className="stats-img" />
          <Image src={Second} alt="" className="stats-img" />
          <Image src={Third} alt="" className="stats-img" />
        </Stack>
      </Stack>
      <Box className="quality-img-container">
        <Image src={QualityImg} alt="" className="quality-img" />
      </Box>
      <Image
        src={VerticalDottedImage}
        alt=""
        className="vertical-dotted-image"
      />
      <Image src={GraphIcon} alt="" className="graph-icon" />
      <Image
        src={TopRightDottedImage}
        alt=""
        className="top-right-dotted-image"
      />
    </Box>
  )
}

export { Quality }
