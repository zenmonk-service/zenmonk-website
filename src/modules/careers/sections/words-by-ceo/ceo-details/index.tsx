import Image, { StaticImageData } from 'next/image'
import styles from "./styles.module.scss"
import LinkedIn from '@/assets/icons/social/linkedin.svg'

const Details = ({ name, designation, image }: { name: string, designation: string, image: StaticImageData }) => {
  return (
    <div className={styles.ceoDetailsWrapper}>
      <Image src={image} alt="ceo-image" width={50} height={85} priority />
      <div className={styles.content}>
        <a className={styles.linkedInLink} href="https://www.linkedin.com/in/ceo-aman/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <h3 className={styles.name}>
            {name}
            <LinkedIn className={styles.linkedinIcon} />
          </h3>
        </a>
        <p className={styles.designation}>{designation}</p>
      </div>
    </div>
  )
}

export default Details