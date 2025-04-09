import { Box, Container, Typography } from '@mui/material'
import Title from '@/shared/title'
import Sectors from './sectors'
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
        We deliver innovative software solutions across industries, empowering
        businesses to overcome challenges, drive growth, and achieve success.
      </Typography>
      <Box>
        <Sectors />
      </Box>
    </Box>
  )
}

export default BusinessSectors
