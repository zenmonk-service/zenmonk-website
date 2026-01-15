import { SectionDescription, SectionTitle } from '@/shared/typography'
import Bg from './assets/bg.svg'
import Card from './card'
import { whyChooseUsList } from './list'
import styles from './styles.module.scss'

const UiUxWhyChooseUs = () => (
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
    <Bg className={styles.sectionBachground}/>
    <div className={styles.listContainer}>
      {whyChooseUsList.map((item) => {
        return (
          <Card
            icon={item.icon}
            key={item.name}
            name={item.name}
            description={item.description}
            background={item.backgroud}
            marginLeft={item.ml}
          />
        )
      })}
    </div>
  </div>
)

export default UiUxWhyChooseUs
