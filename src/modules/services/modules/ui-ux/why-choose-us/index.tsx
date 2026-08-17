'use client'

import { useInView } from 'react-intersection-observer'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import Bg from './assets/bg.svg'
import Card from './card'
import { whyChooseUsList } from './list'
import styles from './styles.module.scss'

/**
 * Final grid positions for 6 cards (3 per row, 2 rows).
 * Values are the X/Y offset (in %) from the container center
 * that each card needs to travel TO when the animation fires.
 * Before animation they all sit at translate(0,0) = stacked in center.
 *
 * Row 1: cards 0,1,2  → top-left, top-center, top-right
 * Row 2: cards 3,4,5  → bottom-left, bottom-center, bottom-right
 */
const CARD_OFFSETS = [
  { tx: '-105%', ty: '-60%' }, // top-left
  { tx: '0%',   ty: '-60%' }, // top-center
  { tx: '105%', ty: '-60%' }, // top-right
  { tx: '-105%', ty: '60%'  }, // bottom-left
  { tx: '0%',   ty: '60%'  }, // bottom-center
  { tx: '105%', ty: '60%'  }, // bottom-right
]

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

      {/* Deck container — cards are absolutely stacked here before inView */}
      <div
        ref={ref}
        className={`${styles.listContainer} ${inView ? styles.scattered : ''}`}
      >
        {whyChooseUsList.map((item, index) => {
          const offset = CARD_OFFSETS[index] ?? { tx: '0%', ty: '0%' }
          return (
            <Card
              icon={item.icon}
              key={item.name}
              name={item.name}
              description={item.description}
              background={item.backgroud}
              marginLeft={item.ml}
              style={{
                '--tx': offset.tx,
                '--ty': offset.ty,
                '--delay': `${index * 0.18}s`,
              } as React.CSSProperties}
            />
          )
        })}
      </div>
    </div>
  )
}

export default UiUxWhyChooseUs
