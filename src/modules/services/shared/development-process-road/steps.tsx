
export const steps = [
  {
    id: 1,
    title: 'Conducting In-Depth Analysis',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#00D4CE',
  },
  {
    id: 2,
    title: 'Impressive Designs',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#0078BF',
  },
  {
    id: 3,
    title: 'Development',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#FF8546',
  },
  {
    id: 4,
    title: 'Potential Testing & Monitoring',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#A263F5',
  },
  {
    id: 5,
    title: 'Effectual Delivery & Support',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#DD57B0',
  },
  {
    id: 6,
    title: 'Partnership for Success',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
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

