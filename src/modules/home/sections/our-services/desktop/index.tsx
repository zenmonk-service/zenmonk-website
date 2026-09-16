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
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)
  const rightCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const leftCol = leftColRef.current
    const rightCol = rightColRef.current
    const rightCard = rightCardRef.current
    if (!section || !leftCol || !rightCol || !rightCard) return

    const getPerCardScroll = () => {
      const h = window.innerHeight || 800
      return Math.max(240, Math.round(h * 0.28))
    }

    let rafId: number | null = null
    let stepRafId: number | null = null
    let targetIndex = 0
    let currentIndex = 0
    let isStepping = false
    let lastStepTime = 0
    const stepDwell = 75 // ms per card to guarantee smooth sequential display

    const stepToTarget = (time: number) => {
      if (currentIndex === targetIndex) {
        isStepping = false
        return
      }

      if (time - lastStepTime >= stepDwell) {
        lastStepTime = time
        currentIndex += Math.sign(targetIndex - currentIndex)
        setSelectedService(services[currentIndex])
      }

      if (currentIndex !== targetIndex) {
        stepRafId = requestAnimationFrame(stepToTarget)
      } else {
        isStepping = false
      }
    }

    const handleScroll = () => {
      const items = leftCol.querySelectorAll<HTMLElement>(`.${styles.businessItem}`)
      if (items.length === 0) return

      const sectionRect = section.getBoundingClientRect()
      const rightColRect = rightCol.getBoundingClientRect()
      const rightCardRect = rightCard.getBoundingClientRect()

      const totalScroll = (items.length - 1) * getPerCardScroll()
      section.style.height = `${Math.ceil(rightCol.offsetHeight + totalScroll)}px`

      // Sticky top offset (75px)
      const stickyTop = 75
      const currentScroll = Math.max(0, stickyTop - sectionRect.top)
      const progress = totalScroll > 0 ? Math.min(1, Math.max(0, currentScroll / totalScroll)) : 0

      // Compute target center on the right card relative to leftCol's origin
      const panelCentre = (rightCardRect.top - sectionRect.top) + rightCardRect.height / 2
      const firstItem = items[0]
      const lastItem = items[items.length - 1]

      const firstItemCentre = (firstItem.offsetTop) + firstItem.offsetHeight / 2
      const lastItemCentre = (lastItem.offsetTop) + lastItem.offsetHeight / 2

      const startOffset = panelCentre - firstItemCentre
      const endOffset = panelCentre - lastItemCentre

      const currentOffset = startOffset + progress * (endOffset - startOffset)
      leftCol.style.transform = `translate3d(0, ${currentOffset.toFixed(2)}px, 0)`

      // Top-down gradient mask effect: cards fade out as they move above sticky top boundary
      const maskThreshold = rightCardRect.top - 15
      const fadeDistance = 60

      items.forEach((item) => {
        const rect = item.getBoundingClientRect()
        if (rect.bottom <= maskThreshold) {
          item.style.opacity = '0'
          item.style.maskImage = 'none'
          item.style.webkitMaskImage = 'none'
        } else if (rect.top >= maskThreshold) {
          item.style.opacity = '1'
          item.style.maskImage = 'none'
          item.style.webkitMaskImage = 'none'
        } else {
          item.style.opacity = '1'
          const overlap = maskThreshold - rect.top
          const transparentStop = Math.max(0, overlap)
          const blackStop = Math.min(rect.height, overlap + fadeDistance)
          const maskValue = `linear-gradient(to bottom, transparent 0px, transparent ${transparentStop.toFixed(1)}px, black ${blackStop.toFixed(1)}px, black 100%)`
          item.style.maskImage = maskValue
          item.style.webkitMaskImage = maskValue
        }
      })

      // Active card index strictly mapped to progress intervals
      targetIndex = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
      )

      if (targetIndex !== currentIndex && !isStepping) {
        isStepping = true
        lastStepTime = performance.now()
        stepRafId = requestAnimationFrame(stepToTarget)
      }
    }

    const onScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(handleScroll)
    }

    handleScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      if (stepRafId !== null) cancelAnimationFrame(stepRafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (leftCol) leftCol.style.transform = ''
      if (section) section.style.height = ''
    }
  }, [])

  const text = 'Future Proof Your Business With Our IT Services'

  return (
    <section ref={containerRef} className={styles.serviceSectionWrapper}>
      <div ref={sectionRef} className={`${styles.servicesSection} desktop`}>
        <div ref={leftColRef} className={styles.servicesLeftContainer}>
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

        <div ref={rightColRef} className={styles.servicesRightContainer}>
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
