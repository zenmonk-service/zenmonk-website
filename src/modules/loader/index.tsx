'use client'

import { useAppSelector } from '@/store/hooks'
import './styles.scss'

const CustomLoader = () => {
  const isPageLoading = useAppSelector((state) => state.header.isLoading)

  console.log(isPageLoading)
  return isPageLoading ? (
    <div
      style={{
        height: '100svh',
        width: '100svw',
        position: 'fixed',
        backgroundColor: '#fff',
        zIndex: 101,
      }}
    >
      <span className="loader"></span>
    </div>
  ) : null
}

export default CustomLoader
