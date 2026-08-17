'use client'
 
import { useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
import { useScrollSmoother } from './scroll-context'
import { useAppDispatch } from '@/store/hooks'
import { toggleLoader } from '@/store/features/header/header-slice'
 
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
 
export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const smootherRef = useScrollSmoother()
  const dispatch = useAppDispatch()
  const [isReady, setIsReady] = useState(false)
 
  useGSAP(
    () => {
      // Delay initialization slightly to ensure DOM is ready
      const timer = setTimeout(() => {
        if (smootherRef && !smootherRef.current) {
          smootherRef.current = ScrollSmoother.create({
            smooth: 1.35,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: { allowNestedScroll: true },
          })
          smootherRef.current.scrollTop(0)
          ScrollTrigger.refresh()
        } else if (smootherRef && smootherRef.current) {
          smootherRef.current.scrollTop(0)
        }
        setIsReady(true)
      }, 100)
 
      return () => clearTimeout(timer)
    },
    {
      dependencies: [],
      revertOnUpdate: true,
    }
  )
 
  // Reset scroll to top on route change with a clean loading overlay transition
  useEffect(() => {
    // Show full-screen loader immediately and hide content
    dispatch(toggleLoader(true))
    setIsReady(false)
 
    if (smootherRef && smootherRef.current) {
      smootherRef.current.scrollTop(0)
    }
 
    const timer = setTimeout(() => {
      if (smootherRef && smootherRef.current) {
        smootherRef.current.scrollTop(0)
      }
      setIsReady(true)
      // Hide loader only after scroll position has been locked at the top
      dispatch(toggleLoader(false))

      requestAnimationFrame(() => {
        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 150)
      })
    }, 250)
 
    return () => clearTimeout(timer)
  }, [pathname, smootherRef, dispatch])
 
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
    <div
      id="smooth-wrapper"
      style={{
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <div id="smooth-content">{children}</div>
    </div>
  )
}
