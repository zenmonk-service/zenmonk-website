import { SectionDescription, SectionTitle } from '@/shared/typography'
import AwardProofCard from './award-card'
import { awards } from './awards'
import styles from './award.module.scss'

export const AwardProofSection = () => {
  return (
    <div className={styles.awardProofSection}>
      <SectionTitle
        className={styles.sectionTitle}
        markText="Services"
        text="Awards Proof Your Business With Our IT Services"
      />
      <SectionDescription
        text="We are thrilled to showcase our esteemed awards that we have received
        throughout our business journey."
        className={styles.sectionDescription}
      />
      <div className={styles.awardProofList}>
        {awards.map((award, index) => {
          return (
            <AwardProofCard
              key={index}
              description={award.description}
              image={award.image}
              title={award.title}
            />
          )
        })}
      </div>
    </div>
  )
}
