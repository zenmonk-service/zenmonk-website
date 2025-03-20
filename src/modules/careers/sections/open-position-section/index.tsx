import { Box, Container, Typography } from '@mui/material'
import Title from '@/shared/title'
import Positions from './positions'
import './styles.scss'

const OpenPosition = () => {
  return (
    <Box className="open-position-container">
      <Box className="open-position-title-wrapper">
        <Typography className="open-position-title" component="h1">
          Explore Open Positions and Join
        </Typography>
        <Title className="open-position-sub-title" text="Our Team" />
      </Box>
      <Typography className="description" component="p">
        Discover a wide range of exciting career opportunities and take the next
        step in your professional journey by <br />
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
