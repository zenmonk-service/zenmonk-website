import { StaticImageData } from 'next/image'
import './styles.scss'

interface CultureCardProps {
  details: {
    image: StaticImageData
    title: string
    description: string
  }
}

const CultureCard = ({ details }: CultureCardProps) => {
  return (
    <div
      className="culture-card"
      style={{ backgroundImage: `url(${details.image.src})` }}
    >
      <div className="culture-card-content">
        <h1 className="title">{details.title}</h1>
        <p className="description">{details.description}</p>
      </div>
    </div>
  )
}

export default CultureCard
