import styles from './card-style.module.scss'

interface Card {
  background: any
  icon: any
  name: string
  description: string
  marginLeft: string
}

const Card = (props: Card) => {
  return (
    <div className={styles.cardContainer}>
      <props.background
        style={{
          marginLeft: props.marginLeft,
        }}
        className={styles.background}
      />
      <props.icon className={styles.icon} />
      <p className={styles.title}>{props.name}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  )
}

export default Card
