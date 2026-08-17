import Image from 'next/image'
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
    <div className="big-show-case-event-card">
      <div className="show-case-image-container">
        {cardDetails?.image && (
          <Image
            className="show-case-image"
            src={cardDetails?.image}
            alt="show-case-image"
          />
        )}
      </div>
      <div className="event-details">
        <div className="event-date">
          <Image src={Calender} alt="calendar-image" />
          <p className="date-text">{cardDetails?.date}</p>
        </div>
        <div className="event-content-details">
          <h1 className="title-text">{cardDetails?.title}</h1>
          <p className="description-text">{cardDetails?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default BigShowCaseCard
