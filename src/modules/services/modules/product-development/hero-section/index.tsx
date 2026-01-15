'use client'

import Image from 'next/image'
import BaseButton from '@/shared/button'
import './styles.scss'

const ProductDevelopment: React.FC = () => {
  return (
    <div className="product-dev-hero-wrapper">
      <div className="content-side">
        <svg width="0" height="0">
          <defs>
            <clipPath id="hero-wave" clipPathUnits="objectBoundingBox">
              <path d="
              M0,0
              H1
              V0.85
              C0.75,0.95 0.25,0.75 0,0.9
              Z
            " />
            </clipPath>
          </defs>
        </svg>

        <h1 className="hero-title">
          Reliable & Growth-Oriented
          <span className="highlight">Product Development</span>
        </h1>
        <p className="hero-desc">
          We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions.
        </p>
        <BaseButton className="explore-btn" sx={{ marginTop: 'max(40px, 3.25vw)' }}>EXPLORE MORE</BaseButton>
      </div>
      <div className="visual-side">
        <div className="image-container">
          {/* Speech Bubble */}
          <div className="speech-bubble">
            <p>
              We start by understanding your vision, goals, and requirements through detailed discussions and research.
            </p>
            <div className="bubble-arrow"></div>
          </div>

          {/* Main Image */}
          <div className="main-image-wrapper">
            <Image
              src="/services/product.png"
              alt="Product Development Team"
              width={700}
              height={500}
              className="product-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDevelopment
