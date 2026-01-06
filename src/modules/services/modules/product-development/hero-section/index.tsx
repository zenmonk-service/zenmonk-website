'use client'

import { HeroSection } from '@/shared/hero-section'
import './styles.scss'

const ProductDevelopment: React.FC = () => {
  return (
    <div className="digital-transformation-hero">
      <HeroSection
        url="/services/product.png"
        title="Reliable & Growth-Oriented Product Development"
        highlightedText="Product Development"
        description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
        imageStyle={{
          width: '28.20vw',
          height: '28.233vw',
          marginTop: '6.6vw',
          scale:1.07
        }}
      />
    </div>
  )
}

export default ProductDevelopment
