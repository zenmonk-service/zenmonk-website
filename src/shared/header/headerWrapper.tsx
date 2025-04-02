"use client"

import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./index'), { ssr: false })

export default function HeaderWrapper() {
  return <Navbar />
}
