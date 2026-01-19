import { SectionDescription, SectionTitle } from '@/shared/typography'
import { Excellence } from './assets'
import ExcellenceCard from './card/excellence'
import { innovations } from './innovations'
import styles from './innovation.module.scss'

const InnovationExcellence = () => {
  return (
    <section className={styles.section}>
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
          <ExcellenceCard key={index} details={innovation} />
        ))}
      </div>
    </section>
  )
}

export default InnovationExcellence
