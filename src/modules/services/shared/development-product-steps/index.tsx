'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BaseSvg } from './BaseSvg';
import styles from './styles.module.scss';

const steps = [
  {
    id: '1',
    title: 'Identify your Vision',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  },
  {
    id: '2',
    title: 'Design for Success',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  },
  {
    id: '3',
    title: 'Code with Precision',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  },
  {
    id: '4',
    title: 'Rigorous Testing & Validation',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  },
  {
    id: '5',
    title: 'Deliver and Beyond',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  },
  {
    id: '6',
    title: 'Partnership for Success',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  }
];

const svgVariants = {
  hidden: { opacity: 0, scale: 0.88, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.24,
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const mobileStepVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const DevelopmentProductSteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className={styles.developmentProductSteps} ref={containerRef}>
      <div className={styles.svgWrapper}>
        <div className={styles.svgContainer}>
          <motion.div
            className={styles.baseSvgWrapper}
            variants={svgVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <BaseSvg isInView={isInView} />
          </motion.div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.stepOverlay}
              custom={index}
              variants={stepVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDivider} />
              <div className={styles.stepDesc}>{step.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Vertical List */}
        <div className={styles.mobileProcessList}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.mobileStep}
              custom={index}
              variants={mobileStepVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className={styles.stepNumber}>{step.id}</div>
              <h4 className={styles.mobileStepTitle}>{step.title}</h4>
              <div className={styles.mobileStepDivider} />
              <p className={styles.mobileStepDesc}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProductSteps;
