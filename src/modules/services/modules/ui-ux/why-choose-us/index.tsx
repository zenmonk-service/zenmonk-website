'use client'

import { useInView } from 'react-intersection-observer'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import Bg from './assets/bg.svg'
import Card from './card'
import { whyChooseUsList } from './list'
import styles from './styles.module.scss'

const UiUxWhyChooseUs = () => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true })

  return (
    <div className={styles.whyChooseUs}>
      <SectionTitle
        align="center"
        className={styles.title}
        markText='Us'
        text="Why Choose Us"
      />
      <SectionDescription
        className={styles.description}
        text="Our design solutions blend user-centric principles with business outcomes.
        We create intuitive, scalable interfaces that drive long-term engagement."
      />
      <Bg className={styles.sectionBachground} />

      <div
        ref={ref}
        className={`${styles.listContainer} ${inView ? styles.scattered : ''}`}
      >
        {whyChooseUsList.map((item, index) => {
          return (
            <Card
              icon={item.icon}
              key={item.name}
              name={item.name}
              description={item.description}
              background={item.backgroud}
              marginLeft={item.ml}
              style={{
                '--delay': `${index * 0.25}s`,
              } as React.CSSProperties}
            />
          )
        })}
      </div>
    </div>
  )
}

export default UiUxWhyChooseUs
