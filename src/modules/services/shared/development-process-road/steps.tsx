
export const steps = [
  {
    id: 1,
    title: 'Requirements & Discovery',
    description: 'Understanding user journeys, core feature requirements, and technical constraints.',
    color: '#00D4CE',
  },
  {
    id: 2,
    title: 'Prototyping & UX Design',
    description: 'Creating interactive wireframes and intuitive interfaces tailored to all devices.',
    color: '#0078BF',
  },
  {
    id: 3,
    title: 'Custom App Coding',
    description: 'Developing robust frontend and backend logic using cutting-edge native and hybrid stacks.',
    color: '#FF8546',
  },
  {
    id: 4,
    title: 'Quality & Testing',
    description: 'Performing end-to-end device testing, cross-browser validation, and security audits.',
    color: '#A263F5',
  },
  {
    id: 5,
    title: 'Store & Cloud Deployment',
    description: 'Handling seamless app store submissions, web publishing, and cloud infrastructure setup.',
    color: '#DD57B0',
  },
  {
    id: 6,
    title: 'Continuous Optimization',
    description: 'Providing active maintenance, user feedback iteration, and feature enhancements.',
    color: '#22B553',
  },
]

export const StepTitlePlate = ({
  title,
  color,
  icon,
  description,
}: {
  title: string
  color: string
  icon: React.ReactNode
  description: string
}) => {
  return (
    <div className="step-title-plate">
      <div className="plate-icon-wrapper">{icon}</div>
      <div className="plate-text-container">
        <span className="plate-text" style={{ color }}>
          {title}
        </span>
        <p className="plate-description">{description}</p>
      </div>
    </div>
  )
}

