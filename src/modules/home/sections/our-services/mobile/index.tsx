'use client'

import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Collapse from '@mui/material/Collapse'
import { techLogos } from '@/assets/icons/business/tech'
import { SectionTitle } from '@/shared/typography'
import { serviceList } from '../services'
import styles from './mobile.module.scss'

const OurServicesMobile = () => {
  const [openedServices, setOpenedServices] = useState<number[]>([])

  const handleClick = (index: number) => {
    if (openedServices.includes(index)) {
      return setOpenedServices((prev) => prev.filter((idx) => idx !== index))
    }
    setOpenedServices((prev) => [...prev, index])
  }

  const countColor = (color: string) => {
    return `linear-gradient(180deg, ${color} -64.31%, #FFF 99.87%)`
  }

  const text = 'Solutions Designed For Your Success'
  return (
    <div className={styles.container}>
      <SectionTitle
        text={text}
        markText="Success"
        className={styles.heading}
        markTextProps={{ rotate: 1.8 }}
      />
      {serviceList.map((service, index: number) => {
        const isOpened = openedServices.includes(index)
        return (
          <div
            key={service.id}
            className={styles.card}
            style={{
              backgroundColor: `${isOpened && service.hoverColor}`,
            }}
          >
            <div
              onClick={() => {
                handleClick(index)
              }}
              className={styles.cardContentContainer}
            >
              <p
                style={{ background: countColor(service.color) }}
                className={styles.count}
              >
                {service.id}
              </p>

              <div className={styles.cardContent}>
                <service.Icon className={styles.icon} />
                <p className={styles.title}>{service.title}</p>
              </div>

              <div className={styles.arrowIcon}>
                <KeyboardArrowDownIcon fontSize="large" />
              </div>
            </div>

            <div>
              <Collapse in={isOpened} timeout="auto" unmountOnExit>
                <div>
                  <p className={styles.description}>{service.description}</p>
                </div>
                <div className={styles.techLogosContainer}>
                  {techLogos.map(({ SrcMobile, name }) => (
                    <div className={styles.techLogos} key={name}>
                      <SrcMobile />
                      <p>{name}</p>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default OurServicesMobile
