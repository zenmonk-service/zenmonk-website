'use client'

import { HeroSection } from '@/shared/hero-section'
import './styles.scss'

const ProductDevelopment: React.FC = () => {
  return (
    <div className="digital-transformation-hero">
      <HeroSection
        url="/services/product.png"
        title="Digital Transformation & Automation to Accelerate Growth"
        highlightedText="Digital Transformation & Automation"
        description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
        imageStyle={{
          width: '27.20vw',
          height: '25.233vw',
          marginTop: '6.6vw',
        }}
      />
    </div>
  )
}

export default ProductDevelopment
