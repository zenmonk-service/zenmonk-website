import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import './styles.scss'

interface VisionCardProps {
  title: string
  image: string
}

const VisionCard = ({ title, image }: VisionCardProps) => {
  return (
    <Box className="vision-card">
      <Image
        src={image}
        width={75}
        height={75}
        alt={`${title}-image`}
        className="vision-card-image"
      />
      <Typography variant="h3" component="h3" className="vision-card-title">
        {title}
      </Typography>
    </Box>
  )
}

export default VisionCard
