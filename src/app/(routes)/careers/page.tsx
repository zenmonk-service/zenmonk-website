import { ContactUsSection } from '@/modules/about-us/sections'
import { HeroSection } from '@/modules/careers/sections/hero-section'
import InnovationExcellence from '@/modules/careers/sections/innovation-excellence-section'
import JobPosting from '@/modules/careers/sections/job-posting'
import PerkBenefits from '@/modules/careers/sections/perks-benefits-section'
import Showcases from '@/modules/careers/sections/show-case-section'
import TraditionsCustoms from '@/modules/careers/sections/tradition-custom-section'
import WordsByCEO from '@/modules/careers/sections/words-by-ceo'
import WorkCulture from '@/modules/careers/sections/work-culture'
import FAQ from '@/shared/faq'

const page = () => {
  return (
    <div>
      <HeroSection />
      <PerkBenefits />
      <WorkCulture />
      <JobPosting />
      <Showcases />
      <InnovationExcellence />
      <TraditionsCustoms />
      <WordsByCEO />
      <FAQ />
      <ContactUsSection />
    </div>
  )
}

export default page
