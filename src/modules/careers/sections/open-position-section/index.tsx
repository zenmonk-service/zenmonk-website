import { Box, Container, Typography } from '@mui/material'
import Positions from './positions'
import './styles.scss'
import { SectionDescription, SectionTitle } from '@/shared/typography'

const OpenPosition = () => {
  return (
    <Box className="open-position-container">
      <Box className="open-position-title-wrapper">
        <SectionTitle className="open-position-title" text="Explore Open Positions and Join Our Team" markText=''>
        </SectionTitle>
      </Box>
       <SectionDescription className='description' text=' Discover a wide range of exciting career opportunities and take the next
        step in your professional journey by
        joining our dynamic and innovative team, where your skills and passion
        can thrive.' />
      <Box  className='position-container'>
        <Positions />
      </Box>
    </Box>
  )
}

export default OpenPosition
