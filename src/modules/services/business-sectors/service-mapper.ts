import { sectorsList as defaultSectorsList } from './sectors-list'

// Frontend Icons
import ReactSvg from '../tech-tree/assets/dev-tree/react.svg'
import NextjsSvg from '../tech-tree/assets/dev-tree/nextjs.svg'
import TsSvg from '../tech-tree/assets/dev-tree/ts.svg'
import AngularSvg from '../tech-tree/assets/dev-tree/angular.svg'
import {
  VueSvg,
  TailwindSvg,
  GraphqlSvg,
  MicroservicesSvg,
  ModularMonolithSvg,
  ResilientMessagingSvg,
  EventDrivenSvg,
  RedisSvg,
  CicdSvg,
  TerraformSvg,
  FullstackSvg,
  WebSocketsSvg,
  FrontendTrackSvg,
  BackendTrackSvg,
  ArchitectureTrackSvg,
  CloudTrackSvg,
  MobileTrackSvg,
} from './assets/it-training'

// Backend Icons
import NodeSvg from '../tech-tree/assets/dev-tree/node.svg'
import NestjsSvg from '../tech-tree/assets/dev-tree/nestjs.svg'
import PythonSvg from '../tech-tree/assets/ai-solutions-tree/python.svg'
import PostgresqlSvg from '../tech-tree/assets/dev-tree/postgresql.svg'
import MongoSvg from '../tech-tree/assets/dev-tree/mongo.svg'

// Cloud & DevOps Icons
import AwsSvg from '../tech-tree/assets/cloud-development-tree/aws.svg'
import DockerSvg from '../tech-tree/assets/dev-tree/docker.svg'
import KubernetesSvg from '../tech-tree/assets/dev-tree/kubernetes.svg'
import AzureSvg from '../tech-tree/assets/dev-tree/azure.svg'

// Architecture Icons
import RabbitmqSvg from '../tech-tree/assets/dev-tree/rabbitmq.svg'

// Mobile Icons
import FlutterSvg from '../tech-tree/assets/custom-app-development-tree/flutter.svg'
import IosSvg from '../tech-tree/assets/custom-app-development-tree/ios.svg'
import AndroidSvg from '../tech-tree/assets/custom-app-development-tree/android.svg'

export const itTrainingTracksList = [
  {
    id: 1,
    sector: 'Frontend Development',
    image: FrontendTrackSvg,
    services: [
      {
        title: 'React.js & Redux',
        background: '#EBFEFF',
        image: ReactSvg,
      },
      {
        title: 'Next.js & SSR',
        background: '#EBF6FF',
        image: NextjsSvg,
      },
      {
        title: 'TypeScript & Modern JS',
        background: '#EEFFF1',
        image: TsSvg,
      },
      {
        title: 'Angular Framework',
        background: '#F8F2FF',
        image: AngularSvg,
      },
      {
        title: 'Vue.js Ecosystem',
        background: '#FFFDE8',
        image: VueSvg,
      },
      {
        title: 'Tailwind CSS & UI Systems',
        background: '#FFF2EE',
        image: TailwindSvg,
      },
    ],
  },
  {
    id: 2,
    sector: 'Backend Development',
    image: BackendTrackSvg,
    services: [
      {
        title: 'Node.js & Express.js',
        background: '#EBFEFF',
        image: NodeSvg,
      },
      {
        title: 'NestJS Architecture',
        background: '#EBF6FF',
        image: NestjsSvg,
      },
      {
        title: 'Python & Django / FastAPI',
        background: '#EEFFF1',
        image: PythonSvg,
      },
      {
        title: 'PostgreSQL & Database Design',
        background: '#F8F2FF',
        image: PostgresqlSvg,
      },
      {
        title: 'MongoDB & NoSQL',
        background: '#FFFDE8',
        image: MongoSvg,
      },
      {
        title: 'REST & GraphQL APIs',
        background: '#FFF2EE',
        image: GraphqlSvg,
      },
    ],
  },
  {
    id: 3,
    sector: 'Software Architecture',
    image: ArchitectureTrackSvg,
    services: [
      {
        title: 'Microservices Architecture',
        background: '#EBFEFF',
        image: MicroservicesSvg,
      },
      {
        title: 'Modular Monolith Design',
        background: '#EBF6FF',
        image: ModularMonolithSvg,
      },
      {
        title: 'RabbitMQ & Message Queues',
        background: '#EEFFF1',
        image: RabbitmqSvg,
      },
      {
        title: 'Resilient Message Handling',
        background: '#F8F2FF',
        image: ResilientMessagingSvg,
      },
      {
        title: 'Event-Driven Architecture',
        background: '#FFFDE8',
        image: EventDrivenSvg,
      },
      {
        title: 'Distributed Caching & Redis',
        background: '#FFF2EE',
        image: RedisSvg,
      },
    ],
  },
  {
    id: 4,
    sector: 'Cloud & DevOps',
    image: CloudTrackSvg,
    services: [
      {
        title: 'AWS Cloud Architecture',
        background: '#EBFEFF',
        image: AwsSvg,
      },
      {
        title: 'Docker Containerization',
        background: '#EBF6FF',
        image: DockerSvg,
      },
      {
        title: 'Kubernetes Orchestration',
        background: '#EEFFF1',
        image: KubernetesSvg,
      },
      {
        title: 'CI/CD Automated Pipelines',
        background: '#F8F2FF',
        image: CicdSvg,
      },
      {
        title: 'Multi-Cloud (Azure & GCP)',
        background: '#FFFDE8',
        image: AzureSvg,
      },
      {
        title: 'Infrastructure as Code (Terraform)',
        background: '#FFF2EE',
        image: TerraformSvg,
      },
    ],
  },
  {
    id: 5,
    sector: 'Full Stack & Mobile',
    image: MobileTrackSvg,
    services: [
      {
        title: 'Full Stack MERN / MEAN',
        background: '#EBFEFF',
        image: FullstackSvg,
      },
      {
        title: 'React Native Development',
        background: '#EBF6FF',
        image: ReactSvg,
      },
      {
        title: 'Flutter Cross-Platform Apps',
        background: '#EEFFF1',
        image: FlutterSvg,
      },
      {
        title: 'iOS (Swift) Development',
        background: '#F8F2FF',
        image: IosSvg,
      },
      {
        title: 'Android (Kotlin) Apps',
        background: '#FFFDE8',
        image: AndroidSvg,
      },
      {
        title: 'WebSockets & Real-Time Apps',
        background: '#FFF2EE',
        image: WebSocketsSvg,
      },
    ],
  },
]

export interface BusinessSectorsData {
  title: string
  markText: string
  description: string
  sectorsList: typeof defaultSectorsList
}

export const getBusinessSectorsData = (serviceId?: string): BusinessSectorsData => {
  switch (serviceId) {
    case 'it-training-and-workshops':
    case 'it-training-&-workshops':
      return {
        title: 'Master Modern Tech Stacks Across Core Disciplines',
        markText: 'Disciplines',
        description:
          'We deliver comprehensive, hands-on training and workshops led by seasoned engineers—empowering developers and teams to master modern tech stacks, architectural patterns, and production-grade software engineering.',
        sectorsList: itTrainingTracksList as unknown as typeof defaultSectorsList,
      }

    default:
      return {
        title: 'Empowering Businesses Across Multiple Sectors',
        markText: 'Sectors',
        description:
          'We deliver innovative software solutions across industries, empowering businesses to overcome challenges, drive growth, and achieve success',
        sectorsList: defaultSectorsList,
      }
  }
}
