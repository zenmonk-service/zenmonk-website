import { techSolution } from '@/assets/icons/it-solution'
import BaseButton from '@/shared/button'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import TechSolutionMobileImage from '../assets/tech-solution.svg'
import styles from './mobile.module.scss'

const TechSolutionMobile = () => {
  return (
    <div className={styles.container}>
      <SectionTitle
        text="Our expertise lies in crafting business solutions"
        markText="solutions"
        align="center"
      />
      <SectionDescription
        className={styles.description}
        text="Welcome to Zenmonk, where Software Innovation meets professionalism
        and solution oriented mindset. We are fluent in your language,
        proficient in technical terminology, and validate our new-age
        expertise with custom solutions"
      />
      <div className={styles.imageContainer}>
        <TechSolutionMobileImage />
      </div>
      <div className={styles.cardContainer}>
        {techSolution.map(({ Icon, name }) => {
          return (
            <div className={styles.card} key={name}>
              <Icon />
              <p className={styles.cardTitle}>{name}</p>
            </div>
          )
        })}
      </div>
      <BaseButton className={styles.button}>EXPLORE SERVICES</BaseButton>
    </div>
  )
}

export default TechSolutionMobile
