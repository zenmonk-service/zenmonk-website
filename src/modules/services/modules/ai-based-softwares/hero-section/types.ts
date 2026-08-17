import type { ComponentType, SVGProps } from 'react';

type ProcessItemPosition = 'top' | 'bottom';

type ProcessStepTheme = {
  color: string;
  labelColor: string;
};

type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  position: ProcessItemPosition;
  /** Raw colours are exposed to the SCSS module through typed data attributes. */
  theme: ProcessStepTheme;
};

type ProcessAnimationConfig = {
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
