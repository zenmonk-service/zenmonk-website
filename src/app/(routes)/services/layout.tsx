import React from 'react'
import styles from './services-layout.module.scss'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.servicesLayoutWrapper}>{children}</div>
}
