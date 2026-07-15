import {
  ClockCheck,
  Lightbulb,
  Mail,
  Settings,
  TrendingUp,
} from 'lucide-react';

import type { DevelopmentProcessConfig } from './types';

/**
 * Edit this array to add, remove, reorder, recolour, or replace process steps.
 * All geometry and responsive styling lives in DevelopmentProcess.module.scss.
 */
export const processSteps: DevelopmentProcessConfig['steps'] = [
  {
    id: 'customer-requirement',
    title: 'Customer Requirement',
    description:
      'We will collaborate with you to gather and understand your business needs and objective.',
    icon: Lightbulb,
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
      'We will collaborate with you to gather and understand your business needs and objective.',
    icon: Mail,
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
      'We will collaborate with you to gather and understand your business needs and objective.',
    icon: TrendingUp,
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
      'We will collaborate with you to gather and understand your business needs and objective.',
    icon: ClockCheck,
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
      'We will collaborate with you to gather and understand your business needs and objective.',
    icon: Settings,
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
