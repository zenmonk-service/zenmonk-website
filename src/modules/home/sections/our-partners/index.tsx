import { OurPartnersList } from '@/assets/icons/collaboration'
import AnimatedDiv from '@/shared/animated-div'
import AutoScrollCarousel from '@/shared/auto-scroll-carousel'
import OurPartnersSectionHeading from './heading'

const OurPartners = async() => {
  return (
    <AnimatedDiv>
      <OurPartnersSectionHeading />
      <AutoScrollCarousel data={OurPartnersList} />
    </AnimatedDiv>
  )
}

export default OurPartners
