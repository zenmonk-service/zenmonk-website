'use client'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState, useRef, useTransition } from 'react'
import Image from 'next/image'
import { ZenmonkLogo } from '@/assets/images'
import BaseButton from '@/shared/button'
import { SectionTitle } from '@/shared/typography'
import { services } from '@/static/services'
import styles from './our-services.module.scss'

const OurServicesDesktop = () => {
  const [selectedService, setSelectedService] = useState(services[0])
  const [isPending, startTransition] = useTransition()
  const rightSectionHeadingRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: `.${styles.servicesRightContainer}`,
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
    <section className={styles.serviceSectionWrapper}>
      <SectionTitle
        text={text}
        markText="Your Success"
        className="service-section-home-title"
        markTextProps={{ rotate: 1.8 }}
      />
      <div className={`${styles.servicesSection} desktop`}>
        <div
          ref={rightSectionHeadingRef}
          className={styles.servicesLeftContainer}
        >
          {services.map((service, index) => (
            <div
              className={styles.businessItem}
              onClick={() => {
                startTransition(() => {
                  setSelectedService(service)
                })
              }}
              key={service.id}
            >
              <div className={styles.businessItemContent}>
                <service.icon
                  style={{ fill: service.styles.color }}
                  className={styles.businessIcon}
                />
                <h4 className={styles.businessTitle}>{service.name}</h4>
              </div>
              <h5
                className={styles.businessCountText}
                style={{
                  background: `linear-gradient(180deg, ${service.styles.color} -64.31%, #FFF 99.87%)`,
                }}
              >
                {(index + 1).toString().padStart(2, '0')}
              </h5>
            </div>
          ))}
        </div>
        <div className={styles.servicesRightContainer}>
          {isPending && (
            <div className={styles.loadingOverlay}>
              <div className={styles.loader}></div>
            </div>
          )}
          <Image className={styles.logo} src={ZenmonkLogo} alt="zenmonk-logo" />
          <div className={styles.businessProof}>
            <div className={styles.businessProofContent}>
              <h5 className={styles.businessProofHeading}>
                {selectedService.name}
              </h5>
              <p className={styles.businessProofDescription}>
                {selectedService.description}
              </p>
              <div className={styles.businessProofTechnologies}>
                {selectedService.services
                  .slice(0, 5)
                  .map(({ id, icon: ServiceIcon, title }) => (
                    <div key={id} className={styles.businessProofCard}>
                      <div className={styles.businessProofIcon}>
                        <ServiceIcon />
                      </div>
                      <p className={styles.businessProofCardTitle}>{title}</p>
                    </div>
                  ))}
              </div>
              <BaseButton disableShine className={styles.button}>
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
