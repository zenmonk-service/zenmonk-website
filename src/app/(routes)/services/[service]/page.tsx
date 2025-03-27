import React from 'react'
import { Stack } from '@mui/material'
import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import FAQ from '@/shared/faq'
import Rating from '@/shared/rating'
import { SoftwareDevelopmentHeroSection } from '@/modules/services/modules'

const Service = () => {
  return (
    <Stack>
      <Rating />
      <BusinessSectors />
      <DevelopmentProcess />
      <FAQ />
    </Stack>
  )
}

export default Service
