import Image from 'next/image'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import VerticalDottedImage from '../hero-section/assets/dotted-background.svg'
import { Quotes, GraphIcon, DashedArrow } from './assets'
import Background from "./assets/background.svg"
import QualityImgMobile from './assets/Image.png'
import TopRightDottedImage from './assets/top-right-dotted.png'
import { StatsCircle } from './components/stats-circle'
import './styles.scss'

const Quality = () => {
  return (
    <div className="quality-hero-section-wrapper">
      <Background className="quality-background" />
      <div className="first-section">
        <div className="first-section-content">
          <SectionTitle
            align="left"
            className="quality-title"
            text="Our Promise of Quality Analysis"
            markText="Analysis"
            markTextProps={{
              style: {
                marginTop: '-0.4vw',
              },
            }}
          />
          <SectionDescription
            className="subheading"
            text="We deliver Zen-inspired precise, mindful solutions by integrating deep
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
            color="#5CD65F"
          />
          <StatsCircle
            percentage={75}
            value="350"
            label="Sprint"
            subLabel="Planning"
            color="#6DD4DC"
          />
          <StatsCircle
            percentage={65}
            value="350"
            label="Backlog"
            subLabel="Refinement"
            color="#637BFF"
          />
        </div>
      </div>
      <div className="quality-img-container">
        {/* <Image
          src={QualityImg}
          alt="quality-img"
          className="quality-img"
          fill
        /> */}
        <DashedArrow className="quality-img-dashed-arrow" />
        <div className="quality-img-1-container">
          <Quotes className="quality-img-quotes" />
          <div className="quality-img-1" />
        </div>
        <div className="quality-img-2" />
      </div>
      <Image
        src={QualityImgMobile}
        alt="quality-img-mobile"
        className="quality-img-mobile"
        style={{ width: '100%', height: 'auto' }}
      />

      {/* <VerticalDottedImage className="vertical-dotted-image" /> */}
      {/* <GraphIcon className="graph-icon" /> */}
      {/* <Image
        src={TopRightDottedImage}
        alt=""
        className="top-right-dotted-image"
      /> */}
    </div>
  )
}

export default Quality
