'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Box } from '@mui/material'
import {
  ProductDevelopmentHeroSection,
  SoftwareDevelopmentHeroSection,
} from '@/modules/services/modules'
import { ItTrainingHeroSection } from '@/modules/services/modules/it-training/hero-section'
import { MobileAppDevelopment } from '@/modules/services/modules/mobile-app-development/hero-section'

const layout = ({ children }: { children: React.ReactNode }) => {
  const HERO_SECTIONS: Record<string, React.FC> = {
    'software-development': SoftwareDevelopmentHeroSection,
    'product-development': ProductDevelopmentHeroSection,
    'it-training-&-workshops': ItTrainingHeroSection,
    'mobile-app-development':MobileAppDevelopment
  }
  const pathname = usePathname()
  const serviceKeys = pathname
    .split('/')
    .filter((segment) => HERO_SECTIONS[segment])
  return (
    <div>
      {serviceKeys.map((key) => {
        const HeroComponent = HERO_SECTIONS[key]
        return HeroComponent ? <HeroComponent key={key} /> : null
      })}
      {children}
    </div>
  )
}

export default layout
