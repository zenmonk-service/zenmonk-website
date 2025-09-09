'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { techLogos } from '@/assets/icons/business/tech'
import { ZenmonkLogo } from '@/assets/images'
import BaseButton from '@/shared/button'
import { SectionTitle } from '@/shared/typography'
import { serviceList } from '../services'
import './styles.scss'

const OurServicesDesktop = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const rightSectionHeadingRef = useRef<HTMLDivElement | null>(null)

  const selectItem = (index: number) => {
    setSelectedIndex(index)
  }

  const text = 'Solutions Designed For Your Success'

  return (
    <section ref={rightSectionHeadingRef} className="service-section-wrapper">
      <SectionTitle
        text={text}
        markText="Your Success"
        markTextProps={{ rotate: 1.8 }}
      />
      <Box className="services-section desktop">
        <Box className="services-left-container">
          {serviceList.map((service, index) => (
            <Box
              className="business-item"
              onClick={() => selectItem(index)}
              sx={{
                '&:hover': {
                  backgroundColor: `${service.hoverColor} !important`,
                  transform: 'translateY(-4px)',
                },
              }}
              key={service.id}
            >
              <Box className="business-item-content">
                <service.Icon className="business-icon" />
                <Typography
                  component="h4"
                  variant="h4"
                  className="business-title"
                >
                  {service.title}
                </Typography>
              </Box>
              <Typography
                component="h5"
                variant="h5"
                className="business-count-text"
                sx={{
                  background: `linear-gradient(180deg, ${service.color} -64.31%, #FFF 99.87%)`,
                }}
              >
                {service.id}
              </Typography>
            </Box>
          ))}
        </Box>
        <div className="services-right-container">
          <Image className="logo" src={ZenmonkLogo} alt="zenmonk-logo" />
          <Box className="business-proof">
            <Box className="business-proof-content">
              <Typography
                component="h5"
                variant="h5"
                className="business-proof-heading"
              >
                {serviceList[selectedIndex].title}
              </Typography>
              <Typography component="p" className="business-proof-description">
                {serviceList[selectedIndex].description}
              </Typography>
              <Box className="business-proof-technologies">
                {techLogos.map(({ Src }) => {
                  return <Src key={Src} />
                })}
              </Box>
              <BaseButton disableShine className="button">
                Get Started
              </BaseButton>
            </Box>
          </Box>
        </div>
      </Box>
    </section>
  )
}

export default OurServicesDesktop
