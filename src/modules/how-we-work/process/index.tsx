'use client'

import { useMediaQuery } from '@mui/material'
import ProcessDesktop from './desktop'
import ProcessMobile from './mobile'

const Process = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  return isMobile ? <ProcessMobile /> : <ProcessDesktop />
}

export default Process
