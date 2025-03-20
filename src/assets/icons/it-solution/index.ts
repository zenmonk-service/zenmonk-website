import Person from './person.svg'
import RankBadge from './rank-badge.svg'
import Time from './time.svg'
import Tool from './tool.svg'

interface TechSolution {
  name: string
  src: string
}

const techSolution = [
  { name: 'Customizable workflow', src: Tool },
  { name: 'Quality web development', src: RankBadge },
  { name: '24x7 customer support', src: Person },
  { name: 'Deliver project on time', src: Time },
]

export type { TechSolution }
export { techSolution }
