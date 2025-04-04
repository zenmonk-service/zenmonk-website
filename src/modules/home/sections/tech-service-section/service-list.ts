import { JSX } from 'react'
import { StaticImageData } from 'next/image'
import {
  Gear,
  BriefCase,
  Mobile,
  BriefCasePerson,
} from '@/assets/icons/business'

interface Service {
  id: string
  icon: JSX.Element | StaticImageData
  title: string
  color: string
  description: string
}

const serviceList: Service[] = [
  {
    id: '01',
    icon: Gear,
    title: 'Software Development',
    color: '#41CDD6',
    description:
      'Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ',
  },
  {
    id: '02',
    icon: BriefCase,
    title: 'IT Consulting',
    color: '#41CDD6',
    description:
      'Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ',
  },
  {
    id: '03',
    icon: Mobile,
    title: 'Mobile App Development',
    color: '#A15AFF',
    description:
      'Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ',
  },
  {
    id: '04',
    icon: BriefCasePerson,
    title: 'IT Consulting',
    color: '#48B95C',
    description:
      'Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ',
  },
  {
    id: '05',
    icon: Gear,
    title: 'Software Development',
    color: '#41CDD6',
    description:
      'Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ',
  },
  {
    id: '06',
    icon: BriefCase,
    title: 'IT Consulting',
    color: '#41CDD6',
    description:
      'Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ',
  },
  {
    id: '07',
    icon: BriefCasePerson,
    title: 'IT Consulting',
    color: '#48B95C',
    description:
      'Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ',
  },
  // {
  //   id: '09',
  //   icon: BriefCasePerson,
  //   title: 'IT Consulting',
  //   color: '#48B95C',
  //   description:
  //     'Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ',
  // },
  // {
  //   id: '10',
  //   icon: BriefCasePerson,
  //   title: 'IT Consulting',
  //   color: '#48B95C',
  //   description:
  //     'Develop your online presence with Tec-Sense Web development. Innovative, successful websites that engage and convert clients set  your your organization Tec-Sense web development. Innovative, successful websites that engage and convert clients set your organization apart online. that engage and convert clients set your organization apart online. ',
  // },
]

export { serviceList }
export type { Service }
