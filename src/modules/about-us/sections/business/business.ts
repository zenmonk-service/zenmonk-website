import Customization from './assets/customize.svg'
import ReadyMadeSolution from './assets/ready-made.svg'
import FastDevelopment from './assets/setting.svg'
import CustomerSupport from './assets/support.svg'

export const businesses = [
  {
    icon: CustomerSupport,
    background: 'rgb(101, 214, 222, 0.15)',
    hover: 'linear-gradient(180deg, #65D6DE 0%, #001617 258.51%)',
    fill: '#65D6DE',
    title: '24X7 Support',
    description:
      'We provide top-grade products along with exceptional customer experience and 24/7 supports.',
  },
  {
    icon: ReadyMadeSolution,
    title: 'Pioneering New Ideas',
    background: 'rgb(60, 149, 219, 0.15)',
    hover: 'linear-gradient(180deg, #3C95DB 0%, #E00094 258.51%)',
    fill: '#3C95DB',
    description:
      'We transform your vision into a future-ready reality by incorporating cutting-edge innovations.',
  },

  {
    icon: Customization,
    background: 'rgb(180, 123, 255, 0.15)',
    hover: 'linear-gradient(180deg, #B47BFF 0%, #E00094 258.51%)',
    title: 'Driving the Digital Future',
    fill: '#B47BFF',
    description:
      'We empower your business to lead in the digital age with our innovative and tech-driven solutions.',
  },
  {
    icon: FastDevelopment,
    title: 'Fast Development',
    fill: '#6CC77D',
    background: 'rgb(108, 199, 125, 0.15)',
    hover: 'linear-gradient(180deg, #6CC77D 0%, #000902 317.38%)',
    description:
      'We deliver high-quality and cost effective services allowing you to maximize your return on investment.',
  },
]
