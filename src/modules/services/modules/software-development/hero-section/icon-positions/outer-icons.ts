import { generateRandomPositions, outerBaseIcons } from "./icons-positions"
const outerIconsAll = [...outerBaseIcons, ...outerBaseIcons.slice(0, 5)] // 12 icons total

const outerPositions = generateRandomPositions(
  outerIconsAll.length,
  330, // Match hollow.svg radius (680/2 = 340)
  340,
  25
)

const outerIcons = outerIconsAll.map((icon, i) => ({
  ...icon,
  id: `${icon.name}-${i}`,
  ...outerPositions[i],
}))

export default outerIcons