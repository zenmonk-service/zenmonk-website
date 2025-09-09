import './styles.scss'

interface ExcellenceCardProps {
  details: {
    title: string
    description: string
    image: any
    color: string
  }
}

const ExcellenceCard = ({ details }: ExcellenceCardProps) => {
  return (
    <div
      className="excellence-card"
      style={{ border: `1px solid ${details.color}` }}
    >
      <details.image className="excellence-card-image" />
      <p className="title">{details.title}</p>
      <p className="description">{details.description}</p>
    </div>
  )
}

export default ExcellenceCard
