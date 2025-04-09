'use client'

import { usePathname } from 'next/navigation'
import { Stack } from '@mui/material'
import BusinessSectors from '@/modules/services/business-sectors'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import ReadyToTalkProductDevelopment from '@/modules/services/modules/product-development/ready-to-talk'
import DevelopmentProcess from '@/modules/services/modules/software-development/development-process'
import ReadyToStartSoftwareDev from '@/modules/services/modules/software-development/ready-to-start'
import ReadyToTalkShared from '@/modules/services/shared/ready-to-talk'
import TechnologyTree from '@/modules/services/tech-tree'
import FAQ from '@/shared/faq'
import { CreativeIdeas } from '@/modules/ui-ux'


const DEVELOPMENT_PROCESS_SECTION = {
  'software-development': DevelopmentProcess,
}

const READY_TO_TALK_SECTION = {
  'product-development': ReadyToTalkProductDevelopment,
  'software-development': ReadyToStartSoftwareDev,
  'it-training-&-workshops': ReadyToTalkShared,
  'mobile-app-development': ReadyToTalkShared,
  'cloud-development': ReadyToTalkShared,
  'it-&-business-consultation': ReadyToTalkShared,
  'growth-&-marketing': ReadyToTalkShared,
  'ai-based-softwares': ReadyToTalkShared,
  'industry-specific-solutions': ReadyToTalkShared,
}

const Service = () => {
  const pathname = usePathname()
  const serviceRoute = pathname.split('/')[2]
  const developmentProcessRoute =
    serviceRoute as keyof typeof DEVELOPMENT_PROCESS_SECTION
  const readyToTalkServiceRoute =
    serviceRoute as keyof typeof READY_TO_TALK_SECTION

  const DevelopmentProcessComponent =
    DEVELOPMENT_PROCESS_SECTION[developmentProcessRoute]
  const ReadyToTalkComponent = READY_TO_TALK_SECTION[readyToTalkServiceRoute]

  return (
    <Stack>
      {/* <Rating /> */}
      <ItSolutions />
      <TechnologyTree />
      <YourIdealChoice/>

      <BusinessSectors /> 
      { serviceRoute === 'ui-ux-design' ? <CreativeIdeas/> : <></>}
      {/* {DevelopmentProcessComponent && <DevelopmentProcessComponent />}   */}
      {ReadyToTalkComponent && <ReadyToTalkComponent />}
      <FAQ />
    </Stack>
  )
}

export default Service
