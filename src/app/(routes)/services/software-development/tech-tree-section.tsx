'use client'

import React from 'react'
import TechnologyTree from '@/modules/services/tech-tree'
import SoftwareDevelopment from './tech-tree.svg'
import Circle from './circle.svg'

const TechTreeSection = () => {
  return (
    <TechnologyTree Icons={[Circle,Circle]} MainImage={<SoftwareDevelopment />} showGears/>
  )
}

export default TechTreeSection
