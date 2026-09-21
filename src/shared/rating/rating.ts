import CheckBox from './assets/checkbox.svg'
import Experience from './assets/experience.svg'
import Rating from './assets/rating.svg'
import Customer from './assets/service.svg'

export const getRatings = (seed: string = '/services') => {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i)
    hash |= 0
  }
  const absHash = Math.abs(hash)

  // Happy clients between 50 and 82
  const clients = 50 + (absHash % 33)

  // Projects done between (clients + 5) and 99 (guaranteed projects > clients and in range 50-100)
  const minProjects = clients + 5
  const maxProjects = 99
  const range = maxProjects - minProjects + 1
  const projectDelta = Math.floor(absHash / 37) % range
  const projects = Math.min(100, Math.max(minProjects, minProjects + projectDelta))

  return [
    {
      rating: `${clients}+`,
      description: 'Happy Clients',
      icon: Rating,
      bg: 'rgb(101, 214, 222, 0.15)',
    },
    {
      rating: `${projects}+`,
      description: 'Project Done',
      icon: CheckBox,
      bg: 'rgb(108, 199, 125, 0.15)',
    },
    {
      rating: '24/7',
      description: 'Help Support',
      icon: Customer,
      bg: 'rgb(60, 149, 219, 0.15)',
    },
    {
      rating: '4+',
      description: 'Experience',
      icon: Experience,
      bg: 'rgb(180, 123, 255, 0.15)',
    },
  ]
}

export const ratings = getRatings('/services')
