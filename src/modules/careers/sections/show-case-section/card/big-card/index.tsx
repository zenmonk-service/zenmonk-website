import Image from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Button, Container, Typography } from '@mui/material'
import { Calender } from '../../assets'
import './styles.scss'

interface BigShowCaseCardProps {
  cardProps?: {
    details?: {
      image: any
      date: string
      title: string
      description: string
    }
  }
}

const BigShowCaseCard = ({ cardProps }: BigShowCaseCardProps) => {
  const cardDetails = cardProps?.details
  return (
    <Box className="big-show-case-event-card">
      <Box className="show-case-image-container">
        {cardDetails?.image && (
          <Image
            className="show-case-image"
            src={cardDetails?.image}
            alt="show-case-image"
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
          <Button className="button" variant="text">
            Show More <ArrowRightAltIcon className="icon" />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default BigShowCaseCard
