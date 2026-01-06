'use client'

import React from 'react'
import TechnologyTree from '@/modules/services/tech-tree'
import SoftwareDevelopment from './tech-tree.svg'
import Circle from './circle.svg'

const TechTreeSection = () => {
  return (
    <TechnologyTree Icons={[Circle,Circle,Circle,Circle,Circle]} MainImage={<SoftwareDevelopment />} />
  )
}

export default TechTreeSection
