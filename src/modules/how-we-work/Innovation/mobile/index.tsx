import { SectionTitle } from '@/shared/typography'
import Arrow from '../assets/arrow.svg'
import Globe from '../assets/globe.svg'
import { ServiceIcons } from '../service-icons'
import styles from './mobile.module.scss'

const InnovationMobile = () => {
  return (
    <div className={styles.container}>
      <SectionTitle
        text="We Deliver the Best with Innovation, Precision, and Excellence"
        markText="Excellence"
        align="left"
        className={styles.title}
      />
      <p className={styles.description}>
        State burst think end are its. Arrived off she elderly beloved him affix
        ed noisier yet. Course regard to up he hardly elder noisier.
      </p>
      <div className={styles.deliverCard}>
        <div className={styles.deliverCardIcon}>
          <Globe />
        </div>
        <p className={styles.deliverCardTitle}>We Deliver The Best</p>
        <p className={styles.deliverCardDescription}>
          Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
          has been the industry's standard dummy
        </p>

        <div className={styles.toolbar}>
          <p className={styles.button}>Explore More</p> <Arrow />
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
