"use client"

import { useMediaQuery } from '@mui/material'
import StandOutSectionDesktop from './desktop'
import StandOutSectionMobile from './mobile'

const StandOutSection = () => {
  const isMobile = useMediaQuery('(max-width:1024px)')
  return isMobile ? <StandOutSectionMobile /> : <StandOutSectionDesktop />
}

export default StandOutSection
