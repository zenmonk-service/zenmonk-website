'use client'

import { Box, Stack } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { RTTGirlImg } from './assets'
import BaseButton from '@/shared/button'
import './style.scss'

const ReadyToTalkShared = () => {
  return (
    <Stack className="ready-to-talk-wrapper">
      <Box className="ready-to-talk-container">
        {/* IMAGE */}
        <Box className="rtt-image">
          <RTTGirlImg />
        </Box>

        {/* CONTENT */}
        <Box className="rtt-content">
          <SectionTitle
            className="rtt-heading"
            text="NOT KNOW WHERE TO START?"
            align="left"
          />

          <SectionDescription
            className="rtt-subheading"
            text="Let’s get help from zenmonk’s software development experts"
          />

          <BaseButton className="rtt-button">READ MORE</BaseButton>
        </Box>
      </Box>
    </Stack>
  )
}

export default ReadyToTalkShared
