'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ZenmonkLogo } from '@/assets/images'
import BaseButton from '@/shared/button'
import { SectionTitle } from '@/shared/typography'
import { services } from '@/static/services'
import styles from './our-services.module.scss'

const OurServicesDesktop = () => {
  const [selectedService, setSelectedService] = useState(services[0])
  const leftContainerRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  const orangeBoxRef = useRef<HTMLDivElement | null>(null)
  const triggersRef = useRef<ScrollTrigger[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    triggersRef.current.forEach(t => t.kill())
    triggersRef.current = []

    const items = gsap.utils.toArray<HTMLElement>(`.${styles.businessItem}`)

    // 1. Entrance animation for items 
    if (items.length > 0) {
      gsap.fromTo(items,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: items[0],
            start: 'top 95%',
            toggleActions: 'play none none none',
          }
        }
      )
    }

    // 2. Pinning logic - Unpin exactly when the LAST item's center hits the viewport center (middle of the orange box)
    const rightContainer = containerRef.current?.querySelector(`.${styles.servicesRightContainer}`)
    const lastItem = items[items.length - 1]

    if (rightContainer && lastItem) {
      const pinTrigger = ScrollTrigger.create({
        trigger: rightContainer as HTMLElement,
        pin: true,
        start: 'center center',
        endTrigger: lastItem,
        end: 'center center', // Midpoint: unpin when the last card is perfectly centered in the orange box
        pinSpacing: true,
        anticipatePin: 1,
      })
      triggersRef.current.push(pinTrigger)
    }

    // 3. Selection logic - Change content exactly when item center hits viewport center
    items.forEach((item, index) => {
      const trigger = ScrollTrigger.create({
        trigger: item,
        start: 'center center',
        onEnter: () => setSelectedService(services[index]),
        onEnterBack: () => setSelectedService(services[index]),
      })
      triggersRef.current.push(trigger)
    })

    ScrollTrigger.refresh()

    return () => {
      triggersRef.current.forEach((t) => t.kill())
    }
  }, { scope: containerRef, dependencies: [] })

  const text = 'Future Proof Your Business With Our IT Services'

  return (
    <section className={styles.serviceSectionWrapper} ref={containerRef}>
      <SectionTitle
        text={text}
        markText="Services"
        className="service-section-home-title"
        markTextProps={{
          rotate: 4,
          style: {
            marginTop: '-0.45vw',
          },
        }}
      />
      <div className={`${styles.servicesSection} desktop`}>
        <div ref={leftContainerRef} className={styles.servicesLeftContainer}>
          {services.map((service, index) => (
            <div
              className={`${styles.businessItem} ${selectedService.id === service.id ? styles.active : ''
                }`}
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
                  background: `linear-gradient(180deg, ${service.styles.color} -64.31%, #FFF 99.87%)`,
                }}
              >
                {(index + 1).toString().padStart(2, '0')}
              </h5>
            </div>
          ))}
        </div>

        <div className={styles.servicesRightContainer}>
          <Image className={styles.logo} src={ZenmonkLogo} alt="zenmonk-logo" />
          <div ref={orangeBoxRef} className={styles.businessProof}>
            <div className={styles.businessProofContent}>
              <h5 className={styles.businessProofHeading}>{selectedService.name}</h5>
              <p className={styles.businessProofDescription}>{selectedService.description}</p>
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
