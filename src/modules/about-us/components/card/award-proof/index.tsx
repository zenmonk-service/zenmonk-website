import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import StarIcon from './components/star-animation'
import './styles.scss'

interface AwardProofCardProps {
  title: string
  description: string
  image: string
}

const AwardProofCard = ({ image, title, description }: AwardProofCardProps) => {
  return (
    <Box className="award-proof-card">
      <StarIcon/>
      <Box className="award-card-content">
      <Image src={image} width={113} height={174} alt={`${title}-icon`} />
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
