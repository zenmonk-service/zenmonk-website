import Image from 'next/image'
import { Box, Stack, Typography } from '@mui/material'
import {
  First,
  Quality as QualityImg,
  Second,
  Third,
} from '@/modules/how-we-work/assets'
import Title from '@/shared/title'
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
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s. Lorem Ipsum has been the industry's standard.
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
    </Box>
  )
}

export { Quality }
