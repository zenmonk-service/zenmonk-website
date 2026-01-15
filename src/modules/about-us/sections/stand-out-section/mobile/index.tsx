import { standOutList } from '../stand-out'
import styles from './mobile.module.scss'

const StandOutSectionMobile = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Our <span>Mission</span>
      </h2>
      <p className={styles.headerDescription}>
        Providing good quality customer experience and support is as important and pivotal as offering top grade product. Providing good quality customer experience and support is as important and pivotal as offering top grade product.
      </p>

      {standOutList.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <item.icon />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StandOutSectionMobile
