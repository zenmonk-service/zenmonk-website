import { Box, Typography } from '@mui/material'
import { SectionDescription } from '@/shared/typography'
import './styles.scss'

interface BusinessCardProps {
  Icon: any
  title: string
  name: String
  description: string
}
const BusinessCard = ({
  Icon,
  title,
  name,
  description,
}: BusinessCardProps) => {
  return (
    <Box className={`about-us-business-card-container ${name}`}>
      <Box className="business-card-icon-container">
        <Box className="icon">
          <Icon />
        </Box>
      </Box>
      <Box className="business-card-content">
        <Typography component="h3" className="business-card-title">
          {title}
        </Typography>
        <SectionDescription text={description} className="business-card-description" />
      </Box>
    </Box>
  )
}

export default BusinessCard
