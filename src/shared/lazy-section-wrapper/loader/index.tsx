'use client'
import { useEffect } from 'react'
import { toggleLoader } from '@/store/features/header/header-slice'
import { useAppDispatch } from '@/store/hooks'
import { useScrollSmoother } from '@/shared/scroll-smoother/scroll-context'
import styles from './loading.module.css'

export default function FullScreenLoading() {
  const smootherRef = useScrollSmoother()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // 1. Local Scroll Lock (Fallback)
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'

    // 2. GSAP Smoother Pause
    if (smootherRef?.current) {
      smootherRef.current.paused(true)
    }

    // 3. Global Loading State
    dispatch(toggleLoader(true))

    return () => {
      // Restore scroll
      document.body.style.overflow = originalStyle

      // Resume GSAP Smoother
      if (smootherRef?.current) {
        smootherRef.current.paused(false)
      }

      // Reset Global Loading State
      dispatch(toggleLoader(false))
    }
  }, [smootherRef, dispatch])

  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  )
}
