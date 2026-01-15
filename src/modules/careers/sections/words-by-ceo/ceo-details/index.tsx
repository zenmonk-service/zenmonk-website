import Image from 'next/image'
import styles from "./styles.module.scss"

const Details = ({ name, designation, image }: { name: string, designation: string, image: string }) => {
  return (
    <div className={styles.ceoDetailsWrapper}>
      <Image src={image} alt="ceo-image" width={50} height={85} priority/>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.designation}>{designation}</p>
      </div>
    </div>
  )
}

export default Details