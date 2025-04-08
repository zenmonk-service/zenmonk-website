'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Box, useMediaQuery } from '@mui/material'
import {
  CraftAndCollab,
  Deadline,
  Support,
  LatestTech,
  ThumsUp,
} from '@/assets/icons/why-choose-us'
import { ZenmonkLogoV2, ZenmonkLogoV3 } from '@/assets/images'
import LOGO from './assets/logo-benzene.png'

import Title from '@/shared/title'
import './styles.scss'

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const clientSatisficationRef = useRef<HTMLDivElement>(null)
  const isSmallLaptop = useMediaQuery('(min-width: 1350px)')

  console.log("isSmallLaptop" , isSmallLaptop)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (clientSatisficationRef.current) {
      observer.observe(clientSatisficationRef.current)
    }

    return () => {
      if (clientSatisficationRef.current) {
        observer.unobserve(clientSatisficationRef.current)
      }
    }
  }, [])

  return (
    <Box className="why-choose-us-section">
      <Title text="Elevate your tech journey with Zenmonk" className="title" />
      {ZenmonkLogoV2 && (
        <Image src={LOGO} alt="logo" className="logo left-logo" />
      )}
      {ZenmonkLogoV3 && (
        <Image src={LOGO} alt="logo" className="logo right-logo" />
      )}

      <Box ref={clientSatisficationRef} className="why-choose-us">
        <Box className="content">
          <Box className={`thumsup ${isVisible && 'animate_scale'}`}>
            <ThumsUp />
          </Box>
          <Box className="children">
            <Box
              className={`first ${isVisible && (isSmallLaptop ? 'animate_comeFromLeft' : 'animate_comeFromLeftS')}`}
            >
              <CraftAndCollab />
            </Box>

            <Box
              className={`second ${isVisible && (isSmallLaptop ? 'animate_comeFromRight' : 'animate_comeFromRightS')}`}
            >
              <Support />
            </Box>

            <Box
              className={`third ${isVisible && (isSmallLaptop ? 'animate_comeFromLeft' : 'animate_comeFromLeftS')}`}
            >
              <Deadline />
            </Box>

            <Box
              className={`fourth ${isVisible && (isSmallLaptop ? 'animate_comeFromRight2' : 'animate_comeFromRight2S')}`}
            >
              <LatestTech />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export { WhyChooseUsSection }
