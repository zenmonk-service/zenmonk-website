'use client'

import { usePathname } from 'next/navigation'
import { SectionTitle, SectionDescription } from '@/shared/typography'
import './styles.scss'
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
import { useMediaQuery } from '@mui/material'

const DevelopmentProcess = () => {
  const isMobile = useMediaQuery('(max-width:768px)')
  const pathname = usePathname()
  const serviceRoute = pathname.split('/')[2]

  const renderAsset = () => {
    switch (serviceRoute) {
      case 'software-development':
        return <SoftwareDevelopmentProcess />
      case 'growth-&-marketing':
        return <DevelopmentProcessWave />
      case 'custom-app-development':
        return isMobile ? <SoftwareDevelopmentProcess /> : <DevelopmentProcessRoad />
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
      className={`development-process-container ${serviceRoute === 'software-development' ? 'software-dev-process' : ''}`}
      style={{
        marginTop: 'max(80px, 6.2vw)',
      }}
    >
      {serviceRoute !== 'ui-ux-design' && (
        <>
          <SectionTitle text="Our development Process" markText="Process" />
          <SectionDescription
            text="State burst think end are its. Arrived off she elderly beloved him affix ed noisier yet. Course regard to up he hardly elder noisier."
            className={`development-process-description ${serviceRoute === 'software-development' ? 'software-dev-desc' : ''}`}
          />
        </>
      )}
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          marginTop: serviceRoute === 'software-development' ? '0px' : 'max(24px, 2.125vw)',
        }}
      >
        {renderAsset()}
      </div>
    </div>
  )
}

export default DevelopmentProcess
