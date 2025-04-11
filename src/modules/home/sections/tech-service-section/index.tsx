'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { techLogos } from '@/assets/icons/business/tech'
import { ZenmonkLogo } from '@/assets/images'
import BaseButton from '@/shared/button'
import Title from '@/shared/title'
import { serviceList, Service } from './service-list'
import './styles.scss'
import { SectionTitle } from '@/shared/typography'

const ServiceSection = () => {
  const [heading, setHeading] = useState(serviceList[0].title)
  const [description, setDescription] = useState(serviceList[0].description)

  const [rightSectionHeadingRefPosition, setRightSectionHeadingRefPosition] =
    useState<number | null>(null)

  const [isOverlapped, setIsOverlapped] = useState<boolean>(false)
  const rightSectionHeadingRef = useRef<HTMLDivElement | null>(null)

  const updatePosition = () => {
    if (rightSectionHeadingRef.current) {
      const rect = rightSectionHeadingRef.current.getBoundingClientRect()
      setRightSectionHeadingRefPosition(rect.top)
    }
  }

  useEffect(() => {
    if (rightSectionHeadingRefPosition)
      if (rightSectionHeadingRefPosition < 120) {
        setIsOverlapped(true)
      } else {
        setIsOverlapped(false)
      }
  }, [rightSectionHeadingRefPosition])

  useEffect(() => {
    updatePosition()
    window.addEventListener('scroll', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition)
    }
  }, [])

  const selectItem = (Business: Service) => {
    setHeading(Business.title)
    setDescription(Business.description)
  }

  const text = 'Future Proof Your Business With Our IT Services'

  return (
    <Box ref={rightSectionHeadingRef} mt={15}>
      <div
        className={`fade-transition ${isOverlapped ? 'fade-transition-hidden' : ''}`}
      >
        <SectionTitle text={text} markText='services' />
      </div>
      <Box className="services-section">
        <Box className="services-left-container">
          {serviceList.map((item: Service) => (
            <Box
              className={`business-item`}
              onClick={() => selectItem(item)}
              sx={{
                '&:hover': {
                  backgroundColor:`${item.hoverColor} !important`,
                  transform: 'translateY(-4px)',
                },
              }}
              key={item.id}
            >
              <Box className="business-item-content">
                {/* <Box className="business-icon"> */}
                  <item.Icon className="business-icon" />
                {/* </Box> */}
                <Typography
                  component="h4"
                  variant="h4"
                  className="business-title"
                >
                  {item.title}
                </Typography>
              </Box>
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
            </Box>
          ))}
        </Box>
        <Box className="services-right-container">
          {ZenmonkLogo && (
            <Image className="logo" src={ZenmonkLogo} alt="zenmonk-logo" />
          )}
          <Box className="business-proof">
            <Box className="business-proof-content">
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
              <Box className="business-proof-technologies">
                {techLogos.map((Src : any, index) => {
                  return (
                    <Box key={index}>    
                        {/* <Src/> */}
                    </Box>
                  )
                })}
              </Box>
              <BaseButton
                sx={{
                  color: 'var(--global-color-secondary) !important',
                  textTransform: 'uppercase !important',
                  boxShadow: '0px 0.2vw 0.2vw 0px rgba(0, 0, 0, 0.25)',
                  background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%)',
                  fontFamily: 'Poppins',
                }}
              >
                Get Started
              </BaseButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export { ServiceSection }
