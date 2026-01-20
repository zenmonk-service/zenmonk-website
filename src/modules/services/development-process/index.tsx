'use client'

import { usePathname } from 'next/navigation'
import { SectionTitle } from '@/shared/typography'
import SoftwareDevelopmentProcess from './software-development-process'
import DevelopmentProcessHexagon from '../shared/development-process-hexagon'
import DevelopmentProcessWave from '../shared/development-process-wave'
import DevelopmentProcessRoad from '../shared/development-process-road'
import DevelopmentProcessIT from '../shared/development-process-it'
import CircularDevelopmentProcess from '../shared/circular-development-process'
import DesigningProcess from '../shared/designing-process/DesigningProcess'
import DevelopmentProcessExpertIt from '../shared/development-process-expert-it'
import DevelopmentProductSteps from '../shared/development-product-steps'
import DevelopmentProcessItBusiness from '../shared/development-process-it-business'

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
        return <DevelopmentProcessExpertIt />
      case 'product-development':
        return <DevelopmentProductSteps />
      case 'industry-specific-solutions':
        return <DevelopmentProcessHexagon />
      case 'ai-based-softwares':
        return <CircularDevelopmentProcess />
      case 'it-&-business-consultation':
        return <DevelopmentProcessItBusiness />
      case 'cloud-development':
        return <DevelopmentProcessIT />
      case 'ui-ux-design':
        return <DesigningProcess />
      default:
        return <DevelopmentProcessIT />
    }
  }

  return (
    <div
      style={{
        marginTop: 'max(80px, 6.2vw)',
      }}
    >
      {serviceRoute !== 'ui-ux-design' && (
        <SectionTitle
          text="Our development Process"
          markText="Process"
        />
      )}
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          marginTop: '0.83vw',
        }}
      >
        {renderAsset()}
      </div>
    </div>
  )
}

export default DevelopmentProcess
