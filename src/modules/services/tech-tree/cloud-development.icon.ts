import AwsIcon from './assets/cloud-development-tree/aws.svg'
import AzureIcon from './assets/cloud-development-tree/azure.svg'
import GcpIcon from './assets/cloud-development-tree/gcp.svg'
import KubernetesIcon from './assets/cloud-development-tree/kubernetes.svg'

export const CloudDevelopmentTreeIcons = [
  {
    icon: AwsIcon,
    position: 'top',
    label: 'AWS',
    backgroundColor: '#FFF3E6',
  },
  {
    icon: KubernetesIcon,
    position: 'top-leaf',
    label: 'Kubernetes',
    backgroundColor: '#EBF1FD',
  },
  {
    icon: GcpIcon,
    position: 'top-leaf-right',
    label: 'Google Cloud',
    backgroundColor: '#EAF2FE',
  },
  {
    icon: AzureIcon,
    position: 'bottom-right-leaf',
    label: 'Microsoft Azure',
    backgroundColor: '#EBF7FD',
  },
]
