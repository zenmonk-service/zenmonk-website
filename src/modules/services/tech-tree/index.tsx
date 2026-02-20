'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import SectionImage from './image'
import { getTreeIconsByServiceId } from './service-mapper'
import styles from './tech-tree.module.scss'

interface TechnologyTreeProps {
  serviceId: string
}

const TechnologyTree = ({ serviceId }: TechnologyTreeProps) => {
  const isMobile = useMediaQuery('(max-width:700px)')
  const { treeIcons, background: BackgroundComponent } = getTreeIconsByServiceId(serviceId)

  return (
    <div className={styles.techTreeContainer}>
      <div className={styles.techTreeBackground}>
        <BackgroundComponent />
      </div>
      <div className={styles.techTreeRight}>
        <div className={styles.techTreeLeft}>
          <SectionTitle
            text="Zen Tech Wonders We Excel In"
            markText="Excel In"
            align={isMobile ? 'center' : 'left'}
            className={styles.techTreeHeading}
          />

          <SectionDescription
            className={styles.techTreeDescription}
            text="We lead the way in technological 
            innovation, consistently delivering solutions 
            that transform industries. Our commitment to 
            excellence helps businesses and individuals achieve 
            more."
          />
        </div>
        <div className={styles.sectionImageWrap}>
          <div className={styles.sectionImageBackground}>
            <BackgroundComponent />
          </div>
          <div className={styles.sectionImageContent}>
            <SectionImage data={treeIcons} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyTree
