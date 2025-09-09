'use client'

import { useAppSelector } from '@/store/hooks'
import styles from './loader.module.scss'

const CustomLoader = () => {
  const isPageLoading = useAppSelector((state) => state.header.isLoading)
  return false ? <div className={styles.container}></div> : null
}

export default CustomLoader
