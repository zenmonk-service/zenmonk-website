'use client'

import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Collapse from '@mui/material/Collapse'
import { techLogos } from '@/assets/icons/business/tech'
import { SectionTitle } from '@/shared/typography'
import { services } from '@/static/services'
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
      {services.map((service, index: number) => {
        const isOpened = openedServices.includes(index)
        return (
          <div
            key={service.id}
            className={styles.card}
            style={{
              backgroundColor: `${isOpened && service.styles.hoverColor}`,
            }}
          >
            <div
              onClick={() => {
                handleClick(index)
              }}
              className={styles.cardContentContainer}
            >
              <p
                style={{ background: countColor(service.styles.color) }}
                className={styles.count}
              >
                {(index + 1).toString().padStart(2, '0')}
              </p>

              <div className={styles.cardContent}>
                <service.icon className={styles.icon} />
                <p className={styles.title}>{service.name}</p>
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
                  {service.services
                    .slice(0, 5)
                    .map(({ icon: Icon, title, id }) => (
                      <div className={styles.techLogos} key={id}>
                        <Icon style={{ fill: '#fff' }} />
                        <p>{title}</p>
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
