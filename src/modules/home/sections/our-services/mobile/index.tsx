'use client'

import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Collapse from '@mui/material/Collapse'
import { SectionTitle } from '@/shared/typography'
import { services } from '@/static/services'
import styles from './mobile.module.scss'

const OurServicesMobile = () => {
  const [openedService, setOpenedService] = useState<number | null>(null)

  const handleClick = (index: number) => {
    if (openedService === index) {
      return setOpenedService(null)
    }
    setOpenedService(index)
  }

  const countColor = (color: string) => {
    return `linear-gradient(180deg, ${color} -64.31%, #FFF 99.87%)`
  }

  const text = 'Future Proof Your Business With Our IT Services'
  return (
    <div className={styles.container}>
      <SectionTitle
        text={text}
        markText="IT Services"
        className={styles.heading}
        markTextProps={{ rotate: 1.8 }}
      />
      {services.map((service, index: number) => {
        const isOpened = openedService === index
        return (
          <div
            key={service.id}
            className={styles.card}
            style={{
              backgroundColor: isOpened ? service.styles.hoverColor : '#fff',
              transition: 'background-color 0.3s ease',
            }}
          >
            <div
              onClick={() => {
                handleClick(index)
              }}
              className={styles.cardContentContainer}
            >
              <p
                style={{
                  background: countColor(service.styles.color),
                  marginRight: index === 9 ? '0vw' : '4.25vw',
                  marginLeft: index === 9 ? '3vw' : '0vw',
                  scale: index === 9 ? '1.1' : '1',
                }}
                className={styles.count}
              >
                {(index + 1).toString().padStart(2, '0')}
              </p>

              <div className={styles.cardContent}>
                <service.icon
                  className={styles.icon}
                  style={{ fill: service.styles.color }}
                />
                <p className={styles.title}>{service.name}</p>
              </div>

              <div className={`${styles.arrowIcon} ${isOpened ? styles.open : ''}`}>
                <KeyboardArrowDownIcon fontSize="large" />
              </div>
            </div>

            <div>
              <Collapse in={isOpened} timeout="auto" unmountOnExit>
                <div>
                  <p
                    className={styles.expandedTitle}
                    style={{ color: service.styles.color }}
                  >
                    {service.name}
                  </p>
                  <p className={styles.description}>{service.description}</p>
                </div>
                <div className={styles.techLogosContainer}>
                  {service.services
                    .slice(0, 5)
                    .map(({ icon: Icon, title, id }) => (
                      <div className={styles.techLogos} key={id}>
                        <Icon style={{ fill: service.styles.color, transform: 'scale(0.7)' }} />
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
