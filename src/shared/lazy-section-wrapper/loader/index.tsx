'use client'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Monk from '@/assets/icons/monk.svg'
import { useScrollLock } from '@/hooks/use-scroll-lock'
import styles from './loading.module.css'

export default function FullScreenLoading() {
  useScrollLock(true)



  if (typeof document === 'undefined') return null

  return createPortal(
    <div className={styles.container}>
      <Monk className={styles.monkLoader} />
    </div>,
    document.body
  )
}
