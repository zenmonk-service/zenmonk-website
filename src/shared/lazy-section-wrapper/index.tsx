'use client'

import { useInView } from 'react-intersection-observer'

export function LazySection({
  children,
  minHeight = '40vh',
  fallback = null,
}: {
  children: React.ReactNode
  minHeight?: string
  fallback?: React.ReactNode
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
  })

  return (
    <div ref={ref} style={{ minHeight }}>
      {inView ? children : fallback}
    </div>
  )
}
