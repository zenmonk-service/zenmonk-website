import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import './styles.scss'

interface StandOutCardProps {
  icon: any
  title: string
  description: string
  bgImage: string
}

const StandOutCard = ({
  icon:Icon,
  title,
  description,
  bgImage,
}: StandOutCardProps) => {
  return (
    <Box className="stand-out-card" sx={{ backgroundImage: `url(${bgImage})` }}>
      <Box className="icon-container">
        <Icon/>
      </Box>
      <Box className="stand-out-card-content">
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

export default StandOutCard
