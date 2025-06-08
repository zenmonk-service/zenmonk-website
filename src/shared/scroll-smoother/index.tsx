'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode
}) {
  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
      })
    },
    {
      dependencies: [],
      revertOnUpdate: true,
    }
  )
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
