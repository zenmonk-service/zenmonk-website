import { Box, Container, Typography } from '@mui/material'
import Title from '@/shared/title'
import Positions from './sectors'
import './styles.scss'

const BusinessSectors = () => {
  return (
    <Box className="business-sectors-container">
      <Box className="business-sectors-title-wrapper">
        <Title
          className="business-sectors-title"
          text="Empowering Businesses Across Multiple Sectors"
        />
      </Box>
      <Typography className="description" component="p">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s. Lorem Ipsum <br /> has been the industry's standard dummy text
        ever since the 1500s.
      </Typography>
      <Container maxWidth="xl">
        <Positions />
      </Container>
    </Box>
  )
}

export default BusinessSectors
