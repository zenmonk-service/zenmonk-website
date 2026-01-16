'use client'

import React from 'react';
import Base from './assets/base.svg'
import styles from './styles.module.scss';

const steps = [
  {
    id: '01',
    title: 'Identify your Vision',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  },
  {
    id: '02',
    title: 'Design for Success',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  },
  {
    id: '03',
    title: 'Code with Precision',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  },
  {
    id: '04',
    title: 'Rigorous Testing & Validation',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  },
  {
    id: '05',
    title: 'Deliver and Beyond',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  },
  {
    id: '06',
    title: 'Partnership for Success',
    description: 'We collabrate with you to gather and understand your business needs and objective',
  }
];

const DevelopmentProductSteps = () => {
  return (
    <section className={styles.developmentProductSteps}>
      <div className={styles.svgWrapper}>
        <div className={styles.svgContainer}>
          <Base className={styles.baseSvg} />

          {steps.map((step) => (
            <div key={step.id} className={styles.stepOverlay}>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepDivider} />
              <div className={styles.stepDesc}>{step.description}</div>
            </div>
          ))}
        </div>

        {/* Mobile View Vertical List */}
        <div className={styles.mobileProcessList}>
          {steps.map((step) => (
            <div key={step.id} className={styles.mobileStep}>
              <div className={styles.stepNumber}>{step.id}</div>
              <h4 className={styles.mobileStepTitle}>{step.title}</h4>
              <div className={styles.mobileStepDivider} />
              <p className={styles.mobileStepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProductSteps;
