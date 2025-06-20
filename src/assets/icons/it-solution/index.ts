import Person from './person.svg'
import RankBadge from './rank-badge.svg'
import Time from './time.svg'
import Tool from './tool.svg'

interface TechSolution {
  name: string
  src: string
}

const techSolution = [
  { name: 'Measurable ROI Delivery', src: Tool },
  { name: 'Expert web development', src: RankBadge },
  { name: '24x7 Support Network', src: Person },
  { name: 'Timely Project Delivery', src: Time },
]

export type { TechSolution }
export { techSolution }
