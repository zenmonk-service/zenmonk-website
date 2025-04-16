import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import './styles.scss'

interface VisionCardProps {
  title: string
  image: string
  description: string
}

const VisionCard = ({ title, image, description }: VisionCardProps) => {
  return (
    <Box className="vision-card">
      <Box className="vision-card-image-container">
        <Image
          src={image}
          fill
          alt={`${title}-image`}
          className="vision-card-image"
        />
      </Box>
      <Image
        src={image}
        fill
        alt={`${title}-image`}
        className="vision-card-bg-image"
      />
      <Typography variant="h3" component="h3" className="vision-card-title">
        {title}
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        className="vision-card-description"
      >
        {description}
      </Typography>
    </Box>
  )
}

export default VisionCard
