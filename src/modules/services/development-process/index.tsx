'use client'

import { usePathname } from 'next/navigation'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import It from './assets/it.svg'
import SoftwareDevelopmentProcess from './software-development-process'
import DevelopmentProcessHexagon from '../shared/development-process-hexagon'
import DevelopmentProcessWave from '../shared/development-process-wave'
import DevelopmentProcessRoad from '../shared/development-process-road'
import DevelopmentProcessIT from '../shared/development-process-it'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import DevelopmentProcessMobile from '../shared/development-process-it/mobile'

const DevelopmentProcess = () => {
  const pathname = usePathname()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const serviceRoute = pathname.split('/')[2]

  const renderAsset = () => {
    switch (serviceRoute) {
      case 'software-development':
        return <SoftwareDevelopmentProcess />
      case 'growth-&-marketing':
        return <DevelopmentProcessWave />
      case 'mobile-app-development':
        return <DevelopmentProcessRoad />
      case 'it-training-&-workshops':
        return isMobile ? <DevelopmentProcessRoad /> : <It />
      case 'product-development':
        return <DevelopmentProcessRoad />
      case 'industry-specific-solutions':
      case 'ai-based-softwares':
        return <DevelopmentProcessHexagon />
      case 'it-&-business-consultation':
        return <DevelopmentProcessIT />
      case 'cloud-development':
        return <DevelopmentProcessIT />
      case 'ui-ux-design':
        return <DevelopmentProcessHexagon />
      default:
        return <DevelopmentProcessIT />
    }
  }

  return (
    <div
      style={{
        marginTop: '6.2vw',
      }}
    >
      {serviceRoute !== 'ui-ux-design' && (
        <SectionTitle
          text="Our development Process"
          markText="Process"
          markTextProps={{
            rotate: 2,
          }}
        />
      )}
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          marginTop: '1.125vw',
        }}
      >
        {renderAsset()}
      </div>
    </div>
  )
}

export default DevelopmentProcess
