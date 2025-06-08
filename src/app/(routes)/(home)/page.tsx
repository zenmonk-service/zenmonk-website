'use client'

import { Odometer } from '@/modules/home/odometer'
import {
  ServiceSection,
  HeroSection,
  TechSolutionSection,
  OurWorkSection,
  WhyChooseUsSection,
  ClientSatisfaction,
} from '@/modules/home/sections'
import Testimony from '@/modules/home/testimony'
import CardSwap from '@/shared/card-swap'
import FAQ from '@/shared/faq'
import SectionWrapper from '@/shared/wrapper'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const page = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.create({
        trigger: '.services-right-container',
        pin: true,
        endTrigger: '.services-left-container', 
        start: '+=0',
        end: 'bottom bottom',
      })
    },
    {
      scope: container,
    }
  )
  return (
    <div ref={container}>
      <HeroSection />
      <ServiceSection />
      <div className='swipe-section'>
      <TechSolutionSection />
      <CardSwap />
      </div>
      <OurWorkSection />
      {/* <Box sx={{ overflow: 'hidden' }}>
        <SectionWrapper>
          <WhyChooseUsSection />
        </SectionWrapper>
        <Odometer />
      </Box> */}
      <ClientSatisfaction />
      <FAQ />
      <Testimony />
    </div>
  )
}

export default page
