import {
  Gear,
  BriefCase,
  Mobile,
  BriefCasePerson,
} from '@/assets/icons/business'

interface Service {
  id: string
  Icon: any
  title: string
  color: string
  hoverColor: string
  description: string
}

const serviceList: Service[] = [
  {
    id: '01',
    Icon: Gear,
    title: 'Software Development',
    color: '#41CDD6',
    hoverColor: '#ecfafb',
    description:
      'Zenmonk excels in custom enterprise software development, delivering scalable and secure solutions. We provide end-to-end support from legacy modernization to deployment, ensuring optimal software performance tailored to your business needs.',
  },
  {
    id: '02',
    Icon: BriefCase,
    title: 'Growth & Marketing',
    color: '#3C95DB',
    hoverColor: '#ecf4fb',
    description:
      'Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ',
  },
  {
    id: '03',
    Icon: Mobile,
    title: 'Mobile App Development',
    color: '#A15AFF',
    hoverColor: '#f6efff',
    description:
      'Need a game-changing mobile and web app? We create transformative mobile & web applications for businesses using agile methodologies. Let us redefine your app experience together.',
  },
  {
    id: '04',
    Icon: BriefCasePerson,
    title: 'IT Training & Workshops',
    color: '#48B95C',
    hoverColor: '#edf8ef',
    description:
      'Need a SaaS solution tailored to your business strategy? We specialize in developing scalable & innovative software-as-a-service solutions that optimize your business processes, enhance efficiency, and drive growth. Let us build your SaaS success.',
  },
  {
    id: '05',
    Icon: Gear,
    title: 'Product Development',
    color: '#41CDD6',
    hoverColor: '#ecfafb',
    description:
      'Need a standout product design? From conceptualization to prototyping, we ensure your product not only meets market demands but excels in user experience. Let us transform your vision into an exceptional product experience.',
  },
  {
    id: '06',
    Icon: BriefCase,
    title: 'Industry-Specific Solutions',
    color: '#3C95DB',
    hoverColor: '#ecf4fb',

    description:
      'Need AI to revolutionize your business? We are your experts. From pilot projects to full-scale AI integration, we provide intelligent solutions to boost efficiency and innovation. Let us empower your business with innovative AI tools and services.',
  },
  {
    id: '07',
    Icon: Mobile,
    title: 'IT & Business Consultations',
    color: '#A15AFF',
    hoverColor: '#f6efff',
    description:
      'Need expert guidance? We partner with you to improve your software architecture and craft a tech-focused roadmap. From strategy to execution, our consultants ensure seamless digital transformation.',
  },
  {
    id: '08',
    Icon: BriefCasePerson,
    title: 'Cloud Development',
    color: '#48B95C',
    hoverColor: '#edf8ef',
    description:
      'Need a cloud solution that adapts to your business needs? We design agile, scalable, and secure cloud environments, allowing you to focus on growth while we manage the technical complexities.',
  },
  {
    id: '09',
    Icon: Gear,
    title: 'UI/UX Design',
    color: '#41CDD6',
    hoverColor: '#ecfafb',
    description:
      'Want to transform user interactions? We design intuitive and engaging experiences that make every touchpoint seamless and enjoyable. Let us enhance your interface with precision and creativity.',
  },
  {
    id: '10',
    Icon: BriefCase,
    title: 'AI Based Softwares',
    color: '#3C95DB',
    hoverColor: '#ecf4fb',
    description:
      'Looking to revolutionize your digital landscape? Together, let us navigate your digital path and equip your company with advanced analytics, seamless integration, and automation for sustained growth and agility.',
  },
]

export { serviceList }
export type { Service }
