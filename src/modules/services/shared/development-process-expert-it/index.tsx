'use client'

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Base from "./assets/base.svg"
import styles from './styles.module.scss';

const steps = [
  {
    id: '01',
    title: 'Needs & Skill Assessment',
    description: 'Evaluating existing team competencies, skill gaps, and strategic technology objectives.',
  },
  {
    id: '02',
    title: 'Curriculum & Lab Design',
    description: 'Tailoring industry-aligned syllabi, practical coding modules, and learning tracks.',
  },
  {
    id: '03',
    title: 'Interactive Workshops',
    description: 'Delivering engaging instructor-led sessions with live demonstrations and real-world code.',
  },
  {
    id: '04',
    title: 'Hands-On Lab Projects',
    description: 'Applying concepts directly through guided capstone projects and practical challenges.',
  },
  {
    id: '05',
    title: 'Evaluation & Review',
    description: 'Assessing knowledge retention through practical tests, code reviews, and feedback.',
  },
  {
    id: '06',
    title: 'Ongoing Mentorship',
    description: 'Providing post-training coaching, refresher resources, and continuous skill support.',
  }
];

const stepVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: -20, // Slide down from the top
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.25, // Stagger delay of 0.25s per step
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  }),
};

const mobileStepVariants = {
  hidden: {
    opacity: 0,
    y: -20, // Slide down from the top on mobile
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // Faster stagger delay on mobile
      duration: 0.45,
      ease: 'easeOut',
    },
  }),
};

const DevelopmentProcessExpertIt = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section className={styles.developmentProcessExpert} ref={containerRef}>
      <div className={styles.svgContainer}>
        <Base />
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={styles.stepOverlay}
            custom={index}
            variants={stepVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className={styles.stepTitle}>{step.title}</div>
            <div className={styles.stepDesc}>{step.description}</div>
          </motion.div>
        ))}

        <div className={styles.mobileProcessList}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.mobileStep}
              custom={index}
              variants={mobileStepVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className={styles.stepNumber}>{step.id}</div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <div className={styles.stepDivider} />
              <p className={styles.stepDesc}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcessExpertIt;
