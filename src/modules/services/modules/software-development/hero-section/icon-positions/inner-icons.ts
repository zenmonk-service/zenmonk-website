import { generateCircularPositions, innerBaseIcons, outerBaseIcons } from "./icons-positions"

const innerIconsAll = [
  innerBaseIcons[0], // Git
  innerBaseIcons[1], // Mongo
  innerBaseIcons[2], // Node
  innerBaseIcons[3], // Docker
  innerBaseIcons[4], // RabbitMQ
  outerBaseIcons[1], // React
]

const innerPositions = generateCircularPositions(
  innerIconsAll.length,
  210, // Radius for inner circle (520px diameter)
  0    // Start angle
)

const innerIcons = innerIconsAll.map((icon, i) => ({
  ...icon,
  id: `${icon.name}-${i}`,
  ...innerPositions[i],
}))

export default innerIcons