import Image from 'next/image'
import { Hero } from '@/modules/how-we-work/assets'
import { SectionDescription } from '@/shared/typography'
import HorizontalDottedImage from '../assets/hero/horizontal-dotted-image.png'
import VerticalDottedImage from '../assets/hero/vert-dotted-image.png'
import './styles.scss'

const HeroSection = () => {
  return (
    <div className="how-we-work-hero-section-wrapper">
      <div className="hero-section">
        <div className="hero-section-text-wrapper">
          <p className="text-heading">
            <span>How We Work</span> for <br />
            Seamless Solutions
          </p>
          <SectionDescription
            text="We deliver Zen-inspired precise, 
            mindful solutions by integrating deep expertise with client collaboration,
            prioritizing transparency, innovation, and purposeful development to 
            innovate impactful technology."
            className="text-description"
          />
        </div>
      </div>
      <div className="hero-section-image-wrapper">
        <Image className="hero-section-image" src={Hero} alt="innovator" fill />
      </div>
      <Image
        alt="bottom-horizontal-dotted-image"
        src={HorizontalDottedImage}
        className="bottom-horizontal-dotted-image"
      />
      <Image
        alt="top-horizontal-dotted-image"
        src={HorizontalDottedImage}
        className="top-horizontal-dotted-image"
      />
      <Image
        alt="vertical-dotted-image"
        src={VerticalDottedImage}
        className="vertical-dotted-image"
      />
    </div>
  )
}

export default HeroSection 
