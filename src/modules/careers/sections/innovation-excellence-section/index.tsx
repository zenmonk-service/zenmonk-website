import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import Title from '@/shared/title'
import { Excellence } from './assets'
import ExcellenceCard from './card/excellence'
import { innovations } from './innovations'
import './styles.scss'
import { SectionDescription, SectionTitle } from '@/shared/typography'

const InnovationExcellence = () => {
  return (
    <Box className="innovation-excellence-section">
      <Box className="left-section">
        <SectionTitle
          align="left"
          text="Our Promise of Innovation and Excellence"
          markText='Excellence'
          className="title"
          markTextProps={{
            rotate:3
          }}
        />
        <SectionDescription
          text="We are dedicated to fostering a supportive environment, offering
          growth opportunities, and ensuring our team feel valued and
          appreciated."
          className="description"
        />
        <Excellence className="excellence-image"/>
       
      </Box>
      <Box className="right-section">
        {innovations.map((innovation, index) => {
          return (
            <ExcellenceCard key={index} details={innovation}></ExcellenceCard>
          )
        })}
      </Box>
    </Box>
  )
}

export default InnovationExcellence
