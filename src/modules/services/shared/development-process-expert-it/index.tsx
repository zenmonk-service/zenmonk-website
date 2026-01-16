'use client'

import Base from "./assets/base.svg"
import styles from './styles.module.scss';

const steps = [
  {
    id: '01',
    title: 'Identify your Vision',
    description: 'Deep dive into requirements and feasibility analysis to define the roadmap.',
  },
  {
    id: '02',
    title: 'Design for Success',
    description: 'Creating intuitive UI/UX designs and interactive prototypes.',
  },
  {
    id: '03',
    title: 'Identify your Vision',
    description: 'Agile development using cutting-edge technologies and best practices.',
  },
  {
    id: '04',
    title: 'Rigorous Testing & Validation',
    description: 'Rigorous testing to ensure bug-free and high-performance output.',
  },
  {
    id: '05',
    title: 'Deliver and Beyond',
    description: 'Seamless launch and integration into your existing ecosystem.',
  },
  {
    id: '06',
    title: 'Partnership for Success',
    description: 'Continuous monitoring, maintenance, and regular updates.',
  }
];

const DevelopmentProcessExpertIt = () => {
  return (
    <section className={styles.developmentProcessExpert}>
      <div className={styles.svgContainer}>
        <Base />
        {steps.map((step) => (
          <div key={step.id} className={styles.stepOverlay}>
            <div className={styles.stepTitle}>{step.title}</div>
            <div className={styles.stepDesc}>{step.description}</div>
          </div>
        ))}

        <div className={styles.mobileProcessList}>
          {steps.map((step) => (
            <div key={step.id} className={styles.mobileStep}>
              <div className={styles.stepNumber}>{step.id}</div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <div className={styles.stepDivider} />
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcessExpertIt;
