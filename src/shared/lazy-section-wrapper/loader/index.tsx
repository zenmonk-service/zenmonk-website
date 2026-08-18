'use client'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useAppDispatch } from '@/store/hooks'
import { useScrollSmoother } from '@/shared/scroll-smoother/scroll-context'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Monk from '@/assets/icons/monk.svg'
import styles from './loading.module.css'

export default function FullScreenLoading() {
  const smootherRef = useScrollSmoother()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (typeof document === 'undefined') return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const smoother = smootherRef?.current
    if (smoother) {
      smoother.paused(true)
    }

    return () => {
      document.body.style.overflow = originalOverflow === 'hidden' ? '' : originalOverflow

      if (smoother) {
        smoother.paused(false)
      }
      
      requestAnimationFrame(() => {
        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 50)
      })
    }
  }, [smootherRef, dispatch])

  if (typeof document === 'undefined') return null

  return createPortal(
    <div className={styles.container}>
      <Monk className={styles.monkLoader} />
    </div>,
    document.body
  )
}
