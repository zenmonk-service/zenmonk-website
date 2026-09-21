export interface ReadyToTalkServiceData {
  heading: string
  subheading: string
  buttonText: string
}

export const readyToTalkDataMap: Record<string, ReadyToTalkServiceData> = {
  'cloud-development': {
    heading: 'NOT SURE WHERE TO START?',
    subheading: 'Let’s get guidance from Zenmonk’s certified cloud architecture experts',
    buttonText: 'Accelerate Your Cloud',
  },
  'ai-solutions': {
    heading: 'NOT SURE WHERE TO START?',
    subheading: 'Let’s get guidance from Zenmonk’s artificial intelligence and ML experts',
    buttonText: 'Build Your AI Solution',
  },
  'custom-app-development': {
    heading: 'NOT SURE WHERE TO START?',
    subheading: 'Let’s get guidance from Zenmonk’s mobile and custom application experts',
    buttonText: 'Build Your Mobile App',
  },
  'growth-and-marketing': {
    heading: 'NOT SURE WHERE TO START?',
    subheading: 'Let’s get guidance from Zenmonk’s digital growth and performance marketing experts',
    buttonText: 'Scale Your Growth',
  },
  'industries-specific-solution': {
    heading: 'NOT SURE WHERE TO START?',
    subheading: 'Let’s get guidance from Zenmonk’s domain and industry modernization specialists',
    buttonText: 'Explore Industry Solutions',
  },
  'it-and-business-consultation': {
    heading: 'NOT SURE WHERE TO START?',
    subheading: 'Let’s get guidance from Zenmonk’s strategic technology and IT advisory consultants',
    buttonText: 'Book a Strategy Call',
  },
  'it-training-and-workshops': {
    heading: 'NOT SURE WHERE TO START?',
    subheading: 'Let’s get guidance from Zenmonk’s corporate technical mentors and trainers',
    buttonText: 'Upskill Your Team',
  },
  'software-development': {
    heading: 'NOT SURE WHERE TO START?',
    subheading: 'Let’s get help from Zenmonk’s software development experts',
    buttonText: 'Build Your Custom Software',
  },
  'product-development': {
    heading: 'NOT SURE WHERE TO START?',
    subheading: 'Let’s get guidance from Zenmonk’s end-to-end product development engineers',
    buttonText: 'Launch Your Product',
  },
}
