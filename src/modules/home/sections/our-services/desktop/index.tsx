'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ZenmonkLogo } from '@/assets/images'
import BaseButton from '@/shared/button'
import { SectionTitle } from '@/shared/typography'
import { services } from '@/static/services'
import styles from './our-services.module.scss'

const OurServicesDesktop = () => {
  const [selectedService, setSelectedService] = useState(services[0])
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const rightCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const rightCard = rightCardRef.current
      const container = containerRef.current
      if (!rightCard || !container) return

      const items = container.querySelectorAll(`.${styles.businessItem}`)
      if (items.length === 0) return

      const rightRect = rightCard.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const targetY = rightRect.top + rightRect.height / 2

      let closestIndex = 0

      if (rightRect.top > 125) {
        closestIndex = 0
      } else if (containerRect.bottom <= rightRect.bottom + 50) {
        closestIndex = services.length - 1
      } else {
        let minDistance = Infinity

        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect()
          const itemCenter = rect.top + rect.height / 2
          const distance = Math.abs(itemCenter - targetY)
          if (distance < minDistance) {
            minDistance = distance
            closestIndex = index
          }
        })
      }

      const matchedService = services[closestIndex]
      if (matchedService) {
        setSelectedService((prev) => {
          if (prev.id !== matchedService.id) {
            return matchedService
          }
          return prev
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const text = 'Future Proof Your Business With Our IT Services'

  return (
    <section ref={containerRef} className={styles.serviceSectionWrapper}>
      <SectionTitle
        text={text}
        markText="Services"
        className={styles.serviceSectionHomeTitle}
        markTextProps={{
          style: {
            marginTop: '-0.45vw',
          },
        }}
      />
      <div className={`${styles.servicesSection} desktop`}>
        <div className={styles.servicesLeftContainer}>
          {services.map((service, index) => {
            const isActive = selectedService.id === service.id
            return (
              <div
                className={`${styles.businessItem} ${isActive ? styles.active : ''}`}
                data-service-id={service.id}
                style={{
                  backgroundColor: isActive ? service.styles.hoverColor : '#fff',
                  outline: isActive ? `2.5px solid ${service.styles.color}` : '0px solid transparent',
                  transition: 'background-color 0.3s ease, outline 0.3s ease, transform 0.3s ease',
                }}
                onClick={() => setSelectedService(service)}
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
                    background: `linear-gradient(180deg, ${service.styles.color} 0%, ${service.styles.color}66 100%)`,
                  }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </h5>
              </div>
            )
          })}
        </div>

        <div className={styles.servicesRightContainer}>
          <Image className={styles.logo} src={ZenmonkLogo} alt="zenmonk-logo" />
          <div ref={rightCardRef} className={styles.businessProof}>
            <div className={styles.businessProofContent}>
              <h5 className={styles.businessProofHeading}>{selectedService.name}</h5>
              <p className={styles.businessProofDescription}>{selectedService.description}</p>
              <div className={styles.businessProofTechnologies}>
                {selectedService.services
                  .slice(0, 6)
                  .map(({ id, icon: ServiceIcon, title }) => (
                    <div key={id} className={styles.businessProofCard}>
                      <div className={styles.businessProofIcon}>
                        <ServiceIcon />
                      </div>
                      <p className={styles.businessProofCardTitle}>{title}</p>
                    </div>
                  ))}
              </div>
              <BaseButton
                disableShine
                className={styles.button}
                onClick={() => router.push(`/services${selectedService.route}`)}
              >
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
