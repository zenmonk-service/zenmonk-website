import { CreativeIdeas } from '@/modules/services/modules/ui-ux/creative-ideas'
import UiUx from '@/modules/services/modules/ui-ux/hero-section'
import UiUxWhyChooseUs from '@/modules/services/modules/ui-ux/why-choose-us'
import TechnologyTree from '@/modules/services/tech-tree'
import Rating from '@/shared/rating'
import DevelopmentProcess from '@/modules/services/development-process'
import BusinessSectors from '@/modules/services/business-sectors'
import { ContactUsSection } from '@/shared/contact-us-section'
import FAQ from '@/shared/faq'

const UiUxDesignPage = () => {
  const serviceId = 'ui-ux-design'
  return (
    <div>
      <UiUx />
      <Rating />
      <UiUxWhyChooseUs />
      <CreativeIdeas />
      <TechnologyTree serviceId={serviceId} />
      <BusinessSectors />
      <DevelopmentProcess />
      <FAQ />
      <ContactUsSection showFlagsOnly />
    </div>
  )
}

export default UiUxDesignPage
