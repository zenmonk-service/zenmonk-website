'use client'

import React, { Suspense, lazy, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import "./styles.scss"

const DefaultHeroSection = () => (
  <div className='default-hero-section'>
    <h2>Welcome to Our Services</h2>
  </div>
)

const HERO_SECTIONS: Record<string, React.LazyExoticComponent<React.FC>> = {
  'software-development': lazy(() => import('@/modules/services/modules').then(m => ({ default: m.SoftwareDevelopment }))),
  'product-development': lazy(() => import('@/modules/services/modules').then(m => ({ default: m.ProductDevelopment }))),
  'it-training-&-workshops': lazy(() => import('@/modules/services/modules').then(m => ({ default: m.ItTrainingHeroSection }))),
  'mobile-app-development': lazy(() => import('@/modules/services/modules').then(m => ({ default: m.MobileAppDevelopment }))),
  'cloud-development': lazy(() => import('@/modules/services/modules').then(m => ({ default: m.CloudComputing }))),
  'it-&-business-consultation': lazy(() => import('@/modules/services/modules').then(m => ({ default: m.ItBusinessConsultation }))),
  'growth-&-marketing': lazy(() => import('@/modules/services/modules').then(m => ({ default: m.GrowthMarketing }))),
  'ai-based-softwares': lazy(() => import('@/modules/services/modules').then(m => ({ default: m.AiBasedSoftwares }))),
  'industry-specific-solutions': lazy(() => import('@/modules/services/modules').then(m => ({ default: m.IndustrySpecific }))),
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const serviceKeys = pathname.split('/').filter(segment => HERO_SECTIONS[segment])
  const heroSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroSectionRef.current) {
      heroSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [pathname]) 

  return (
    <div>
      <div ref={heroSectionRef}>
        <Suspense fallback={<DefaultHeroSection />}>
          {serviceKeys.length > 0 ? (
            serviceKeys.map((key) => {
              const HeroComponent = HERO_SECTIONS[key]
              return HeroComponent ? <HeroComponent key={key} /> : null
            })
          ) : (
            <DefaultHeroSection />
          )}
        </Suspense>
      </div>
      {children}
    </div>
  )
}

export default Layout
