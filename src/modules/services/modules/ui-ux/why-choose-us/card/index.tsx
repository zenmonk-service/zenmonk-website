import styles from './card-style.module.scss'

interface Card {
  background: any
  icon: any
  name: string
  description: string
  marginLeft: string
  style?: React.CSSProperties
}

const Card = (props: Card) => {
  const normalizedName = props.name.toLowerCase().replace(/\s+/g, '-')
  return (
    <div
      className={`${styles.cardContainer} ${styles[normalizedName]}`}
      style={props.style}
    >
      <props.background className={styles.background} />
      <props.icon className={styles.icon} />
      <p className={styles.title}>{props.name}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  )
}

export default Card
