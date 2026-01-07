'use client'

import { useInView } from 'react-intersection-observer'

export function LazySection({
  children,
  minHeight = '40vh',
}: {
  children: React.ReactNode
  minHeight?: string
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
  })

  return (
    <div
      ref={ref}
      style={{
        minHeight,
        visibility: inView ? 'visible' : 'hidden',
      }}
    >
      {children}
    </div>
  )
}
