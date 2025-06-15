'use client'

import { useMediaQuery } from '@mui/material'
import { HeroSection } from '@/shared/hero-section'
import './styles.scss'

const ProductDevelopment: React.FC = () => {
  const isLapTop = useMediaQuery('(max-width:1499px)')
  return (
    <div className="digital-transformation-hero">
      <HeroSection
        url="/services/product.svg"
        title="Digital Transformation & Automation to Accelerate Growth"
        highlightedText="Digital Transformation & Automation"
        description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
        imgWidth={isLapTop ? 400 : 525}
      />
    </div>
  )
}

export default ProductDevelopment
