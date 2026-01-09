'use client'

import { usePathname } from 'next/navigation'
import { SectionTitle } from '@/shared/typography'
import Cloud from './assets/cloud.svg'
import It from './assets/it.svg'
import Consult from './assets/product.svg'
import ProductDevelopmentProcess from './product-development-process'
import SoftwareDevelopmentProcess from './software-development-process'
import DevelopmentProcessHexagon from '../shared/development-process-hexagon'
import DevelopmentProcessWave from '../shared/development-process-wave'
import DevelopmentProcessRoad from '../shared/development-process-road'

const DevelopmentProcess = () => {
  const pathname = usePathname()
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
        return <It />
      case 'product-development':
        return <DevelopmentProcessRoad />
      case 'industry-specific-solutions':
      case 'ai-based-softwares':
        return <DevelopmentProcessHexagon />
      case 'it-&-business-consultation':
        return <Consult />
      case 'cloud-development':
        return <Cloud />
      case 'ui-ux-design':
        return <DevelopmentProcessHexagon />
      default:
        return <Cloud />
    }
  }

  return (
    <div
      style={{
        marginTop: '1.125vw',
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
