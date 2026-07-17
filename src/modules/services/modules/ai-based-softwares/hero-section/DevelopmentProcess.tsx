'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  if (isMobile) {
    return <OldDevelopmentProcess />;
  }

  const headingId = `${config.id}-heading`;

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: '2.6vw',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      },
    },
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: '2.6vw',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.3
      },
    },
  };

  return (
    <section
      aria-labelledby={headingId}
      className={`${styles.process} ${className}`.trim()}
      ref={ref}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <SectionTitle text="Our development Process" markText="Process" />
        </motion.div>
        <motion.div
          variants={descriptionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <SectionDescription
            text="State burst think end are its. Arrived off she elderly beloved him affix ed noisier yet. Course regard to up he hardly elder noisier."
            className="development-process-description"
          />
        </motion.div>
      </div>

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
