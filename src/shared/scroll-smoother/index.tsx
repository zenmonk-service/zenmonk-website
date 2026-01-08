'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
import { useScrollSmoother } from './scroll-context'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const smootherRef = useScrollSmoother()

  useGSAP(
    () => {
      // Delay initialization slightly to ensure DOM is ready
      const timer = setTimeout(() => {
        if (smootherRef && !smootherRef.current) {
          smootherRef.current = ScrollSmoother.create({
            smooth: 1.35,
            effects: true,
            smoothTouch: 0.1,
          })
          ScrollTrigger.refresh()
        }
      }, 100)

      return () => clearTimeout(timer)
    },
    {
      dependencies: [],
      revertOnUpdate: true,
    }
  )

  // Refresh ScrollTrigger when content height changes (e.g., images loading)
  useGSAP(() => {
    const content = document.getElementById('smooth-content')
    if (content) {
      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh()
      })
      resizeObserver.observe(content)
      return () => resizeObserver.disconnect()
    }
  }, [pathname])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
