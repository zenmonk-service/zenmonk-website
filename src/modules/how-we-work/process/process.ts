import CareIcon from './assets/care.svg'
import MessageIcon from './assets/message.svg'
import NotePadIcon from './assets/notepad.svg'
import PeopleIcon from './assets/people.svg'
import RocketIcon from './assets/rocket.svg'

export interface ProcessItem {
  Icon: any
  title: string
  description: string
  className: string
  animations: {
    initial: { x?: string | number; y?: string | number; opacity: number }
    animate: { x?: string | number; y?: string | number; opacity: number }
  }
}

export const processes: ProcessItem[] = [
  {
    Icon: MessageIcon,
    title: 'Understanding Challenges',
    description:
      'We listen carefully to understand your goals, constraints, and real challenges.',
    className: 'understanding-challenges',
    animations: {
      initial: { x: '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  },
  {
    Icon: PeopleIcon,
    title: 'Systematic Planning',
    description:
      'Create a clear, structured roadmap aligned with your vision.',
    className: 'systematic-planning',
    animations: {
      initial: { x: '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  },
  {
    Icon: NotePadIcon,
    title: 'Meticulous Designing',
    description:
      'We design thoughtful, user-focused solutions with attention to every detail.',
    className: 'meticulous-designing',
    animations: {
      initial: { y: '-100%', opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
  },
  {
    Icon: RocketIcon,
    title: 'Authentic Execution',
    description:
      'We execute plans transparently, ensuring quality, consistency, and timely delivery.',
    className: 'authentic-execution',
    animations: {
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  },
  {
    Icon: CareIcon,
    title: 'Reflect & Refine',
    description:
      'We review outcomes, gather feedback, and continuously improve the solution.',
    className: 'reflect-refine',
    animations: {
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
  },
]
