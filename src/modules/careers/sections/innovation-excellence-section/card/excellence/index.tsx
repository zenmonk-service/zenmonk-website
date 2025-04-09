import Image, { StaticImageData } from 'next/image'
import { Box, Typography } from '@mui/material'
import './styles.scss'

interface ExcellenceCardProps {
  details: {
    title: string
    description: string
    image: StaticImageData
    color: string
  }
}

const ExcellenceCard = ({ details }: ExcellenceCardProps) => {
  return (
    <Box
      className="excellence-card"
      sx={{ border: `1px solid ${details.color}` }}
    >
      <Image
        alt="excellence-card-image"
        src={details.image}
        className="excellence-card-image"
      />
      <Typography className="title">{details.title}</Typography>
      <Typography className="description">{details.description}</Typography>
    </Box>
  )
}

export default ExcellenceCard
