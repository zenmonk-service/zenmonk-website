import AngularIcon from './assets/dev-tree/angular.svg'
import AzureIcon from './assets/dev-tree/azure.svg'
import DockerIcon from './assets/dev-tree/docker.svg'
import GCPIcon from './assets/dev-tree/gcp.svg'
import KubernetesIcon from './assets/dev-tree/kubernetes.svg'
import MongoIcon from './assets/dev-tree/mongo.svg'
import NestjsIcon from './assets/dev-tree/nestjs.svg'
import NextjsIcon from './assets/dev-tree/nextjs.svg'
import NodeIcon from './assets/dev-tree/node.svg'
import PostgresqlIcon from './assets/dev-tree/postgresql.svg'
import RabbitMqIcon from './assets/dev-tree/rabbitmq.svg'
import ReactIcon from './assets/dev-tree/react.svg'
import TsIcon from './assets/dev-tree/ts.svg'

export const DevTreeIcons = [
  {
    icon: ReactIcon,
    position: 'top',
    label: 'React Js',
    backgroundColor: 'rgba(97, 218, 251, 0.14)',
  },
  {
    icon: DockerIcon,
    position: 'top-leaf',
    label: 'Docker',
    backgroundColor: '#E9F5FE',
  },
  {
    icon: GCPIcon,
    position: 'top-leaf-right',
    label: 'Google Cloud',
    backgroundColor: '#FFF6DB',
  },
  {
    icon: AzureIcon,
    position: 'bottom-right-leaf',
    label: 'Microsoft Azure',
    backgroundColor: '#EBF7FD',
  },
  {
    icon: KubernetesIcon,
    position: 'bottom-left-leaf',
    label: 'Kubernetes',
    backgroundColor: '#EBF1FD',
  },
  {
    icon: NestjsIcon,
    position: 'top-left-leaf',
    label: 'Nest Js',
    backgroundColor: '#FCE9EE',
  },
  {
    icon: MongoIcon,
    position: 'bottom-filler-leaf',
    label: 'Mongo DB',
    backgroundColor: '#E8F7EE',
  },
  {
    icon: RabbitMqIcon,
    position: 'left-filler-leaf',
    label: 'Rabbit MQ',
    backgroundColor: '#FFF0E6',
  },
  {
    icon: NodeIcon,
    position: 'top-filler-leaf',
    label: 'Node Js',
    backgroundColor: '#EEF6ED',
  },
  {
    icon: TsIcon,
    position: 'top-left-filler-leaf',
    label: 'TypeScript',
    backgroundColor: '#EBF1FD',
  },
  {
    icon: AngularIcon,
    position: 'bottom-left-filler-leaf',
    label: 'Angular',
    backgroundColor: '#FCE6EB',
  },
  {
    icon: NextjsIcon,
    position: 'bottom-middle-filler-leaf',
    label: 'Next Js',
    backgroundColor: '#E6E6E6',
  },
  {
    icon: PostgresqlIcon,
    position: 'bottom-right-filler-leaf',
    label: 'PostgreSQL',
    backgroundColor: '#EBF1FD',
  },
]
