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
      smootherRef.current = ScrollSmoother.create({
        effects: true,
      })
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  )

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
