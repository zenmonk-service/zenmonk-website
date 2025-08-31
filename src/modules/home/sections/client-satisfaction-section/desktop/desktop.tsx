'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import RoadmapAnimation from '@/animations/roadmap'
import { SectionTitle } from '@/shared/typography'
import OldLogoDecorator from '../assets/old-logo.png'
import './desktop.styles.scss'

const ClientSatisfactionDesktop = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div className={`client-satisfaction-section ${inView ? 'in-view' : ''}`}>
      <SectionTitle
        text="The Evolution of Client Satisfaction"
        markText="client Satisfaction"
        align="center"
        markTextProps={{ rotate: 1.8 }}
        className="title"
      />
      <div style={{ position: 'relative' }} ref={ref} className="svg-container">
        <RoadmapAnimation />
      </div>
      <Image className="logo-left" src={OldLogoDecorator} alt="logo-left" />
      <Image className="logo-right" src={OldLogoDecorator} alt="logo-right" />
    </div>
  )
}

export default ClientSatisfactionDesktop
