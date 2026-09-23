import DockerIcon from './assets/it-training-tree/docker.svg'
import FigmaIcon from './assets/it-training-tree/figma.svg'
import GithubIcon from './assets/it-training-tree/github.svg'
import OfficeIcon from './assets/it-training-tree/office.svg'
import PostmanIcon from './assets/it-training-tree/postman.svg'
import VscodeIcon from './assets/it-training-tree/vscode.svg'

export const ItTrainingTreeIcons = [
  {
    icon: FigmaIcon,
    position: 'top-leaf',
    label: 'Figma',
    backgroundColor: '#E9F5FE',
    padding: 'max(15px, 1.2vw)',
  },
  {
    icon: PostmanIcon,
    position: 'top-leaf-right',
    label: 'Postman',
    backgroundColor: '#FFF6DB',
    padding: 'max(9px, 0.7vw)',
  },
  {
    icon: GithubIcon,
    position: 'bottom-right-leaf',
    label: 'GitHub',
    backgroundColor: '#EDEDED',
    padding: 'max(14px, 1.1vw)',
  },
  {
    icon: DockerIcon,
    position: 'top-left-leaf',
    label: 'Docker',
    backgroundColor: '#E0E9FB',
    padding: 'max(10px, 0.8vw)',
  },
  {
    icon: OfficeIcon,
    position: 'left-filler-leaf',
    label: 'Microsoft Office',
    backgroundColor: '#FFF0E6',
    padding: 'max(6px, 0.45vw)',
    style: { width: '15%', top: '38%', left: '0%' },
  },
  {
    icon: VscodeIcon,
    position: 'bottom-left-leaf',
    label: 'VS Code',
    backgroundColor: '#E0E9FB',
    padding: 'max(9px, 0.7vw)',
  },
]
