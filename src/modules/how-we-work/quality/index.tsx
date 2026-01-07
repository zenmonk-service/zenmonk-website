import Image from 'next/image'
import {
  Quality as QualityImg,
  GraphIcon,
  QualityImgMobile,
} from '@/modules/how-we-work/assets'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import TopRightDottedImage from '../assets/quality/top-right-dotted.png'
import VerticalDottedImage from '../assets/quality/vertical-dotted.png'
import { StatsCircle } from './components/stats-circle'
import './styles.scss'


const Quality = () => {
  return (
    <div className="quality-hero-section-wrapper">
      <div className="first-section">
        <div className="first-section-content">
          <SectionTitle
            align="left"
            text="Our Promise of Quality Analysis"
            markText="Analysis"
            markTextProps={{
              style: {
                marginTop: "-0.4vw"
              }
            }}
          />
          <SectionDescription
            className="subheading"
            text=" We deliver Zen-inspired precise, mindful solutions by integrating deep
                  expertise with client collaboration; prioritizing transparency,
                  innovation, and purposeful development to innovate impactful
                  technology."
          />
        </div>

        <div className="stats-img-container">
          <StatsCircle
            percentage={70}
            value="350"
            label="Daily"
            subLabel="Stand-ups"
            color="#5CD65F" // Greenish
          />
          <StatsCircle
            percentage={75}
            value="350"
            label="Sprint"
            subLabel="Planning"
            color="#6DD4DC" // Cyan
          />
          <StatsCircle
            percentage={65}
            value="350"
            label="Backlog"
            subLabel="Refinement"
            color="#637BFF" // Blue
          />
        </div>
      </div>
      <div className="quality-img-container">
        <Image src={QualityImg} alt="quality-img" className="quality-img" fill />
      </div>
      <Image
        src={QualityImg}
        alt="quality-img-mobile"
        className="quality-img-mobile"
        style={{ width: '100%', height: 'auto', maxWidth: '622px' }}
      />

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
