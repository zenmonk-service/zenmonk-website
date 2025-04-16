
import { Box, Typography } from '@mui/material'
import './styles.scss'

interface TraditionCustomCardProps {
  image: any
  title: string
  description: string
}

const TraditionCustomCard = ({
  image : Image,
  title,
  description,
}: TraditionCustomCardProps) => {
  return (
    <Box className="tradition-custom-card">
      <Box className="image-container">
        <Image className="image"/>
      </Box>
      <Box className="content">
        <Typography component="h1" className="title">
          {title}
        </Typography>
        <Typography component="p" className="description">
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default TraditionCustomCard
