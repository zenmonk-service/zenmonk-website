'use client'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Monk from '@/assets/icons/monk.svg'
import { useScrollLock } from '@/hooks/use-scroll-lock'
import styles from './loading.module.css'

export default function FullScreenLoading() {
  useScrollLock(true)

  useEffect(() => {
    return () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0
    }
  }, [])

  if (typeof document === 'undefined') return null

  return createPortal(
    <div className={styles.container}>
      <Monk className={styles.monkLoader} />
    </div>,
    document.body
  )
}
