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
    id: 'data-feasibility',
    title: 'Data & Feasibility Analysis',
    description:
      'Assessing AI use cases, data pipeline readiness, and algorithm feasibility metrics.',
    icon: BulbIcon,
    position: 'bottom',
    theme: {
      color: '#ff1765',
      labelColor: '#ff1765',
    },
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Prep',
    description:
      'Cleaning, labeling, and structuring high-volume datasets for reliable model training.',
    icon: EmailIcon,
    position: 'top',
    theme: {
      color: '#0a3996',
      labelColor: '#ff7f19',
    },
  },
  {
    id: 'model-development',
    title: 'Model Development',
    description:
      'Training, fine-tuning, and evaluating state-of-the-art machine learning algorithms.',
    icon: StocksIcon,
    position: 'bottom',
    theme: {
      color: '#ff8b1a',
      labelColor: '#ff1765',
    },
  },
  {
    id: 'model-validation',
    title: 'Model Validation & QA',
    description:
      'Benchmarking accuracy, bias mitigation, latency, and predictive performance.',
    icon: TimeIcon,
    position: 'top',
    theme: {
      color: '#00855d',
      labelColor: '#1665cc',
    },
  },
  {
    id: 'deployment-scaling',
    title: 'Deployment & Scaling',
    description:
      'Deploying scalable inference APIs with continuous learning and real-time monitoring.',
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
