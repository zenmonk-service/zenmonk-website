'use client'

import { useMediaQuery } from '@mui/material'
import WorkCultureDesktop from './desktop'
import WorkCultureMobile from './mobile'

const WorkCulture = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  return isMobile ? <WorkCultureMobile /> : <WorkCultureDesktop />
}

export default WorkCulture
