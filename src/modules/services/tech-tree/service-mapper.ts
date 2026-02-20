import DevTechTreeBackground from './dev-tree-background'
import { DevTreeIcons } from './dev-tree.icon'
import UiTechTreeBackground from './ui-tree-background/ui-tech-tree-background'
import { UITreeIcons } from './ui-tree.icon'

export const getTreeIconsByServiceId = (serviceId: string) => {
  switch (serviceId) {
    case 'ui-ux-design':
      return {
        treeIcons: UITreeIcons,
        background: UiTechTreeBackground,
      }
    default:
      return {
        treeIcons: DevTreeIcons,
        background: DevTechTreeBackground,
      }
  }
}
