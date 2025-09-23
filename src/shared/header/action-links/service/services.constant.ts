import {
  Gear,
  BriefCase,
  Mobile,
  BriefCasePerson,
} from '@/assets/icons/business'

import {
  growthMarketing,
  industrySpecific,
  itBusiness,
  itTraining,
  mobileDevelopment,
  productDevelopment,
  softwareDevelopment,
  uiUx,
} from './assets'

export const services = [
  {
    name: 'Software Development',
    description:
      'We build scalable and secure software tailored to your business needs.',
    imageUrl: softwareDevelopment,
    route: 'software-development',
  },
  {
    name: 'Mobile App Development',
    description:
      'Creating intuitive and engaging mobile apps for iOS and Android users.',
    imageUrl: mobileDevelopment,
    route: 'mobile-app-development',
  },
  {
    name: 'Product Development',
    description:
      'From idea to launch, we help you craft powerful digital products.',
    imageUrl: productDevelopment,
    route: 'product-development',
  },
  {
    name: 'IT & Business Consultations',
    description:
      'Expert guidance to align technology with your business objectives.',
    imageUrl: itBusiness,
    route: 'it-&-business-consultation',
  },
  {
    name: 'UI/UX Design',
    description:
      'Designing seamless user experiences with clean and modern interfaces.',
    imageUrl: uiUx,
    route: 'ui-ux-design',
  },
  {
    name: 'Growth & Marketing',
    description:
      'Strategies that boost visibility, engagement, and customer retention.',
    imageUrl: growthMarketing,
    route: 'growth-&-marketing',
  },
  {
    name: 'IT Training & Workshops',
    description:
      'Upskill your team with practical, hands-on training and workshops.',
    imageUrl: itTraining,
    route: 'it-training-&-workshops',
  },
  {
    name: 'Industry-Specific Solutions',
    description:
      'Tailored solutions designed to meet your industry’s unique needs.',
    imageUrl: industrySpecific,
    route: 'industry-specific-solutions',
  },
  {
    name: 'Cloud development',
    description:
      'Deploy, scale, and manage apps efficiently with cloud-first solutions.',
    imageUrl: itTraining,
    route: 'cloud-development',
  },
  {
    name: 'AI Based Softwares',
    description:
      'Intelligent solutions powered by AI to drive smarter decisions.',
    imageUrl: industrySpecific,
    route: 'ai-based-softwares',
  },
]
