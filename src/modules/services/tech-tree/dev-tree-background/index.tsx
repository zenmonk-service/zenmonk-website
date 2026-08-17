import Gear from './assets/gear.svg'
import DottedCircle from './assets/dotted-circle.svg'
import styles from './dev-tech-tree-background.module.scss'

const DevTechTreeBackground = () => {
  return (
    <div className={styles.devTechTreeBackground} aria-hidden="true">
      <Gear className={`${styles.layer} ${styles.gearLarge}`} />
      <Gear className={`${styles.layer} ${styles.gearSmall}`} />
      <DottedCircle
        className={`${styles.layer} ${styles.dottedCircleBottomLeft}`}
      />
      <DottedCircle
        className={`${styles.layer} ${styles.dottedCircleTopCenter}`}
      />
      <DottedCircle
        className={`${styles.layer} ${styles.dottedCircleTopLeft}`}
      />
      <DottedCircle
        className={`${styles.layer} ${styles.dottedCircleTopRight}`}
      />
      <DottedCircle
        className={`${styles.layer} ${styles.dottedCircleBottomRight}`}
      />
    </div>
  )
}

export default DevTechTreeBackground
