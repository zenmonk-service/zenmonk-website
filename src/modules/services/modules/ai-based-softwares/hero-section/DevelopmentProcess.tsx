'use client';

import { SectionTitle, SectionDescription } from '@/shared/typography';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import OldDevelopmentProcess from '@/modules/services/development-process';
import { DevelopmentProcessItem } from './DevelopmentProcessItem';
import styles from './DevelopmentProcess.module.scss';
import type { DevelopmentProcessProps } from './types';
import { developmentProcessConfig } from './process.config';

export function DevelopmentProcess({
  config = developmentProcessConfig,
  className = '',
}: DevelopmentProcessProps) {
  const isMobile = useMediaQuery('(max-width: 1000px)');

  if (isMobile) {
    return <OldDevelopmentProcess />;
  }

  const headingId = `${config.id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className={`${styles.process} ${className}`.trim()}
    >
      <SectionTitle text="Our development Process" markText="Process" />
      <SectionDescription
        text="State burst think end are its. Arrived off she elderly beloved him affix ed noisier yet. Course regard to up he hardly elder noisier."
        className="development-process-description"
      />

      <ol className={styles.timeline}>
        {config.steps.map((step, index) => (
          <DevelopmentProcessItem
            animation={config.animation}
            index={index}
            key={step.id}
            step={step}
          />
        ))}
      </ol>
    </section>
  );
}
