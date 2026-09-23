import AwsIcon from './assets/cloud-development-tree/aws.svg'
import AzureIcon from './assets/cloud-development-tree/azure.svg'
import DockerIcon from './assets/cloud-development-tree/docker.svg'
import GcpIcon from './assets/cloud-development-tree/gcp.svg'
import KubernetesIcon from './assets/cloud-development-tree/kubernetes.svg'

export const CloudDevelopmentTreeIcons = [
  {
    icon: KubernetesIcon,
    position: 'top-leaf',
    label: 'Kubernetes',
    backgroundColor: '#E9F5FE',
    padding: 'max(10px, 0.8vw)',
    style: { width: '21%', top: '1%', right: '22.5%' },
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
    icon: GcpIcon,
    position: 'top-left-leaf',
    label: 'Google Cloud',
    backgroundColor: '#E0E9FB',
    padding: 'max(10px, 0.75vw)',
  },
  {
    icon: DockerIcon,
    position: 'bottom-left-leaf',
    label: 'Docker',
    backgroundColor: '#E0E9FB',
    padding: 'max(8px, 0.65vw)',
  },
]
