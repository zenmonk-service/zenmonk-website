'use client'

import React, { Suspense, lazy, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import './styles.scss'
import { AiBasedSoftwares, CloudComputing, GrowthMarketing, IndustrySpecific, ItBusinessConsultation, ItTrainingHeroSection, MobileAppDevelopment, ProductDevelopment, SoftwareDevelopment, UiUx } from '@/modules/services/modules'

const DefaultHeroSection = () => <div className="default-hero-section"></div>

const HERO_SECTIONS: Record<string, any> = {
  'software-development': SoftwareDevelopment,
  'product-development': ProductDevelopment,
  'it-training-&-workshops': ItTrainingHeroSection,
  'mobile-app-development': MobileAppDevelopment,
  'cloud-development': CloudComputing,
  'it-&-business-consultation': ItBusinessConsultation,
  'growth-&-marketing': GrowthMarketing,
  'ai-based-softwares':AiBasedSoftwares,
  'industry-specific-solutions': IndustrySpecific,
  'ui-ux-design': UiUx,
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const serviceKeys = pathname
    .split('/')
    .filter((segment) => HERO_SECTIONS[segment])
  const heroSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroSectionRef.current) {
      heroSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [pathname])

  return (
    <div>
      <div ref={heroSectionRef}>
        {serviceKeys.length > 0 ? (
          serviceKeys.map((key) => {
            const HeroComponent = HERO_SECTIONS[key]
            return HeroComponent ? <HeroComponent key={key} /> : null
          })
        ) : (
          <DefaultHeroSection />
        )}
      </div>
      {children}
    </div>
  )
}

export default Layout
