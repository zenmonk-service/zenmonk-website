import FigmaIcon from './assets/it-training-tree/figma.svg'
import GithubIcon from './assets/it-training-tree/github.svg'
import OfficeIcon from './assets/it-training-tree/office.svg'
import PostmanIcon from './assets/it-training-tree/postman.svg'
import VscodeIcon from './assets/it-training-tree/vscode.svg'

export const ItTrainingTreeIcons = [
  {
    icon: VscodeIcon,
    position: 'top',
    label: 'VS Code',
    backgroundColor: '#E3F2FD',
  },
  {
    icon: FigmaIcon,
    position: 'top-leaf',
    label: 'Figma',
    backgroundColor: '#FDEEF5',
  },
  {
    icon: OfficeIcon,
    position: 'top-leaf-right',
    label: 'Microsoft Office',
    backgroundColor: '#FDF0E9',
  },
  {
    icon: PostmanIcon,
    position: 'bottom-right-leaf',
    label: 'Postman',
    backgroundColor: '#FFE8D9',
  },
  {
    icon: GithubIcon,
    position: 'bottom-left-leaf',
    label: 'GitHub',
    backgroundColor: '#F0F0F0',
  },
]
