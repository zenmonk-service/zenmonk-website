'use client';

import { motion, useReducedMotion } from 'framer-motion';

import styles from './DevelopmentProcess.module.scss';
import type { DevelopmentProcessItemProps } from './types';

export function DevelopmentProcessItem({
  step,
  index,
  animation,
}: DevelopmentProcessItemProps) {
  const Icon = step.icon;
  const shouldReduceMotion = useReducedMotion();
  const slideDirection = step.position === 'top' ? -1 : 1;
  const positionClass =
    step.position === 'top' ? styles.positionTop : styles.positionBottom;

  return (
    <motion.li
      aria-label={`Step ${index + 1}: ${step.title}`}
      className={`${styles.item} ${positionClass}`}
      data-color={step.theme.color}
      data-label-color={step.theme.labelColor}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: animation.slideDistance * slideDirection,
              scale: animation.initialScale,
            }
      }
      transition={{
        duration: animation.duration,
        delay: 0.6 + index * animation.delayBetweenItems,
        ease: 'easeOut',
      }}
      viewport={{ amount: animation.viewportAmount, once: true }}
      whileInView={
        shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
      }
      tabIndex={0}
    >
      <div className={styles.circle}>
        <span className={styles.circleCenter}>
          <Icon aria-hidden="true" className={styles.icon} />
        </span>
      </div>

      <div className={styles.copy}>
        <h3 className={styles.title}>{step.title}</h3>
        <p className={styles.description}>{step.description}</p>
      </div>

      <span aria-hidden="true" className={styles.connector}>
        <span className={styles.dot} />
      </span>
    </motion.li>
  );
}
