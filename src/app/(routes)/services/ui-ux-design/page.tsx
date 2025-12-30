import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import ItSolutions from '@/modules/services/it-solutions'
import { CreativeIdeas } from '@/modules/services/modules/ui-ux/creative-ideas'
import UiUx from '@/modules/services/modules/ui-ux/hero-section'
import UiUxWhyChooseUs from '@/modules/services/modules/ui-ux/why-choose-us'
import TechnologyTree from '@/modules/services/tech-tree'
import { LazySection } from '@/shared/lazy-section-wrapper'
import Rating from '@/shared/rating'

const DevelopmentProcess = dynamic(
  () => import('@/modules/services/development-process'),
  {
    loading: () => <div className="page-loader">Loading...</div>,
  }
)

const YourIdealChoice = dynamic(
  () => import('@/modules/services/ideal-choice'),
  {
    loading: () => <div className="page-loader">Loading...</div>,
  }
)

const BusinessSectors = dynamic(
  () => import('@/modules/services/business-sectors'),
  {
    loading: () => <div className="page-loader">Loading...</div>,
  }
)

const FAQ = dynamic(() => import('@/shared/faq'), {
  loading: () => <div className="page-loader">Loading...</div>,
})

const UiUxDesignPage = () => {
  return (
    <div>
      <UiUx />
      <Rating />
      <UiUxWhyChooseUs />
      <CreativeIdeas />
      <ItSolutions id="ui-ux-design" />
      <TechnologyTree />
      <LazySection fallback={<div className="page-loader">Loading...</div>}>
        <DevelopmentProcess />
        <YourIdealChoice />
        <BusinessSectors />
        <FAQ />
      </LazySection>
    </div>
  )
}

export default UiUxDesignPage
