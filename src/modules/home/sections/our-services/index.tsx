"use client"
import { useMediaQuery } from '@mui/material'
import OurServicesDesktop from './desktop'
import OurServicesMobile from './mobile'

const OurServices = () => {
  const isMobile = useMediaQuery('(max-width:780px)')
  return isMobile ? <OurServicesMobile /> : <OurServicesDesktop />
}

export default OurServices
