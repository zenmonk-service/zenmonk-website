'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  CraftAndCollab,
  Deadline,
  Support,
  LatestTech,
  ThumbUp,
} from '@/assets/icons/why-choose-us'
import { SectionTitle } from '@/shared/typography'
import OldLogoDecorator from './assets/logo-benzene.png'
import WhyChooseUSMobile from './mobile'
import './styles.scss'

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const clientSatisficationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (clientSatisficationRef.current) {
      observer.observe(clientSatisficationRef.current)
    }

    return () => {
      if (clientSatisficationRef.current) {
        observer.unobserve(clientSatisficationRef.current)
      }
    }
  }, [])

  return (
    <>
      <div className="why-choose-us-section">
        <SectionTitle
          text="Elevate your tech journey with Zenmonk"
          markText="Zenmonk"
          className="title"
        />
        <Image src={OldLogoDecorator} alt="logo" className="logo left-logo" />
        <Image src={OldLogoDecorator} alt="logo" className="logo right-logo" />

        <div ref={clientSatisficationRef} className="why-choose-us">
          <div className="content">
            <div className={`thumsup ${isVisible && 'animate_scale'}`}>
              <ThumbUp />
            </div>
            <div className="children">
              <div className={`first ${isVisible && 'animate_comeFromLeft'}`}>
                <CraftAndCollab />
              </div>
              <div className={`second ${isVisible && 'animate_comeFromRight'}`}>
                <Support />
              </div>
              <div className={`third ${isVisible && 'animate_comeFromLeft'}`}>
                <Deadline />
              </div>
              <div
                className={`fourth ${isVisible && 'animate_comeFromRight2'}`}
              >
                <LatestTech />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <WhyChooseUSMobile /> */}
    </>
  )
}

export { WhyChooseUsSection }
