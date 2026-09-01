import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { Calender } from '../../assets'
import './styles.scss'

interface SmallShowCardProps {
  cardProps?: {
    details?: {
      image: any
      date: string
      title: string
      description: string
    }
  }
}

const SmallShowCard = ({ cardProps }: SmallShowCardProps) => {
  const cardDetails = cardProps?.details
  return (
    <Box className="small-show-case-event-card">
      <Box className="show-case-image-container">
        {cardDetails?.image && (
          <Image
            className="show-case-image"
            src={cardDetails?.image}
            alt="show-case-image"
            quality={100}
            unoptimized
          />
        )}
      </Box>
      <Box className="event-details">
        <Box className="event-date">
          <Image src={Calender} alt="calendar-image" />
          <Typography component="p" className="date-text">
            {cardDetails?.date}
          </Typography>
        </Box>
        <Box className="event-content-details">
          <Typography component="h1" className="title-text">
            {cardDetails?.title}
          </Typography>
          <Typography component="p" className="description-text">
            {cardDetails?.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default SmallShowCard
