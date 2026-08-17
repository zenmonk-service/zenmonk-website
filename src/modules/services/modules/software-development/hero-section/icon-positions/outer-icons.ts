import { generateCircularPositions, outerBaseIcons } from "./icons-positions"

const outerIconsAll = [
  outerBaseIcons[6], // Node (Top) - 90 deg
  outerBaseIcons[4], // Docker - 60 deg
  outerBaseIcons[3], // Git - 30 deg
  outerBaseIcons[2], // REST - 0 deg
  // innerBaseIcons[4], // RabbitMQ - 240 deg
  outerBaseIcons[1], // React - 330 deg
  outerBaseIcons[5], // Mongo - 300 deg
  outerBaseIcons[6], // Node (Bottom) - 270 deg
  outerBaseIcons[5], // Mongo - 210 deg
  outerBaseIcons[0], // Next.js - 120 deg
  outerBaseIcons[2], // REST - 180 deg
  outerBaseIcons[4], // Docker - 150 deg
]

const outerPositions = generateCircularPositions(
  outerIconsAll.length,
  330, // Radius for outer circle (660px diameter)
  15 // Slightly rotated clockwise to ensure zero overlap with inner ring icons
)

const outerIcons = outerIconsAll.map((icon, i) => ({
  ...icon,
  id: `${icon.name}-outer-${i}`,
  ...outerPositions[i],
}))

export default outerIcons