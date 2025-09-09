import Image from 'next/image'
import { Stack, Typography } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { Ready } from '../assets'
import Check from './assets/check.svg'
import './styles.scss'

const ReadyToTalk = () => {
  return (
    <div className="ready-to-talk-section-wrapper">
      <div className="ready-to-talk-content">
        <SectionTitle
          align="left"
          text="Ready to talk about your frontend project?"
          markText="project"
          className="ready-to-talk-title"
          markTextProps={{ rotate: 1.8 }}
        />

        <SectionDescription
          className="subheading"
          text=" We've been helping businesses create successful web applications for
          years, and we're excited to learn more about your project."
        />
        <Stack className="step-container">
          <div className="steps">
            <div className="step-header">
              <Check className="step-icon"/>
              <p className="step-heading">Tell us more</p>
            </div>
            <Typography className="step-description">
              Fill out a quick form describing your needs. You can always add
              details later, and we’ll reply within a day!
            </Typography>
          </div>

          <div className="steps">
            <div className="step-header">
              <Check className="step-icon"/>
              <p className="step-heading">Strategic Planning</p>
            </div>
            <Typography className="step-description">
              We’ll work together on a plan, defining goals, scope, and timeline
              to ensure alignment with your vision.
            </Typography>
          </div>

          <div className="steps">
            <div className="step-header">
              <Check className="step-icon"/>
              <p className="step-heading">Workshop Kickoff</p>
            </div>
            <Typography className="step-description">
              We’ll schedule a workshop to clarify details and ensure we're all
              aligned before we start building your project.
            </Typography>
          </div>
        </Stack>
      </div>
      <div className="image-container">
        <Image src={Ready} alt="process-diagram" />
      </div>
    </div>
  )
}

export default ReadyToTalk
