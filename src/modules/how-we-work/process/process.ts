import CareIcon from './assets/care.svg'
import MessageIcon from './assets/message.svg'
import NotePadIcon from './assets/notepad.svg'
import PeopleIcon from './assets/people.svg'
import RocketIcon from './assets/rocket.svg'

export const processes = [
  {
    Icon: MessageIcon,
    color: '#2EC2CC',
    title: 'Understanding Challenges',
    description:
      'Tell us your vision, big or small. Whether you need a custom solution.',
    className: 'understanding-challenges',
    animations: {
      initial: { x: -40, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  },
  {
    Icon: PeopleIcon,
    color: '#A263F5',
    title: 'Systematic Planning',
    description:
      'Tell us your vision, big or small. Whether you need a custom solution.',
    className: 'systematic-planning',
    animations: {
      initial: { x: -40, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  },
  {
    Icon: NotePadIcon,
    color: '#6CC77D',
    title: 'Meticulous Designing',
    description:
      'Tell us your vision, big or small. Whether you need a custom solution.',
    className: 'meticulous-designing',
    animations: {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
  },
  {
    Icon: RocketIcon,
    color: '#3C95DB',
    title: 'Authentic Execution',
    description:
      'Tell us your vision, big or small. Whether you need a custom solution.',
    className: 'authentic-execution',
    animations: {
      initial: { x: 40, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  },
  {
    Icon: CareIcon,
    color: '#FA579A',
    title: 'Reflect & Refine',
    description:
      'Tell us your vision, big or small. Whether you need a custom solution.',
    className: 'reflect-refine',
    animations: {
      initial: { x: 40, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  },
]
