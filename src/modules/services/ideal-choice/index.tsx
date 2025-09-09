import { SectionDescription, SectionTitle } from '@/shared/typography'
import COST_EFFECTIVE from './assets/cost_effective.svg'
import EXPERT_KNOWLEDGE from './assets/expert_knowledge.svg'
import ON_TIME from './assets/on_time.svg'
import PROVEN_SUCCESS from './assets/proven_sucess.svg'
import SUPPORT from './assets/support.svg'
import './styles.scss'

const YourIdealChoice = () => {
  const ChoicesData = [
    {
      icon: PROVEN_SUCCESS,
      title: 'Proven Success',
      description: 'A history of successful projects and satisfied clients.',
    },
    {
      icon: EXPERT_KNOWLEDGE,
      title: 'Expert Knowledge',
      description: 'Deep insights and innovative solutions for your business.',
    },
    {
      icon: ON_TIME,
      title: 'On-Time Delivery',
      description: 'Delivering projects right on schedule, every time.',
    },
    {
      icon: COST_EFFECTIVE,
      title: 'Cost-Effective & Scalable Solutions',
      description: 'Designed to be both budget-friendly and adaptable.',
    },
    {
      icon: SUPPORT,
      title: '24/7 Support',
      description: 'A dedicated support team is available round the clock ',
    },
  ]

  return (
    <div className="your-ideal-choice">
      <div className="first-container">
        <SectionTitle
          text="Why Our Expertise is Your Ideal Choice"
          markText="expertise"
          align="left"
          className="title"
          markTextProps={{ rotate: 5 }}
        />
        <SectionDescription
          text="See how our expert insights are prominent fit for your unique
          challenges."
          className="description"
        />
      </div>

      {ChoicesData.map(({ icon: Icon, title, description }: any) => {
        return (
          <div className="container" key={title}>
            <Icon className="icon" />
            <p className="title">{title}</p>
            <p className="description">{description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default YourIdealChoice
