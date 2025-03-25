import React from 'react'
import { Stack } from '@mui/material'
import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import FAQ from '@/shared/faq'

const Service = () => {
  return (
    <Stack>
      <div style={{ height: '30vh' }}></div>
      <BusinessSectors />
      <DevelopmentProcess />
      <FAQ />
    </Stack>
  )
}

export default Service
