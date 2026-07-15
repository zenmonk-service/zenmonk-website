import type { LucideIcon } from 'lucide-react';

export type ProcessItemPosition = 'top' | 'bottom';

export type ProcessStepTheme = {
  color: string;
  labelColor: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  position: ProcessItemPosition;
  /** Raw colours are exposed to the SCSS module through typed data attributes. */
  theme: ProcessStepTheme;
};

export type ProcessAnimationConfig = {
  duration: number;
  delayBetweenItems: number;
  viewportAmount: number;
  slideDistance: number;
  initialScale: number;
};

export type DevelopmentProcessConfig = {
  id: string;
  heading: string;
  highlightedHeading: string;
  steps: ProcessStep[];
  animation: ProcessAnimationConfig;
};

export type DevelopmentProcessProps = {
  config?: DevelopmentProcessConfig;
  className?: string;
};

export type DevelopmentProcessItemProps = {
  step: ProcessStep;
  index: number;
  animation: ProcessAnimationConfig;
};
