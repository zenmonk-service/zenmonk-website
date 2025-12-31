import styles from './card.module.scss'

interface ExcellenceCardProps {
  details: {
    title: string
    description: string
    image: any
    color: string
  }
}

const ExcellenceCard = ({ details }: ExcellenceCardProps) => {
  const { title, description, image: Image, color } = details

  return (
    <div className={styles.card} style={{ border: `1px solid ${color}` }}>
      <Image className={styles.image} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ExcellenceCard
