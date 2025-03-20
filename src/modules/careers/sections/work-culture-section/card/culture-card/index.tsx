import Image, { StaticImageData } from 'next/image'
import { Box, Typography } from '@mui/material'
import './styles.scss'

interface CultureCardProps {
  details: {
    image: StaticImageData
    title: string
    description: string
  }
}

const CultureCard = ({ details }: CultureCardProps) => {
  return (
    <Box
      className="culture-card"
      sx={{
        backgroundImage: `url(${details.image.src})`,
      }}
    >
      <Box className="culture-card-content">
        <Typography component="h1" className="title">
          {details.title}
        </Typography>
        <Typography component="p" className="description">
          {details.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default CultureCard
