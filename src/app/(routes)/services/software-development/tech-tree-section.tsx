'use client'

import React from 'react'
import TechnologyTree from '@/modules/services/tech-tree'
import Circle from './circle.svg'

const TechTreeSection = () => {
  return <TechnologyTree Icons={[Circle, Circle]} isTechTree showGears />
}

export default TechTreeSection
