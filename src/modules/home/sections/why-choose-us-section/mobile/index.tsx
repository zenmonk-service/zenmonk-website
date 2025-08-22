import { SectionTitle } from '@/shared/typography'
import IdeaSvg from '../assets/craft-collab.svg'
import TimelineSvg from '../assets/deadline.svg'
import TechSvg from '../assets/latest-tech.svg'
import SupportSvg from '../assets/support.svg'
import './mobile.styles.scss'

export default function WhyChooseUSMobile() {
  return (
    <div className="why-choose-us-mobile-container">
      <SectionTitle
        text="Elevate your tech journey with Zenmonk"
        markText="Zenmonk"
      />
      <div className="card-container">
        <div className="card">
          <IdeaSvg />
          <div>
            <p className="title">We Comprehend, Customize, and Create</p>
            <p className="description">
              Understanding your unique needs to craft tailored software with
              precision.
            </p>
          </div>
        </div>
        <div className="card">
          <SupportSvg />
          <div>
            <p className="title">24/7 Support with Quick Response</p>
            <p className="description">
              Available round the clock extending guaranteed response within 24
              hours
            </p>
          </div>
        </div>
        <div className="card">
          <TimelineSvg />
          <div>
            <p className="title">
              Latest Tech Solutions for your business goals
            </p>
            <p className="description">
              Real business results for companies with the goal of growing
              revenue
            </p>
          </div>
        </div>
        <div className="card">
          <TechSvg />
          <div>
            <p className="title">Handle Tight Deadlines</p>
            <p className="description">
              Designs & develops experiences that help you innovate and grow
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
