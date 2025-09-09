import './styles.scss'

interface TechProps {
  Icon: string
  title: string
}

const TechCard = ({ Icon, title }: TechProps) => {
  return (
    <div className="tech-card-container">
      {/* {icon && <Image src={icon} alt={title} className="tech-card-icon" />} */}
      <Icon />
      <p className="tech-card-title">{title}</p>
    </div>
  )
}

export default TechCard
