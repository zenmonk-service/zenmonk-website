'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BaseSvg } from './BaseSvg';
import styles from './styles.module.scss';

const steps = [
  {
    id: '1',
    title: 'Product Vision & Discovery',
    description: 'Defining value propositions, user personas, and comprehensive product roadmaps.',
  },
  {
    id: '2',
    title: 'UX/UI & Prototyping',
    description: 'Designing interactive user journeys, wireframes, and design systems for validation.',
  },
  {
    id: '3',
    title: 'Full-Cycle Engineering',
    description: 'Building scalable MVP and product architectures using modern frameworks.',
  },
  {
    id: '4',
    title: 'QA & Usability Testing',
    description: 'Validating user flows, system resilience, security standards, and load handling.',
  },
  {
    id: '5',
    title: 'Market Launch & Release',
    description: 'Executing coordinated product releases with monitoring and telemetry tracking.',
  },
  {
    id: '6',
    title: 'Continuous Product Evolution',
    description: 'Iterating based on product analytics, customer feedback, and market growth.',
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
