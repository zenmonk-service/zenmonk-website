import Milestone from './milestone'
import styles from './style.module.scss'

const SoftwareDevelopmentProcess = () => {
  return (
    <div className={styles.softwareDevelopmentContainer}>
      <p className={styles.subtitle}>
        Collaborative approach to building scalable, high-quality software solutions
        tailored to your unique business needs and strategic objectives.
      </p>
      <Milestone />
    </div>
  )
}

export default SoftwareDevelopmentProcess
