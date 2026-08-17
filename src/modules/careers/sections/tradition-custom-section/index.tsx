'use client'

import {
  bgImage as BackgroundImage,
  bgMobileImage as BackgroundImageMobile,
} from './assets'
import TraditionCustomCard from './card/tradition-card'
import styles from './tradition-custom.module.scss'
import { traditionsCustoms } from './tradition-customs'

const TraditionsCustoms = () => {
  return (
    <div className={styles.traditionsCustomsSection}>
      <BackgroundImage className={styles.bgImage} />
      <BackgroundImageMobile className={styles.bgImageMobile} />

      <div className={styles.container}>
        <div className={styles.titleDescriptionWrapper}>
          <h1 className={styles.title}>Experiencing Traditions and Customs</h1>
          <p className={styles.description}>
            Discover rich cultural heritage passed down through
            generations—timeless rituals that shape identity and community.
          </p>
        </div>

        <div className={styles.list}>
          {traditionsCustoms.map((tradition, index) => (
            <TraditionCustomCard
              key={index}
              index={index}
              Icon={tradition.image}
              title={tradition.title}
              description={tradition.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TraditionsCustoms
