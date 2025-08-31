'use client'

import { SectionDescription, SectionTitle } from '@/shared/typography'
import M1 from '../assets/c11.svg'
import M2 from '../assets/c22.svg'
import M3 from '../assets/c33.svg'
import M4 from '../assets/c44.svg'
import './mobile.styles.scss'

const arr = [
  {
    Icon: M1,
    title: 'Previous work dissatisfaction',
    description:
      "Want business growth? But, not satisfied with the results. Don't worry! Zenmonk got you all covered with result-driven business strategies.",
    color: '#4FD0FF',
  },

  {
    Icon: M2,
    title: 'Engagement and Resolution',
    description:
      'Start by sharing ideas and long-term vision of your business with us. Whether you want customised solutions or overall growth, we have got you all covered!',
    color: '#FFB100',
  },

  {
    Icon: M3,
    title: 'Delivering Beyond Expectations',
    description:
      'Your satisfaction is our priority. With the help of an expert team and years of experience, we create an excellent planning strategy for your business.',
    color: '#D900B1',
  },

  {
    Icon: M4,
    title: 'Celebrating Success and Loyalty',
    description:
      'We ensure successful results by boosting ROI, generating high profits, enhancing user interface and increasing brand authority.',
    color: '#C0D900',
  },
]

const ClientSatisfactionMobile = () => {
  return (
    <div className="client-satisfaction-mobile">
      <SectionTitle
        text="The Evolution of Client Satisfaction"
        markText="Satisfaction"
        align="center"
        markTextProps={{ rotate: 7 }}
        className="title"
      />
      <SectionDescription
        className="description"
        text=" We transform client dissatisfaction into strategic success, turning challenges into growth through innovation."
      />
      <div className="emoji-wrapper">
        {arr.map(({ Icon, title, description, color }) => {
          return (
            <div className="emoji" key={title}>
              <Icon />
              <p className="title" style={{ color }}>
                {title}
              </p>
              <p className="description">{description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ClientSatisfactionMobile
