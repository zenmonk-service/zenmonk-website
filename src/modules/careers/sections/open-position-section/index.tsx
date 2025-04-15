import { Box, Container, Typography } from '@mui/material'
import Positions from './positions'
import './styles.scss'
import { SectionTitle } from '@/shared/typography'

const OpenPosition = () => {
  return (
    <Box className="open-position-container">
      <Box className="open-position-title-wrapper">
        <SectionTitle className="open-position-title" text="Explore Open Positions and Join Our Team" markText=''>
        </SectionTitle>
      </Box>
      <Typography className="description" component="p">
        Discover a wide range of exciting career opportunities and take the next
        step in your professional journey by
        joining our dynamic and innovative team, where your skills and passion
        can thrive.
      </Typography>
      <Container maxWidth="xl">
        <Positions />
      </Container>
    </Box>
  )
}

export default OpenPosition
