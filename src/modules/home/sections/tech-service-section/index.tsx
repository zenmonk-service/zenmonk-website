'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { techLogos } from '@/assets/icons/business/tech'
import { ZenmonkLogo } from '@/assets/images'
import BaseButton from '@/shared/button'
import { SectionTitle } from '@/shared/typography'
import MobileService from './mobile-service'
import { serviceList, Service } from './service-list'
import './styles.scss'

const ServiceSection = () => {
  const [heading, setHeading] = useState(serviceList[0].title)
  const [description, setDescription] = useState(serviceList[0].description)

  const rightSectionHeadingRef = useRef<HTMLDivElement | null>(null)

  const selectItem = (Business: Service) => {
    setHeading(Business.title)
    setDescription(Business.description)
  }

  const text = 'Solutions Designed For Your Success'

  return (
    <section ref={rightSectionHeadingRef} className="service-section-wrapper">
      <SectionTitle
        text={text}
        markText="Your Success"
        markTextProps={{ rotate: 1.8 }}
      />
      <div className="services-section desktop">
        <div className="services-left-container">
          {serviceList.map((item: Service) => (
            <div
              className={`business-item`}
              onClick={() => selectItem(item)}
              style={{
                '&:hover': {
                  backgroundColor: `${item.hoverColor} !important`,
                  transform: 'translateY(-4px)',
                },
              }}
              key={item.id}
            >
              <div className="business-item-content">
                <item.Icon className="business-icon" />
                <Typography
                  component="h4"
                  variant="h4"
                  className="business-title"
                >
                  {item.title}
                </Typography>
              </div>
              <Typography
                component="h5"
                variant="h5"
                className="business-count-text"
                sx={{
                  background: `linear-gradient(180deg, ${item.color} -64.31%, #FFF 99.87%)`,
                }}
              >
                {item.id}
              </Typography>
            </div>
          ))}
        </div>
        <div className="services-right-container">
          <Image className="logo" src={ZenmonkLogo} alt="zenmonk-logo" />
          <div className="business-proof">
            <div className="business-proof-content">
              <Typography
                component="h5"
                variant="h5"
                className="business-proof-heading"
              >
                {heading}
              </Typography>
              <Typography component="p" className="business-proof-description">
                {description}
              </Typography>
              <div className="business-proof-technologies">
                {techLogos.map(({ Src }) => {
                  return <Src key={Src} />
                })}
              </div>
              <BaseButton disableShine className="button">
                Get Started
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
      {/* <MobileService /> */}
    </section>
  )
}

export { ServiceSection }
