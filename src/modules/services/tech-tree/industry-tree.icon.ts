import AwsIcon from './assets/industry-tree/aws.svg'
import DotnetIcon from './assets/industry-tree/dotnet.svg'
import MysqlIcon from './assets/industry-tree/mysql.svg'
import NodeIcon from './assets/industry-tree/node.svg'
import PowerBiIcon from './assets/industry-tree/power-bi.svg'
import PythonIcon from './assets/industry-tree/python.svg'

export const IndustryTreeIcons = [
  {
    icon: PythonIcon,
    position: 'top',
    label: 'Python',
    backgroundColor: '#FFF6DB',
  },
  {
    icon: DotnetIcon,
    position: 'top-leaf',
    label: '.NET',
    backgroundColor: '#F1EAF8',
  },
  {
    icon: PowerBiIcon,
    position: 'top-leaf-right',
    label: 'Power BI',
    backgroundColor: '#FFF6DB',
  },
  {
    icon: MysqlIcon,
    position: 'bottom-right-leaf',
    label: 'MySQL',
    backgroundColor: '#E9F5FE',
  },
  {
    icon: AwsIcon,
    position: 'bottom-left-leaf',
    label: 'AWS',
    backgroundColor: '#FFF3E6',
  },
  {
    icon: NodeIcon,
    position: 'top-left-leaf',
    label: 'Node Js',
    backgroundColor: '#EEF6ED',
  },
]
