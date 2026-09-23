import AwsIcon from './assets/product-development-tree/aws.svg'
import AzureIcon from './assets/product-development-tree/azure.svg'
import FigmaIcon from './assets/product-development-tree/figma.svg'
import GcpIcon from './assets/product-development-tree/gcp.svg'
import GithubIcon from './assets/product-development-tree/github.svg'
import GitlabIcon from './assets/product-development-tree/gitlab.svg'
import NodeIcon from './assets/product-development-tree/node.svg'
import ReactIcon from './assets/product-development-tree/react.svg'
import RubyIcon from './assets/product-development-tree/ruby.svg'
import TypescriptIcon from './assets/product-development-tree/typescript.svg'

export const ProductDevelopmentTreeIcons = [
  {
    icon: ReactIcon,
    position: 'top',
    label: 'React Js',
    backgroundColor: 'rgba(97, 218, 251, 0.14)',
    padding: 'max(7px, 0.55vw)',
  },
  {
    icon: FigmaIcon,
    position: 'top-leaf',
    label: 'Figma',
    backgroundColor: '#E9F5FE',
    padding: 'max(13px, 1.0vw)',
  },
  {
    icon: AwsIcon,
    position: 'top-leaf-right',
    label: 'AWS',
    backgroundColor: '#FFF6DB',
    padding: 'max(7px, 0.55vw)',
  },
  {
    icon: AzureIcon,
    position: 'bottom-right-leaf',
    label: 'Azure',
    backgroundColor: '#EBF7FD',
    padding: 'max(12px, 0.95vw)',
  },
  {
    icon: GithubIcon,
    position: 'bottom-left-leaf',
    label: 'GitHub',
    backgroundColor: '#000000',
    padding: 'max(8px, 0.7vw)',
  },
  {
    icon: RubyIcon,
    position: 'top-left-leaf',
    label: 'Ruby',
    backgroundColor: '#FCE9EE',
    padding: 'max(14px, 1.15vw)',
  },
  {
    icon: GitlabIcon,
    position: 'left-filler-leaf',
    label: 'GitLab',
    backgroundColor: '#FFF0E6',
    padding: 'max(7px, 0.55vw)',
    style: { width: '15%', top: '38%', left: '0%' },
  },
  {
    icon: NodeIcon,
    position: 'top-filler-leaf',
    label: 'Node Js',
    backgroundColor: '#EEF6ED',
    padding: 'max(5px, 0.4vw)',
  },
  {
    icon: TypescriptIcon,
    position: 'top-left-filler-leaf',
    label: 'TypeScript',
    backgroundColor: 'rgba(0, 120, 207, 0.1)',
    padding: 'max(7px, 0.55vw)',
  },
  {
    icon: GcpIcon,
    position: 'bottom-middle-filler-leaf',
    label: 'Google Cloud',
    backgroundColor: '#EDF3FE',
    padding: 'max(6px, 0.5vw)',
    style: { bottom: '31%', width: '11.5%' },
  },
]
