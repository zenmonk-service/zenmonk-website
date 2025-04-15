'use client'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import M1 from './assets/c11.svg'
import M2 from './assets/c22.svg'
import M3 from './assets/c33.svg'
import M4 from './assets/c44.svg'
import './mobile.scss'

const arr = [
  {
    Icon: M1,
    title: 'Previous work dissatisfaction',
    description:
      "Want business growth? But, not satisfied with the results. Don't worry! Zenmonk got you all covered with result-driven business strategies.",
  },

  {
    Icon: M2,
    title: 'Engagement and Resolution',
    description:
      'Start by sharing ideas and long-term vision of your business with us. Whether you want customised solutions or overall growth, we have got you all covered!',
  },

  {
    Icon: M3,
    title: 'Delivering Beyond Expectations',
    description:
      'Your satisfaction is our priority. With the help of an expert team and years of experience, we create an excellent planning strategy for your business.',
  },

  {
    Icon: M4,
    title: 'Celebrating Success and Loyalty',
    description:
      'We ensure successful results by boosting ROI, generating high profits, enhancing user interface and increasing brand authority.',
  },
]

const ClientSatisfactionMobile = () => {
  return (
    <Box className="client-statisfaciton-mobile">
      <SectionTitle
        text="The Evolution of Client Satisfaction"
        markText="Satisfaction"
        align="center"
        markTextProps={{
          rotate: 2,
        }}
        className="title"
      />
      <SectionDescription
        className="description"
        text=" We transform client dissatisfaction into strategic success through
          innovation. We turn challenges into growth by aligning with your
          business vision. We drive measurable outcomes through tailored
          engagement and expert planning."
      />
      <Box className="emoji-wrapper">
        {arr.map(({ Icon, title, description }) => {
          return (
            <Box className="emoji">
              <Icon />
              <Typography className='title'>{title}</Typography>
              <Typography className='description'>{description}</Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export { ClientSatisfactionMobile }
