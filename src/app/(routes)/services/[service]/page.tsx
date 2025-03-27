import React from 'react'
import { Stack } from '@mui/material'
import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import FAQ from '@/shared/faq'
import Rating from '@/shared/rating'
import ItSolutions from '@/modules/services/it-solutions'
import TechnologyTree from '@/modules/services/tech-tree'

const Service = () => {
  return (
    <Stack>
      <Rating />
      <ItSolutions />
      <TechnologyTree />
      <BusinessSectors />
      <DevelopmentProcess />
      <FAQ />
    </Stack>
  )
}

export default Service
