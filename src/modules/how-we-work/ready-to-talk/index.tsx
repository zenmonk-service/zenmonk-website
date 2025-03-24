import Image from 'next/image'
import { Box } from '@mui/material'
import { Ready } from '../assets'
import Title from '@/shared/title'
import './styles.scss'

const ReadyToTalk = () => {
  return (
    <Box className="ready-to-talk-section-wrapper">
      <Box>
        <Title align='left' text={'Ready to talk about your frontend project?'} />

        <p className="subheading">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>

        <Box className="steps">
          <p>✅ Tell us more</p>
          <p>
            Fill out a quick form describing your needs. You can always add
            details later on and we’ll reply within a day!
          </p>
        </Box>

        <Box className="steps">
          <p>✅ Strategic Planning</p>
          <p>
            Fill out a quick form describing your needs. You can always add
            details later on and we’ll reply within a day!
          </p>
        </Box>

        <Box className="steps">
          <p>✅ Workshop Kickoff</p>
          <p>
            Fill out a quick form describing your needs. You can always add
            details later on and we’ll reply within a day!
          </p>
        </Box>

      </Box>
      <Box className="images-container">
        <Image src={Ready} alt="process-diagram" />
      </Box>
    </Box>
  )
}

export { ReadyToTalk }
