'use client'

import { useMediaQuery } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import styles from './business-sectors.module.scss'
import SectorsListDesktop from './desktop'
import SectorsMobile from './mobile'

const BusinessSectors = () => {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <div className={styles.businessSectorContainer}>
      <div className={styles.businessSectorTitleWrapper}>
        <SectionTitle
          className={styles.businessSectorTitle}
          text="Empowering Businesses Across Multiple Sectors"
          markText="Sectors"
        />
      </div>
      <SectionDescription
        className={styles.businessSectorDescription}
        text=" We deliver innovative software solutions across industries, empowering
        businesses to overcome challenges, drive growth, and achieve success"
      />
      {isMobile ? <SectorsMobile /> : <SectorsListDesktop />}
    </div>
  )
}

export default BusinessSectors
