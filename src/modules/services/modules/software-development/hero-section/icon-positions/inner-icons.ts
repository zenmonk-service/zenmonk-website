import { generateRandomPositions, innerBaseIcons } from "./icons-positions"

const innerIconsAll = [...innerBaseIcons, ...innerBaseIcons] // 10 icons

const innerPositions = generateRandomPositions(
  innerIconsAll.length,
  240, // Match filled-circle radius (500/2)
  250,
  35   // Good angle separation
)
const innerIcons = innerIconsAll.map((icon, i) => ({
  ...icon,
  id: `${icon.name}-${i}`,
  ...innerPositions[i],
}))

export default innerIcons