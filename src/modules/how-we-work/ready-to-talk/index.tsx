import Image from 'next/image'
import { Box, Stack, Typography } from '@mui/material'
import Title from '@/shared/title'
import { Ready } from '../assets'
import './styles.scss'

const ReadyToTalk = () => {
  return (
    <Box className="ready-to-talk-section-wrapper">
      <Box className="ready-to-talk-content">
        <Title
          align="left"
          text={'Ready to talk about your frontend project?'}
          className="ready-to-talk-heading"
        />

        <Typography className="subheading">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Typography>

        <Stack className="step-container">
          <Box className="steps">
            <Typography className="step-heading">✅ Tell us more</Typography>
            <Typography className="step-description">
              Fill out a quick form describing your needs. You can always add
              details later on and we’ll reply within a day!
            </Typography>
          </Box>

          <Box className="steps">
            <Typography className="step-heading">
              ✅ Strategic Planning
            </Typography>
            <Typography className="step-description">
              Fill out a quick form describing your needs. You can always add
              details later on and we’ll reply within a day!
            </Typography>
          </Box>

          <Box className="steps">
            <Typography className="step-heading">
              ✅ Workshop Kickoff
            </Typography>
            <Typography className="step-description">
              Fill out a quick form describing your needs. You can always add
              details later on and we’ll reply within a day!
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box className="image-container">
        <Image src={Ready} alt="process-diagram" />
      </Box>
    </Box>
  )
}

export { ReadyToTalk }
