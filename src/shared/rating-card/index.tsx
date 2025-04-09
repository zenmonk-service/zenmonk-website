import Image from 'next/image'
import { alpha, Box, Typography } from '@mui/material'
import './styles.scss'

interface RatingCardProps {
  rating: string
  description: string
  icon: string
  bg: string
}

const RatingCard = ({ rating, description, icon, bg }: RatingCardProps) => {
  return (
    <Box className="rating-card" sx={{ bgcolor: alpha(bg, 0.1) }}>
      <Image src={icon} alt={`${rating}-icon`} className="rating-card-icon" width={112} height={112} />
      <Box className="rating-card-content">
        <Typography component="h5" variant="h5" className="rating">
          {rating}
        </Typography>
        <Typography component="p" variant="body1" className="description">
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default RatingCard
