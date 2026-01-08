'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/modules/home/sections'
import OurProjects from '@/modules/home/sections/our-projects'
import ClientSatisfaction from '@/modules/home/sections/client-satisfaction'
import OurServices from '@/modules/home/sections/our-services'
import Statistics from '@/modules/home/sections/statistics'
import WhyChooseUs from '@/modules/home/sections/why-choose-us-section'
import Testimony from '@/modules/home/testimony'
import FAQ from '@/shared/faq'
import TechSolution  from '@/modules/home/sections/tech-solution'
import GlobeSection from '@/animations/globe-animation'

const HomePage = () => {
  const container = useRef(null)

  return (
    <div ref={container} style={{ position: 'relative' }}>
      <HeroSection />
      <OurServices />
      <TechSolution />
      <OurProjects />
      <WhyChooseUs />
      <Statistics />
      <ClientSatisfaction />
      <FAQ />
      <GlobeSection/>
      <Testimony />
    </div>
  )
}

export default HomePage
