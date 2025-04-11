import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import BG from './assets/bg.png'
import './styles.scss'

const ReadyToStartSoftwareDev = () => {
  return (
    <Box className="ready-to-start">
      <Box sx={{ width: '100%' }}>
        <Image src={BG} alt="map" style={{ width: '100%' }} />
      </Box>
      <Box className="text-box">
        <Typography className="title">Are you ready to start ?</Typography>
        <Typography className="description">
          Custom Software Development Tailored Solutions for Your Business
          Custom Software Development Tailored Solutions{' '}
        </Typography>
        <button>Contact us</button>
      </Box>
    </Box>
  )
}

export default ReadyToStartSoftwareDev
