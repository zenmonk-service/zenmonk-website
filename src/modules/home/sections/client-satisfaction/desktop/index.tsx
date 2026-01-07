'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
// import RoadmapAnimation from '@/animations/roadmap'
import RoadmapSVG from './roadmap-svg'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import OldLogoDecorator from '../assets/old-logo.png'
import './styles.scss'

const ClientSatisfactionDesktop = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div className={`client-satisfaction-section ${inView ? 'in-view' : ''}`}>
      <SectionTitle
        text="The Evolution of Client Satisfaction"
        markText="Satisfaction"
        align="center"
        markTextProps={{ rotate: 1.8 }}
        className="title"
      />
      <SectionDescription
        text="We are a top mobile app development company in India, known for our. We are a top mobile app development company in India, known for oure. We are a top mobile app development company in India, "
        className="description"
      />
      <div style={{ position: 'relative' }} ref={ref} className={`svg-container ${inView ? 'animate' : ''}`}>
        <RoadmapSVG />
        {/* Step 1: Sad */}
        <div className="text-overlay text-1">
          <h3 style={{ fontSize: '1.2vw', fontWeight: 700, color: '#32C5FF', marginBottom: '0.5vw' }}>Previous Work Frustration</h3>
          <p style={{ fontSize: '0.8vw', color: '#555', lineHeight: '1.4' }}>Want business growth? But, not satisfied with the results. Don't worry! Zenmonk got you all covered with result-driven business strategies.</p>
        </div>

        {/* Step 2: Think */}
        <div className="text-overlay text-2">
          <h3 style={{ fontSize: '1.2vw', fontWeight: 700, color: '#FF9900', marginBottom: '0.5vw' }}>Engagement And<br />Resolution</h3>
          <p style={{ fontSize: '0.8vw', color: '#555', lineHeight: '1.4' }}>Want business growth? But, not satisfied with the results. Don't worry! Zenmonk got you all covered with result-driven business strategies.</p>
        </div>

        {/* Step 3: Smile */}
        <div className="text-overlay text-3">
          <h3 style={{ fontSize: '1.2vw', fontWeight: 700, color: '#D500F9', marginBottom: '0.5vw' }}>Exceeding Expectations</h3>
          <p style={{ fontSize: '0.8vw', color: '#555', lineHeight: '1.4' }}>Want business growth? But, not satisfied with the results. Don't worry! Zenmonk got you all covered with result-driven business strategies.</p>
        </div>

        {/* Step 4: Happy */}
        <div className="text-overlay text-4">
          <h3 style={{ fontSize: '1.2vw', fontWeight: 700, color: '#64DD17', marginBottom: '0.5vw' }}>Celebrating Success</h3>
          <p style={{ fontSize: '0.8vw', color: '#555', lineHeight: '1.4' }}>Want business growth? But, not satisfied with the results. Don't worry! Zenmonk got you all covered with result-driven business strategies.</p>
        </div>
      </div>
      <Image className="logo-left" src={OldLogoDecorator} width={250} height={250} alt="" />
      <Image className="logo-right" src={OldLogoDecorator} width={50} height={50} alt="" />
    </div>
  )
}

export default ClientSatisfactionDesktop
