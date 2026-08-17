'use client'
 
import { useAppSelector } from '@/store/hooks'
import FullScreenLoading from '@/shared/lazy-section-wrapper/loader'
 
const CustomLoader = () => {
  const isPageLoading = useAppSelector((state) => state.header.isLoading)
 
  return isPageLoading ? <FullScreenLoading /> : null
}
 
export default CustomLoader

