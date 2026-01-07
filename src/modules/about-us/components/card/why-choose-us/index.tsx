import Image, { StaticImageData } from 'next/image'
import { Box, Typography } from '@mui/material'
import './styles.scss'

interface WhyChooseUsCardProps {
  title: string
  description: string
  icon: StaticImageData
}
const WhyChooseUsCard = ({
  title,
  description,
  icon,
}: WhyChooseUsCardProps) => {
  return (
    <Box className="why-choose-us-card">
      <Box className="card-image-container">
        <Image loading="lazy" unoptimized src={icon.src} fill alt={`${title}-icon`} />
      </Box>
      <Box className="content">
        <Typography component="h3" className="title">
          {title}
        </Typography>
        <Typography component="p" className="description">
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default WhyChooseUsCard
