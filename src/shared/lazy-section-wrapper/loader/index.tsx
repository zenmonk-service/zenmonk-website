'use client'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useAppDispatch } from '@/store/hooks'
import Monk from '@/assets/icons/monk.svg'
import styles from './loading.module.css'

export default function FullScreenLoading() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (typeof document === 'undefined') return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow === 'hidden' ? '' : originalOverflow
    }
  }, [dispatch])

  if (typeof document === 'undefined') return null

  return createPortal(
    <div className={styles.container}>
      <Monk className={styles.monkLoader} />
    </div>,
    document.body
  )
}
