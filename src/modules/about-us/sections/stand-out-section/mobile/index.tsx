import Image from 'next/image'
import { standOutList } from '../stand-out'
import styles from './mobile.module.scss'

const StandOutSectionMobile = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Stand Out From The <span>Rest</span>
      </h2>

      {standOutList.map((item, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            className={styles.bgImage}
            quality={90}
            priority={index === 0}
          />
          <div className={styles.overlay} />

          <div className={styles.content}>
            <div className={styles.icon}>
              <item.icon />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>

            {item.coreValues && (
              <div className={styles.valuesGrid}>
                {item.coreValues.map((val, idx) => (
                  <span key={idx} className={styles.valueTag}>
                    {val.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default StandOutSectionMobile
