'use client'

import { useMediaQuery } from '@mui/material'
import WhyChooseUsDesktop from './desktop'
import WhyChooseUsMobile from './mobile'

const WhyChooseUs = () => {
  const isMobile = useMediaQuery('(max-width:900px)')
  return isMobile ? <WhyChooseUsMobile /> : <WhyChooseUsDesktop />
}

export default WhyChooseUs
