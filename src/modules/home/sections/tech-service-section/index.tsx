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

const ServiceSection = () => {
  const [heading, setHeading] = useState(serviceList[0].title)
  const [description, setDescription] = useState(serviceList[0].description)
  const [businessItemRefPosition, setbusinessItemRefPosition] = useState<
    number | null
  >(null)
  const [rightSectionHeadingRefPosition, setRightSectionHeadingRefPosition] =
    useState<number | null>(null)

  const [isOverlapped, setIsOverlapped] = useState<boolean>(false)
  const businessItemRef = useRef<(HTMLDivElement | null)[]>([])
  const rightSectionHeadingRef = useRef<HTMLDivElement | null>(null)

  const updatePosition = () => {
    if (businessItemRef.current[0]) {
      const rect = businessItemRef.current[0]?.getBoundingClientRect()
      setbusinessItemRefPosition(rect?.top)
    }

    if (rightSectionHeadingRef.current) {
      const rect = rightSectionHeadingRef.current.getBoundingClientRect()
      setRightSectionHeadingRefPosition(rect.top)
    }
  }

  useEffect(() => {
    if (businessItemRefPosition && rightSectionHeadingRefPosition) {
      if (businessItemRefPosition < rightSectionHeadingRefPosition) {
        setIsOverlapped(true)
      } else {
        setIsOverlapped(false)
      }
    }
  }, [businessItemRefPosition, rightSectionHeadingRefPosition])

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

  console.log('businessItemRef', businessItemRef)

  const text = 'Future Proof Your Business With Our IT Services'

  return (
    <Box mt={15}>
      <Box className="services-section">
        <Box className="services-left-container">
          {serviceList.map((item: Service, index: number) => (
            <Box
              ref={(el: any) => (businessItemRef.current[index] = el)}
              className={`business-item`}
              onClick={() => selectItem(item)}
              sx={{
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
              key={item.id}
            >
              <Box className="business-item-content">
                <Box className="business-icon">
                <Image src={item.icon as any} alt={item.title} />
                </Box>
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
        <Box ref={rightSectionHeadingRef} className="services-right-container">
          <div
            className={`fade-transition ${isOverlapped ? 'fade-transition-hidden' : ''}`}
          >
            <Title text={text} align="center" />
          </div>
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
                {techLogos.map((logo, index) => {
                  return (
                    <Box key={index}>
                      {logo.src && (
                        <Image key={logo.name} src={logo.src} alt={logo.name} />
                      )}
                    </Box>
                  )
                })}
              </Box>
              <BaseButton
                sx={{
                  maxWidth: '158px',
                  color: 'var(--foreground) !important',
                  textTransform: 'uppercase !important',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%)',
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
