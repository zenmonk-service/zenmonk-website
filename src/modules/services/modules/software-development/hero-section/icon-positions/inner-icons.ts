import { generateCircularPositions, innerBaseIcons, outerBaseIcons } from "./icons-positions"

const innerIconsAll = [
  innerBaseIcons[0], // Git
  innerBaseIcons[2], // Node
  innerBaseIcons[4], // RabbitMQ
  outerBaseIcons[1], // React
  innerBaseIcons[2], // Node
  innerBaseIcons[4],
  outerBaseIcons[1], // React
  outerBaseIcons[4], // Docker - 150 deg
  outerBaseIcons[0], // Docker - 150 deg
]

const innerPositions = generateCircularPositions(
  innerIconsAll.length,
  260, // Optimized to touch 500px circle
  42   // Diamond placement
)

const innerIcons = innerIconsAll.map((icon, i) => ({
  ...icon,
  id: `${icon.name}-${i}`,
  ...innerPositions[i],
}))

export default innerIcons