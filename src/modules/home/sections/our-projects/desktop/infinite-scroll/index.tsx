'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

type Project = {
  imageUrl: string
}

interface Props {
  projects: Project[]
  projectIndex: number
  setProjectIndex: (index: number) => void
}

/** px → vw helper (1920 base) */
const pxToVw = (px: number) => `${(px / 1920) * 100}vw`

export default function InfiniteScroll({
  projects,
  projectIndex,
  setProjectIndex,
}: Props) {
  const scrollableSection = useRef<HTMLDivElement>(null)

  // DESIGN VALUES (px)
  const cardWidth = 300
  const cardGap = 16

  const infiniteProjects = [...projects, ...projects, ...projects]

  useEffect(() => {
    const container = scrollableSection.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth

      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        container.scrollLeft = scrollWidth / 3
      } else if (scrollLeft <= 0) {
        container.scrollLeft = scrollWidth / 3
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (scrollableSection.current) {
      scrollableSection.current.scrollLeft =
        scrollableSection.current.scrollWidth / 3
    }
  }, [])

  const smoothScrollTo = (
    element: HTMLDivElement,
    target: number,
    duration = 1000
  ) => {
    const start = element.scrollLeft
    const change = target - start
    const startTime = performance.now()

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2

      element.scrollLeft = start + change * easeInOutCubic

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  useEffect(() => {
    if (!scrollableSection.current) return

    const container = scrollableSection.current
    const containerWidth = container.clientWidth

    // Measure actual rendered dimensions from the first card
    const firstCard = container.firstElementChild as HTMLElement
    if (!firstCard) return

    const currentCardWidth = firstCard.offsetWidth
    const style = window.getComputedStyle(firstCard)
    const currentCardGap = parseFloat(style.marginRight) || 0

    const baseIndex = projects.length
    const targetIndex = baseIndex + projectIndex

    const offset =
      targetIndex * (currentCardWidth + currentCardGap) -
      containerWidth / 2 +
      currentCardWidth / 2

    smoothScrollTo(container, offset, 800)
  }, [projectIndex, projects.length])

  return (
    <div
      ref={scrollableSection}
      style={{
        width: '40%',
        display: 'flex',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        scrollBehavior: 'auto',
        padding: `${pxToVw(20)} 0`,
        marginBottom: pxToVw(100),
      }}
    >
      {infiniteProjects.map((p, idx) => {
        const isActive = idx % projects.length === projectIndex

        return (
          <div
            key={idx}
            style={{
              minWidth: pxToVw(cardWidth),
              height: pxToVw(200),
              marginRight: pxToVw(cardGap),
              flexShrink: 0,
              cursor: 'pointer',
              border: isActive ? '2px solid white' : 'none',
              transform: isActive ? 'scale(1.15) translateZ(0)' : 'scale(0.9) translateZ(0)',
              borderRadius: pxToVw(12),
              opacity: isActive ? 1 : 0.3,
              transition: 'transform 0.3s, opacity 0.3s, border 0.3s',
              position: 'relative',
              overflow: 'hidden',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              willChange: 'transform',
            }}
            onClick={() => setProjectIndex(idx % projects.length)}
          >
            <Image
              src={p.imageUrl}
              alt={`Project ${idx}`}
              fill
              sizes="(max-width: 1920px) 16vw, 300px"
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        )
      })}
    </div>
  )
}
