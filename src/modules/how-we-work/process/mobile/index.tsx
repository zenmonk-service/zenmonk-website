import { SectionTitle } from '@/shared/typography'
import { processes } from '../process'
import styles from './mobile.module.scss'

const ProcessMobile = () => {
  return (
    <div className={styles.container}>
      <SectionTitle className={styles.title} text="Here's" />
      <SectionTitle text="How We Work" className={styles.highlighted} />
      <SectionTitle className={styles.title} text="PROCESS" />
      <div className={styles.processList}>
        {processes.map((process) => {
          return (
            <div key={process.title} className={styles.processItem}>
              <div className={styles.processItemIcon}>
                <div className={styles.circle}>
                  <process.Icon />
                </div>
              </div>
              <div className={styles.processItemContent}>
                <div className={styles.processItemTitle}>{process.title}</div>
                <div className={styles.processItemDescription}>
                  {process.description}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProcessMobile
