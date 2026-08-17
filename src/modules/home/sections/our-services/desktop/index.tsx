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
    const titleElement = containerRef.current?.querySelector(`.${styles.serviceSectionHomeTitle}`)

    const getOrangeBoxPinTop = () => {
      if (!titleElement) return 0
      const titleHeight = (titleElement as HTMLElement).offsetHeight
      return 80 + titleHeight + 30
    }

    let pinTriggerRef: ScrollTrigger | null = null

    if (rightContainer && lastItem && titleElement) {
      pinTriggerRef = ScrollTrigger.create({
        trigger: rightContainer as HTMLElement,
        pin: true,
        start: () => 'top ' + getOrangeBoxPinTop() + 'px',
        endTrigger: lastItem,
        end: () => 'center ' + (getOrangeBoxPinTop() + (rightContainer as HTMLElement).offsetHeight / 2) + 'px',
        pinSpacing: true,
        anticipatePin: 1,
      })
      triggersRef.current.push(pinTriggerRef)

      const titlePinTrigger = ScrollTrigger.create({
        trigger: titleElement as HTMLElement,
        pin: true,
        start: 'top 80px',
        endTrigger: lastItem,
        end: () => 'center ' + (getOrangeBoxPinTop() + (rightContainer as HTMLElement).offsetHeight / 2) + 'px',
        pinSpacing: false,
      })
      triggersRef.current.push(titlePinTrigger)
    }

    const updateItemFades = () => {
      const orangeBox = orangeBoxRef.current
      if (!orangeBox) return

      const orangeRect = orangeBox.getBoundingClientRect()

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect()
        const offset = orangeRect.top - itemRect.top

        if (offset <= 0) {
          item.style.opacity = '1'
          item.style.maskImage = 'none'
          item.style.webkitMaskImage = 'none'
        } else if (offset >= itemRect.height + 40) {
          item.style.opacity = '0'
          item.style.maskImage = 'none'
          item.style.webkitMaskImage = 'none'
        } else {
          item.style.opacity = '1'
          const fadeZone = 35
          const transparentEnd = Math.max(0, offset - 10)
          const solidStart = offset + fadeZone
          const maskStr = `linear-gradient(to bottom, transparent 0px, transparent ${transparentEnd}px, #000 ${solidStart}px, #000 100%)`
          item.style.maskImage = maskStr
          item.style.webkitMaskImage = maskStr
        }
      })
    }

    // 3. Selection logic - Dynamically select the card closest to the viewport center
    if (items.length > 0) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: () => {
          const orangeBox = orangeBoxRef.current
          let closestIndex = 0
          let minDistance = Infinity

          // If pin hasn't engaged yet (section above pin start), show first card
          if (pinTriggerRef && !pinTriggerRef.isActive && pinTriggerRef.progress === 0) {
            closestIndex = 0
          } else if (orangeBox) {
            const orangeRect = orangeBox.getBoundingClientRect()
            const targetY = orangeRect.top + orangeRect.height / 2

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

          setSelectedService((prev) => {
            if (prev.id !== services[closestIndex].id) {
              return services[closestIndex]
            }
            return prev
          })

          updateItemFades()
        },
        onRefresh: () => {
          updateItemFades()
        }
      })
      triggersRef.current.push(scrollTrigger)
      updateItemFades()
    }

    const handleResize = () => {
      updateItemFades()
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)
    ScrollTrigger.refresh()

    return () => {
      window.removeEventListener('resize', handleResize)
      triggersRef.current.forEach((t) => t.kill())
    }
  }, { scope: containerRef, dependencies: [] })

  const text = 'Future Proof Your Business With Our IT Services'

  return (
    <section className={styles.serviceSectionWrapper} ref={containerRef}>
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
        <div ref={leftContainerRef} className={styles.servicesLeftContainer}>
          {services.map((service, index) => {
            const isActive = selectedService.id === service.id
            return (
              <div
                className={`${styles.businessItem} ${isActive ? styles.active : ''}`}
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
          <div ref={orangeBoxRef} className={styles.businessProof}>
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
