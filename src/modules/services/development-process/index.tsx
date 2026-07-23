'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
  const isMobile = useMediaQuery('(max-width:1000px)')
  const pathname = usePathname()
  const serviceRoute = pathname.split('/')[2]

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: '2.6vw',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      },
    },
  }

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: '2.6vw',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.3
      },
    },
  }

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
      ref={ref}
      className={`development-process-container ${serviceRoute === 'software-development' ? 'software-dev-process' : ''}`}
      style={{
        marginTop: 'max(80px, 6.2vw)',
      }}
    >
      {serviceRoute !== 'ui-ux-design' && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <SectionTitle text="Our development Process" markText="Process" />
          </motion.div>
          <motion.div
            variants={descriptionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <SectionDescription
              text="State burst think end are its. Arrived off she elderly beloved him affix ed noisier yet. Course regard to up he hardly elder noisier."
              className={`development-process-description ${serviceRoute === 'software-development' ? 'software-dev-desc' : ''}`}
            />
          </motion.div>
        </div>
      )}
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          marginTop: serviceRoute === 'software-development' ? '0px' : serviceRoute === 'industry-specific-solutions' ? 'max(48px, 3.5vw)' : 'max(24px, 2.125vw)',
        }}
      >
        {renderAsset()}
      </div>
    </div>
  )
}

export default DevelopmentProcess
