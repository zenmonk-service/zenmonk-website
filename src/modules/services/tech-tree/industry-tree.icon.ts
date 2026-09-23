import AwsIcon from './assets/industry-tree/aws.svg'
import DotnetIcon from './assets/industry-tree/dotnet.svg'
import MysqlIcon from './assets/industry-tree/mysql.svg'
import NodeIcon from './assets/industry-tree/node.svg'
import PowerBiIcon from './assets/industry-tree/power-bi.svg'
import PythonIcon from './assets/industry-tree/python.svg'

export const IndustryTreeIcons = [
  {
    icon: MysqlIcon,
    position: 'top-leaf',
    label: 'MySQL',
    backgroundColor: '#E9F5FE',
    padding: 'max(8px, 0.65vw)',
  },
  {
    icon: PowerBiIcon,
    position: 'top-leaf-right',
    label: 'Power BI',
    backgroundColor: '#FFF6DB',
    padding: 'max(8px, 0.6vw)',
  },
  {
    icon: PythonIcon,
    position: 'bottom-right-leaf',
    label: 'Python',
    backgroundColor: '#FFF6DB',
    padding: 'max(10px, 0.8vw)',
  },
  {
    icon: DotnetIcon,
    position: 'top-left-leaf',
    label: '.NET',
    backgroundColor: '#F1EAF8',
    padding: 'max(10px, 0.8vw)',
  },
  {
    icon: AwsIcon,
    position: 'bottom-left-leaf',
    label: 'AWS',
    backgroundColor: '#FFF3E6',
    padding: 'max(8px, 0.65vw)',
  },
  {
    icon: NodeIcon,
    position: 'top-filler-leaf',
    label: 'Node Js',
    backgroundColor: '#EEF6ED',
    padding: 'max(8px, 0.65vw)',
    style: { width: '15%', top: '48%', left: '46.5%' },
  },
]
