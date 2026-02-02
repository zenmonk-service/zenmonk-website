import { useMediaQuery } from '@mui/material'
import React from 'react'
import OurProjectsMobile from './mobile'
import OurProjectsDesktop from './desktop'

const OurProjects = () => {
  const isMobile = useMediaQuery('(max-width:700px)')
  return isMobile ? <OurProjectsMobile /> : <OurProjectsDesktop />
}

export default OurProjects
