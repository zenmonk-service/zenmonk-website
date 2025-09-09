import Image from 'next/image'
import {
  First,
  Quality as QualityImg,
  Second,
  Third,
  GraphIcon,
  QualityImgMobile,
} from '@/modules/how-we-work/assets'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import TopRightDottedImage from '../assets/quality/top-right-dotted.png'
import VerticalDottedImage from '../assets/quality/vertical-dotted.png'
import './styles.scss'

const Quality = () => {
  return (
    <div className="quality-hero-section-wrapper">
      <div className="first-section">
        <SectionTitle
          align="left"
          text="Our Promise of Quality Analysis"
          markText="Analysis"
        />
        <SectionDescription
          className="subheading"
          text=" We deliver Zen-inspired precise, mindful solutions by integrating deep
          expertise with client collaboration; prioritizing transparency,
          innovation, and purposeful development to innovate impactful
          technology."
        />

        <div className="stats-img-container">
          <Third className="stats-img" />
          <First className="stats-img" />
          <Second className="stats-img" />
        </div>
      </div>
      <div className="quality-img-container">
        <QualityImg className="quality-img" />
      </div>
      <QualityImgMobile className="quality-img-mobile" />

      <Image
        src={VerticalDottedImage}
        alt=""
        className="vertical-dotted-image"
      />
      <GraphIcon className="graph-icon" />
      <Image
        src={TopRightDottedImage}
        alt=""
        className="top-right-dotted-image"
      />
    </div>
  )
}

export default Quality
