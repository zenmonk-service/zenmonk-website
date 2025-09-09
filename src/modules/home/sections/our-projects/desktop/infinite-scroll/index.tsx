'use client'

import { useEffect, useRef } from 'react'

type Project = {
  imageUrl: string
}

interface Props {
  projects: Project[]
  projectIndex: number
  setProjectIndex: (index: number) => void
}

export default function InfiniteScroll({
  projects,
  projectIndex,
  setProjectIndex,
}: Props) {
  const scrollableSection = useRef<HTMLDivElement>(null)
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

  const smoothScrollTo = (element: HTMLDivElement, target: number, duration = 1000) => {
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
    const baseIndex = projects.length
    const targetIndex = baseIndex + projectIndex

    const offset = targetIndex * (cardWidth + cardGap) - containerWidth / 2 + cardWidth / 2

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
        padding: '20px 0',
        marginBottom:"100px"
      }}
    >
      {infiniteProjects.map((p, idx) => {
        const isActive = idx % projects.length === projectIndex
        return (
          <div
            key={idx}
            style={{
              minWidth: `${cardWidth}px`,
              height: '200px',
              marginRight: `${cardGap}px`,
              background: `url(${p.imageUrl}) center/cover no-repeat`,
              flexShrink: 0,
              cursor: 'pointer',
              border: isActive ? '2px solid white' : 'none',
              transform: isActive ? 'scale(1.15)' : 'scale(0.9)',
              borderRadius:"12px",
              opacity: isActive ? 1 : 0.3,
              transition: 'transform 0.3s, opacity 0.3s, border 0.3s',
            }}
            onClick={() => setProjectIndex(idx % projects.length)}
          />
        )
      })}
    </div>
  )
}