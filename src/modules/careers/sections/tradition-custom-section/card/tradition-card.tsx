import './styles.scss'

interface TraditionCustomCardProps {
  image: any
  title: string
  description: string
}

const TraditionCustomCard = ({
  image: Image,
  title,
  description,
}: TraditionCustomCardProps) => {
  return (
    <div className="tradition-custom-card">
      <div className="image-container">
        <Image alt="image" className="image" />
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default TraditionCustomCard
