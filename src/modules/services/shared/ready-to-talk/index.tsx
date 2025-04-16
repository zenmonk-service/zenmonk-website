import Image from 'next/image'
import { Box, Button, Stack, Typography } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { RTTGirlImg } from './assets'
import './style.scss'

const ReadyToTalkShared = () => {
  return (
    <Stack className="ready-to-talk-shared-section">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        className="ready-to-talk-shared-container"
        gap={{ lg: '3.0208vw' }}
      >
        <Box className="image-container">
          <RTTGirlImg className="rtt-img" />
        </Box>

        <Stack className="ready-to-talk-shared-content">
          <SectionTitle
            className="heading"
            text="NOT KNOW WHERE TO START ?"
            align="left"
          />
          <SectionDescription
            className="subheading"
            text="Let’s get help from zenmonk’s software development experts"
          />
          <Button className="rtt-button">Read More</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ReadyToTalkShared
