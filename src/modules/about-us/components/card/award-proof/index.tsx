import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import './styles.scss'
import StarIcon from './components/star-animation'

interface AwardProofCardProps {
  title: string
  description: string
  image: string
}

const AwardProofCard = ({ image, title, description }: AwardProofCardProps) => {
  return (
    <Box className="award-proof-card">
      <Box className="award-image-container">
        <StarIcon />
        <Image src={image} width={113} height={174} alt={`${title}-icon`} className="award-main-image" />
      </Box>
      <Box className="award-card-content">
        <Typography className="title" component="h3">
          {title}
        </Typography>
        <Typography className="description" component="p">
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default AwardProofCard
