import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SectionTitle } from '@/shared/typography'
import Arrow from '../assets/arrow.svg'
import DreamImg from '../assets/dream.png'
import Globe from '../assets/globe.svg'
import { ServiceIcons } from '../service-icons'
import styles from './mobile.module.scss'

const InnovationMobile = () => {
  const router = useRouter()
  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <div className={styles.container}>
      <SectionTitle
        text="We Deliver the Best with Innovation, Precision and Excellence"
        markText="Excellence"
        align="left"
        className={styles.title}
      />
      <p className={styles.description}>
        Zenmonk delivers innovative solutions, exceeding expectations in every
        way. Our services reflect our values, combining precision and dedication
        to achieve successful outcomes.
      </p>

      <div className={styles.deliverCard}>
        <Image src={DreamImg} alt="" className={styles.bgImage} />
        <div className={styles.deliverCardContent}>
          <div className={styles.deliverCardIcon}>
            <Globe />
          </div>
          <p className={styles.deliverCardTitle}>We Deliver The Best</p>
          <p className={styles.deliverCardDescription}>
            Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
            has been the industry&apos;s standard dummy
          </p>
          <div className={styles.toolbar} onClick={handleContactClick} style={{ cursor: 'pointer' }}>
            <p className={styles.button}>Contact Us</p>
            <Arrow className={styles.arrow} />
          </div>
        </div>
      </div>
      <div className={styles.serviceCardContainer}>
        {ServiceIcons.map((service) => {
          return (
            <div key={service.title} className={styles.serviceCard}>
              <service.icon className={styles.serviceCardIcon} />
              <p className={styles.serviceCardTitle}>{service.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InnovationMobile
