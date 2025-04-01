import Image from 'next/image'
import { Box, Button, Stack, Typography } from '@mui/material'
import { RTTGirlImg } from './assets'
import './style.scss'

const ReadyToTalkShared = () => {
  return (
    <Stack className="ready-to-talk-shared-section">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        className="ready-to-talk-shared-container"
        gap={{ xs: 3, md: 5.875, lg: 7.25, xl: 8.75 }}
      >
        <Box className="image-container">
          <Image src={RTTGirlImg} alt="" className="rtt-img" />
        </Box>

        <Stack className="ready-to-talk-shared-content">
          <Typography className="heading">NOT KNOW WHERE TO START ?</Typography>
          <Typography className="subheading">
            Let’s get help from zenmonk’s software development experts
          </Typography>
          <Button className="rtt-button">Read More</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ReadyToTalkShared
