import { developmentProcessSteps } from '../development-steps'
import styles from './milestone.module.scss'

const Milestone = () => {
  return (
    <div className={styles.milestoneContainer}>
      <div className={styles.milestoneBaseLine}>
        {developmentProcessSteps.map((step, idx) => {
          const isEven = idx % 2 === 0
          const position = isEven ? 'bottom' : 'top'
          const slideLeft = idx !== 0
          return (
            <step.Icon
              className={styles.milestoneBackground}
              style={{
                [position]: '1.6vw',
                marginLeft: `${(slideLeft ? idx * 10.5 : 0) + 2.08}vw`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Milestone
