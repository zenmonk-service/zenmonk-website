'use client'

import { SectionTitle } from '@/shared/typography'
import CraftCollabSvg from '../assets/craft-collab.svg'
import SupportSvg from '../assets/support.svg'
import AimSvg from '../assets/aim.svg'
import DeadlineSvg from '../assets/deadline.svg'
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
          <CraftCollabSvg />
          <div className="text-container">
            <h3 className="title">We Listen, We Learn, Understand, Then Build</h3>
            <p className="description">{commonDescription}</p>
          </div>
        </div>

        <div className="card">
          <SupportSvg />
          <div className="text-container">
            <h3 className="title">Less Than 24 Hours Guaranteed Response</h3>
            <p className="description">{commonDescription}</p>
          </div>
        </div>

        <div className="card">
          <AimSvg />
          <div className="text-container">
            <h3 className="title">Meet Your Revenue Goal</h3>
            <p className="description">{commonDescription}</p>
          </div>
        </div>

        <div className="card">
          <DeadlineSvg />
          <div className="text-container">
            <h3 className="title">Handle Tight Deadlines</h3>
            <p className="description">{commonDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
