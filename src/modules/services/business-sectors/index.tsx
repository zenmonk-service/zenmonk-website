'use client'

import { useMediaQuery } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import styles from './business-sectors.module.scss'
import SectorsListDesktop from './desktop'
import SectorsMobile from './mobile'
import { useEffect, useState } from 'react'

const BusinessSectors = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleUpdate = () => {
      const width = window.innerWidth
      const newScale = Math.min(Math.max(width / 1920, 0.5), 1)
      setScale(newScale)
    }
    window.addEventListener('resize', handleUpdate)
    handleUpdate()
    return () => {
      window.removeEventListener('resize', handleUpdate)
    }
  }, [])

  console.log(scale)
  return (
    <div
      className={styles.businessSectorContainer}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        transition: 'transform 0.1s ease-out'
      }}
    >
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
