import { Box, Container, Typography } from '@mui/material'
import Title from '@/shared/title'
import Sectors from './sectors'
import './styles.scss'
import { SectionDescription, SectionTitle } from '@/shared/typography'

const BusinessSectors = () => {
  return (
    <Box className="business-sectors-container">
      <Box className="business-sectors-title-wrapper">
        <SectionTitle
          className="business-sectors-title"
          text="Empowering Businesses Across Multiple Sectors"
          markText='Sectors'
        />
      </Box>
      <SectionDescription className="description" text=' We deliver innovative software solutions across industries, empowering
        businesses to overcome challenges, drive growth, and achieve success' />
      <Box>
        <Sectors />
      </Box>
    </Box>
  )
}

export default BusinessSectors
