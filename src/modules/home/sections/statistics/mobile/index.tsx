import styles from './mobile.module.scss'

const StatisticsMobile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <p className={styles.title}>
            We are always available, no matter the time zone or your location.
          </p>
          <p className={styles.count}>50+</p>
          <p className={styles.description}>
            Companies team power collaboration with Zenmonk
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.projectCard}>
            <p className={styles.projectCardCount}>65+</p>
            <p className={styles.projectCardDescription}>
              Businesses served by Zenmonk
            </p>
          </div>
          <div className={styles.projectCard}>
            <p className={styles.projectCardCount}>120+</p>
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
