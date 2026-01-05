'use client'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useAppDispatch } from '@/store/hooks'
import { useScrollSmoother } from '@/shared/scroll-smoother/scroll-context'
import styles from './loading.module.css'

export default function FullScreenLoading() {
  const smootherRef = useScrollSmoother()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (typeof document === 'undefined') return

    // 1. Local Scroll Lock (Fallback)
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'

    // 2. GSAP Smoother Pause
    const smoother = smootherRef?.current
    if (smoother) {
      smoother.paused(true)
    }

    return () => {
      // Restore scroll
      document.body.style.overflow = originalStyle

      // Resume GSAP Smoother
      if (smoother) {
        smoother.paused(false)
      }
    }
  }, [smootherRef, dispatch])

  if (typeof document === 'undefined') return null

  return createPortal(
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>,
    document.body
  )
}
