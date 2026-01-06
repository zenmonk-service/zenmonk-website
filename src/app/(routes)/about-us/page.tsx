'use client'

import dynamic from 'next/dynamic'
import HeroSection from '@/modules/about-us/sections/hero-section'

// Dynamically loaded sections (below the fold)
const BusinessSection = dynamic(
  () =>
    import('@/modules/about-us/sections').then(
      (mod) => mod.BusinessSection
    ),
  { ssr: false }
)

const StandOutSection = dynamic(
  () => import('@/modules/about-us/sections/stand-out-section'),
  { ssr: false }
)

const WhyChooseUsSection = dynamic(
  () =>
    import('@/modules/about-us/sections').then(
      (mod) => mod.WhyChooseUsSection
    ),
  { ssr: false }
)

const AwardProofSection = dynamic(
  () =>
    import('@/modules/about-us/sections').then(
      (mod) => mod.AwardProofSection
    ),
  { ssr: false }
)

const OurClientSection = dynamic(
  () =>
    import('@/modules/about-us/sections/our-client-section').then(
      (mod) => mod.OurClientSection
    ),
  { ssr: false }
)

const About = () => {
  return (
    <div>
      <HeroSection />
      <BusinessSection />
      <StandOutSection />
      <WhyChooseUsSection />
      <AwardProofSection />
      <OurClientSection />
    </div>
  )
}

export default About
