import { SectionTitle } from '@/shared/typography'
import { projects } from '../projects'
import styles from './mobile.module.scss'

const OurProjectsMobile = () => {
  return (
    <div className={styles.container}>
      <SectionTitle
        className={styles.title}
        text="Our latest project's resounding success"
        markText="success"
      />
      <div className={styles.cardContainer}>
        {projects.map((project) => {
          return (
            <div className={styles.card} key={project.title}>
              <div
                className={styles.imageContainer}
                style={{
                  backgroundImage: `url(/our-work/0${project.index}.webp)`,
                }}
              >
                <div className={styles.overlay} style={{ zIndex: 1 }} />
                <p className={styles.count}>0{project.index}</p>
              </div>
              <div className={styles.cardTitle}>{project.title}</div>
              <div className={styles.cardDescription}>
                {project.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurProjectsMobile
