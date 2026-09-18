'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
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
        className="title"
      />
      <SectionDescription
        text="We transform client dissatisfaction into strategic success through innovation, turning complex challenges into scalable digital growth."
        className="description"
      />
      <div style={{ position: 'relative' }} ref={ref} className={`svg-container ${inView ? 'animate' : ''}`}>
        <RoadmapSVG />
        {/* Step 1: Sad */}
        <div className="text-overlay text-1">
          <h3 style={{ fontSize: '1.2vw', fontWeight: 700, color: '#32C5FF', marginBottom: '0.5vw' }}>Previous Work Frustration</h3>
          <p style={{ fontSize: '0.8vw', color: '#555', lineHeight: '1.4' }}>Facing stagnant growth or poor legacy performance? We diagnose bottlenecks and formulate proactive turn-around roadmaps.</p>
        </div>

        {/* Step 2: Think */}
        <div className="text-overlay text-2">
          <h3 style={{ fontSize: '1.2vw', fontWeight: 700, color: '#FF9900', marginBottom: '0.5vw' }}>Engagement And Resolution</h3>
          <p style={{ fontSize: '0.8vw', color: '#555', lineHeight: '1.4' }}>Aligning closely with your business goals, our architects design bespoke tech strategies tailored for high execution speed.</p>
        </div>

        {/* Step 3: Smile */}
        <div className="text-overlay text-3">
          <h3 style={{ fontSize: '1.2vw', fontWeight: 700, color: '#D500F9', marginBottom: '0.5vw' }}>Exceeding Expectations</h3>
          <p style={{ fontSize: '0.8vw', color: '#555', lineHeight: '1.4' }}>Delivering robust engineering, clean code, and intuitive UX that consistently surpass performance and quality benchmarks.</p>
        </div>

        {/* Step 4: Happy */}
        <div className="text-overlay text-4">
          <h3 style={{ fontSize: '1.2vw', fontWeight: 700, color: '#64DD17', marginBottom: '0.5vw' }}>Celebrating Success</h3>
          <p style={{ fontSize: '0.8vw', color: '#555', lineHeight: '1.4' }}>Achieving measurable business ROI, boosted conversion rates, and long-term scalable digital excellence.</p>
        </div>
      </div>
      <Image className="logo-left" src={OldLogoDecorator} width={250} height={250} alt="" />
      <Image className="logo-right" src={OldLogoDecorator} width={50} height={50} alt="" />
    </div>
  )
}

export default ClientSatisfactionDesktop
