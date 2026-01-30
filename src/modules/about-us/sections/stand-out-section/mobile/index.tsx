import { SectionTitle } from '@/shared/typography'
import { standOutList } from '../stand-out'
import styles from './mobile.module.scss'

const StandOutSectionMobile = () => {
  return (
    <div className={styles.container}>
      <SectionTitle
        text="Our Mission"
        markText="Mission"
        align="left"
        className={styles.heading}
      />
      <p className={styles.headerDescription}>
        Providing good quality customer experience and support is as important
        and pivotal as offering top grade product. Providing good quality
        customer experience and support is as important and pivotal as offering
        top grade product.
      </p>

      {standOutList.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.content}>
            <div
              className={styles.icon}
              style={{ padding: `${item.padding}vw` }}
            >
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
