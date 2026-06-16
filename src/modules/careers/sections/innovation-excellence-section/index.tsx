'use client'

import { useInView } from 'react-intersection-observer'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { Excellence } from './assets'
import ExcellenceCard from './card/excellence'
import { innovations } from './innovations'
import styles from './innovation.module.scss'

const InnovationExcellence = () => {
  const { ref: sectionRef, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.2 
  });

  return (
    <section ref={sectionRef} className={`${styles.section} ${inView ? styles.inView : ''}`}>
      <div className={styles.leftSection}>
        <SectionTitle
          align="left"
          text="Our Promise of Innovation and Excellence"
          markText="Excellence"
          className={styles.title}
        />

        <SectionDescription
          text="We are dedicated to fostering a supportive environment, offering
          growth opportunities, and ensuring our team feel valued and
          appreciated."
          className={styles.description}
        />

        <Excellence className={styles.excellenceImage} />
      </div>

      <div className={styles.rightSection}>
        {innovations.map((innovation, index) => (
          <div 
            key={index} 
            className={styles.cardWrapper} 
            style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
          >
            <ExcellenceCard details={innovation} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default InnovationExcellence
