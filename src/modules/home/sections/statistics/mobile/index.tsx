import styles from './mobile.module.scss'
import { COMPANY_COUNT, BUSINESS_COUNT, PROJECT_COUNT } from '@/shared/data/site-data'

const StatisticsMobile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <p className={styles.title}>
            We are always available, no matter the time zone or your location.
          </p>
          <p className={styles.count}>{COMPANY_COUNT}+</p>
          <p className={styles.description}>
            Companies team power collaboration with Zenmonk
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.projectCard}>
            <p className={styles.projectCardCount}>{BUSINESS_COUNT}+</p>
            <p className={styles.projectCardDescription}>
              Businesses served by Zenmonk
            </p>
          </div>
          <div className={styles.projectCard}>
            <p className={styles.projectCardCount}>{PROJECT_COUNT}+</p>
            <p className={styles.projectCardDescription}>
              Projects delivered by Zenmonk
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticsMobile
