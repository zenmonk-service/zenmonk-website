import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import ItSolutions from '@/modules/services/it-solutions'
import { CreativeIdeas } from '@/modules/services/modules/ui-ux/creative-ideas'
import UiUx from '@/modules/services/modules/ui-ux/hero-section'
import UiUxWhyChooseUs from '@/modules/services/modules/ui-ux/why-choose-us'
import TechnologyTree from '@/modules/services/tech-tree'
import Rating from '@/shared/rating'
import DevelopmentProcess from '@/modules/services/development-process'
import BusinessSectors from '@/modules/services/business-sectors'
import FAQ from '@/shared/faq'
import { ContactUsSection } from '@/shared/contact-us-section'

const UiUxDesignPage = () => {
  return (
    <div>
      <UiUx />
      <Rating />
      <UiUxWhyChooseUs />
      <CreativeIdeas />
      <TechnologyTree />
      <BusinessSectors />
      <DevelopmentProcess />
      <FAQ />
      <ContactUsSection/>
    </div>
  )
}

export default UiUxDesignPage
