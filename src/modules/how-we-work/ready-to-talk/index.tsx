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
          We’ve been helping businesses create successful web applications for
          years, and we’re excited to learn more about your project.
        </Typography>

        <Stack className="step-container">
          <Box className="steps">
            <Typography className="step-heading"> Tell us more</Typography>
            <Typography className="step-description">
              Fill out a quick form describing your needs. You can always add
              details later, and we’ll reply within a day!
            </Typography>
          </Box>

          <Box className="steps">
            <Typography className="step-heading">Strategic Planning</Typography>
            <Typography className="step-description">
              We’ll work together on a plan, defining goals, scope, and timeline
              to ensure alignment with your vision.
            </Typography>
          </Box>

          <Box className="steps">
            <Typography className="step-heading">Workshop Kickoff</Typography>
            <Typography className="step-description">
              We’ll schedule a workshop to clarify details and ensure we're all
              aligned before we start building your project.
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
