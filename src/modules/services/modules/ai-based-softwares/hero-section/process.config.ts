import BulbIcon from '@/modules/services/shared/circular-development-process/assets/bulb.svg';
import EmailIcon from '@/modules/services/shared/circular-development-process/assets/email.svg';
import StocksIcon from '@/modules/services/shared/circular-development-process/assets/stocks.svg';
import TimeIcon from '@/modules/services/shared/circular-development-process/assets/time.svg';
import GearsIcon from '@/modules/services/shared/circular-development-process/assets/gears.svg';

import type { DevelopmentProcessConfig } from './types';

/**
 * Edit this array to add, remove, reorder, recolour, or replace process steps.
 * All geometry and responsive styling lives in DevelopmentProcess.module.scss.
 */
const processSteps: DevelopmentProcessConfig['steps'] = [
  {
    id: 'customer-requirement',
    title: 'Customer Requirement',
    description:
      'Identifying AI use cases, data sources, and business objectives to determine model viability.',
    icon: BulbIcon,
    position: 'bottom',
    theme: {
      color: '#ff1765',
      labelColor: '#ff1765',
    },
  },
  {
    id: 'planning',
    title: 'Planning',
    description:
      'Structuring data pipelines, selecting optimal ML architectures, and defining evaluation benchmarks.',
    icon: EmailIcon,
    position: 'top',
    theme: {
      color: '#0a3996',
      labelColor: '#ff7f19',
    },
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'Training, fine-tuning, and evaluating customized machine learning algorithms and neural networks.',
    icon: StocksIcon,
    position: 'bottom',
    theme: {
      color: '#ff8b1a',
      labelColor: '#ff1765',
    },
  },
  {
    id: 'system-testing',
    title: 'System Testing',
    description:
      'Validating model accuracy, mitigating bias, benchmark testing latency, and verifying API endpoints.',
    icon: TimeIcon,
    position: 'top',
    theme: {
      color: '#00855d',
      labelColor: '#1665cc',
    },
  },
  {
    id: 'delivery',
    title: 'Deliver',
    description:
      'Deploying production-ready AI models with continuous learning loops and real-time inference monitoring.',
    icon: GearsIcon,
    position: 'bottom',
    theme: {
      color: '#ff5908',
      labelColor: '#76a932',
    },
  },
];

export const developmentProcessConfig: DevelopmentProcessConfig = {
  id: 'development-process',
  heading: 'Our Development',
  highlightedHeading: 'Process',
  steps: processSteps,
  animation: {
    duration: 0.2,
    delayBetweenItems: 0.045,
    viewportAmount: 0.25,
    slideDistance: 18,
    initialScale: 0.92,
  },
};
