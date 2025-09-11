'use client'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { techLogos } from '@/assets/icons/business/tech'
import { ZenmonkLogo } from '@/assets/images'
import BaseButton from '@/shared/button'
import { SectionTitle } from '@/shared/typography'
import { serviceList } from '../services'
import './styles.scss'

const OurServicesDesktop = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const rightSectionHeadingRef = useRef<HTMLDivElement | null>(null)

  const selectItem = (index: number) => {
    setSelectedIndex(index)
  }

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.services-right-container',
      pin: true,
      scrub: true,
      start: 'center center',
      end: () => {
        const el = rightSectionHeadingRef.current!
        const extra = el.clientHeight * 0.38
        return el.offsetTop + el.offsetHeight - extra
      },
    })
  }, [rightSectionHeadingRef])

  const text = 'Solutions Designed For Your Success'

  return (
    <section className="service-section-wrapper">
      <SectionTitle
        text={text}
        markText="Your Success"
        className="service-section-home-title"
        markTextProps={{ rotate: 1.8 }}
      />
      <div className="services-section desktop">
        <div ref={rightSectionHeadingRef} className="services-left-container">
          {serviceList.map((service, index) => (
            <div
              className="business-item"
              onClick={() => selectItem(index)}
              key={service.id}
            >
              <div className="business-item-content">
                <service.Icon className="business-icon" />
                <h4 className="business-title">{service.title}</h4>
              </div>
              <h5
                className="business-count-text"
                style={{
                  background: `linear-gradient(180deg, ${service.color} -64.31%, #FFF 99.87%)`,
                }}
              >
                {service.id}
              </h5>
            </div>
          ))}
        </div>
        <div className="services-right-container">
          <Image className="logo" src={ZenmonkLogo} alt="zenmonk-logo" />
          <div className="business-proof">
            <div className="business-proof-content">
              <h5 className="business-proof-heading">
                {serviceList[selectedIndex].title}
              </h5>
              <p className="business-proof-description">
                {serviceList[selectedIndex].description}
              </p>
              <div className="business-proof-technologies">
                {techLogos.map(({ Src }) => {
                  return <Src key={Src} />
                })}
              </div>
              <BaseButton disableShine className="button">
                Get Started
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServicesDesktop
