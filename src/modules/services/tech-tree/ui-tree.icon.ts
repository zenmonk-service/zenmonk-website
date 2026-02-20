import AI from './assets/ui-ux-tree/ai.svg'
import Canva from './assets/ui-ux-tree/canva.svg'
import ChakraUI from './assets/ui-ux-tree/chakra-ui.svg'
import Figma from './assets/ui-ux-tree/figma.svg'
import Invision from './assets/ui-ux-tree/invision.svg'
import MiroBoard from './assets/ui-ux-tree/miro.svg'
import Mui from './assets/ui-ux-tree/mui.svg'
import PhotoShop from './assets/ui-ux-tree/photo-shop.svg'
import XD from './assets/ui-ux-tree/xd.svg'

export const UITreeIcons = [
  {
    icon: Canva,
    position: 'top',
    label: 'Canva',
    backgroundColor: 'rgba(97, 218, 251, 0.14)',
    padding: 'max(6px, 0.72vw)',
  },
  {
    icon: PhotoShop,
    position: 'top-leaf',
    label: 'PhotoShop',
    backgroundColor: '#DEF1FF',
    padding: 'max(12px, 1.25vw)',
  },
  {
    icon: Invision,
    position: 'top-leaf-right',
    label: 'Invision',
    backgroundColor: '#FFF2F5',
    padding: 'max(8px, 0.833vw)',
  },
  {
    icon: Figma,
    position: 'bottom-right-leaf',
    label: 'Figma',
    backgroundColor: '#EBF7FD',
    padding: 'max(20px, 2vw)',
  },
  {
    icon: AI,
    position: 'bottom-left-leaf',
    label: 'Adobe Illustrator',
    backgroundColor: '#FFF7EA',
    padding: 'max(12px, 1.25vw)',
  },
  {
    icon: XD,
    position: 'top-left-leaf',
    label: 'Adobe XD',
    backgroundColor: '#FFDBFD',
    padding: 'max(12px, 1.25vw)',
  },
  {
    icon: Mui,
    position: 'bottom-filler-leaf',
    label: 'Material UI',
    backgroundColor: '#E1F6FF',
  },
  {
    icon: ChakraUI,
    position: 'top-filler-leaf',
    label: 'Chakra UI',
    backgroundColor: '#EEF6ED',
  },
  {
    position: 'top-left-filler-leaf',
    label: '',
    backgroundColor: '#EBF1FD',
  },
  {
    icon: MiroBoard,
    position: 'bottom-middle-filler-leaf',
    label: 'Miro Board',
    backgroundColor: '#FFF5D6',
  },
]
