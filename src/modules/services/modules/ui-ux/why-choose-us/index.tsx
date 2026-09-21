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
        text="We don't just create attractive interfaces—we design experiences that solve real problems, support business goals, and make every interaction meaningful."
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
