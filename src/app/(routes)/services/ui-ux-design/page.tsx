import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import UiUx from '@/modules/services/modules/ui-ux/hero-section'
import { CreativeIdeas } from '@/modules/services/modules/ui-ux/creative-ideas'
import UiUxWhyChooseUs from '@/modules/services/modules/ui-ux/why-choose-us'
import TechnologyTree from '@/modules/services/tech-tree'
import FAQ from '@/shared/faq'
import Rating from '@/shared/rating'

const UiUxDesignPage = () => {
  return (
    <div>
      <UiUx />
      <Rating />
      <UiUxWhyChooseUs />
      <CreativeIdeas />
      <ItSolutions id='ui-ux-design'/>
      <TechnologyTree />
      {/* <DevelopmentProcess />
      <YourIdealChoice />
      <BusinessSectors /> */}
      <FAQ />
    </div>
  )
}

export default UiUxDesignPage
