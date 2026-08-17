'use client'

import { useMediaQuery } from '@mui/material'
import InnovationDesktop from './desktop'
import InnovationMobile from './mobile'

const Innovation = () => {
  const isMobile = useMediaQuery('(max-width:900px)')
  return isMobile ? <InnovationMobile /> : <InnovationDesktop />
}

export default Innovation
