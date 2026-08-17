'use client'

import { SectionTitle } from '@/shared/typography'
import CraftCollabSvg from '../assets/craft-collab.svg'
import SupportSvg from '../assets/support.svg'
import DeadlineSvg from '../assets/deadline.svg'
import LatestTechSvg from '../assets/latest-tech.svg'
import './mobile.styles.scss'

export default function WhyChooseUSMobile() {
  const commonDescription = "Designs & develops experiences that help you innovate and grow"

  return (
    <div className="why-choose-us-mobile-container">
      <SectionTitle
        text="Elevate your tech journey with Zenmonk"
        markText="Zenmonk"
      />
      <div className="card-container">
        <div className="card">
          <div className="icon-wrapper">
            <CraftCollabSvg />
          </div>
          <div className="text-container">
            <h3 className="title">We Listen, We Learn, Understand, Then Build</h3>
            <p className="description">{commonDescription}</p>
          </div>
        </div>

        <div className="card">
          <div className="icon-wrapper">
            <SupportSvg />
          </div>
          <div className="text-container">
            <h3 className="title">Less Than 24 Hours Guaranteed Response</h3>
            <p className="description">{commonDescription}</p>
          </div>
        </div>

        <div className="card">
          <div className="icon-wrapper">
            <DeadlineSvg />
          </div>
          <div className="text-container">
            <h3 className="title">Meet Your Revenue Goal</h3>
            <p className="description">{commonDescription}</p>
          </div>
        </div>

        <div className="card">
          <div className="icon-wrapper">
            <LatestTechSvg />
          </div>
          <div className="text-container">
            <h3 className="title">Handle Tight Deadlines</h3>
            <p className="description">{commonDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

