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

const DevelopmentProcess = () => {
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
        delay: 0.15
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

  const getServiceDescription = () => {
    switch (serviceRoute) {
      case 'software-development':
        return 'A structured, agile engineering process designed to transform complex business requirements into high-performance, scalable software.'
      case 'growth-&-marketing':
        return 'Data-driven marketing workflows engineered to optimize conversion funnels, expand brand visibility, and achieve sustainable ROI growth.'
      case 'custom-app-development':
        return 'An end-to-end development journey crafting bespoke, high-impact mobile and web applications built for delightful user experiences.'
      case 'it-training-&-workshops':
        return 'Hands-on, immersive training frameworks designed to upskill engineering teams with cutting-edge technologies and real-world workflows.'
      case 'product-development':
        return 'A comprehensive product engineering lifecycle turning strategic vision into validated, market-ready, and scalable digital products.'
      case 'industry-specific-solutions':
        return 'Domain-tailored development frameworks engineered to address enterprise compliance, specialized workflows, and industry demands.'
      case 'ai-based-softwares':
        return 'Advanced AI and machine learning engineering pipelines delivering intelligent models, robust data processing, and smart automation.'
      case 'it-&-business-consultation':
        return 'Strategic technology advisory guiding architectural modernization, digital transformation, and sustainable organizational efficiency.'
      case 'cloud-development':
        return 'Resilient cloud infrastructure and DevOps pipelines enabling automated deployment, continuous security, and elastic scalability.'
      case 'ui-ux-design':
        return 'Human-centered design thinking transforming complex user journeys into delightful, engaging, and accessible digital experiences.'
      default:
        return 'A structured, agile engineering process designed to transform complex business requirements into high-performance, scalable software.'
    }
  }

  const getServiceTitle = () => {
    switch (serviceRoute) {
      case 'software-development':
        return 'Our Software Development Process'
      case 'growth-&-marketing':
        return 'Our Growth & Marketing Process'
      case 'custom-app-development':
        return 'Our App Development Process'
      case 'it-training-&-workshops':
        return 'Our Training & Learning Process'
      case 'product-development':
        return 'Our Product Development Process'
      case 'industry-specific-solutions':
        return 'Our Industry Solutions Process'
      case 'ai-based-softwares':
        return 'Our AI Development Process'
      case 'it-&-business-consultation':
        return 'Our IT Consultation Process'
      case 'cloud-development':
        return 'Our Cloud Development Process'
      case 'ui-ux-design':
        return 'Our Designing Process'
      default:
        return 'Our Development Process'
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
            <SectionTitle text={getServiceTitle()} markText="Process" />
          </motion.div>
          <motion.div
            variants={descriptionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <SectionDescription
              text={getServiceDescription()}
              className={`development-process-description ${serviceRoute === 'software-development' ? 'software-dev-desc' : ''}`}
            />
          </motion.div>
        </div>
      )}
      <div className="development-process-asset-wrapper">
        {renderAsset()}
      </div>
    </div>
  )
}

export default DevelopmentProcess
