
import { developmentProcessSteps } from '../development-steps'
import styles from './milestone.module.scss'

const Milestone = () => {
  const decorativeBalls = [
    { size: '0.8vw', bg: '#E5E5E5', left: '14%', top: '62%' },
    { size: '1vw', bg: '#D91D65', left: '24.5%', top: '37%' },
    { size: '0.6vw', bg: '#E5E5E5', left: '28%', top: '52%' },
    { size: '0.5vw', bg: '#E5E5E5', left: '55.5%', top: '34%' },
    { size: '0.5vw', bg: '#C92C92', left: '46.5%', top: '42%' },
    { size: '0.5vw', bg: '#E5E5E5', left: '41%', top: '60%' },
    { size: '0.4vw', bg: '#1D5BB6', left: '58.5%', top: '59%' },
    { size: '1.2vw', bg: '#D9D9D9', left: '79%', top: '25%' },
    { size: '1.1vw', bg: '#7BA03D', left: '81.5%', top: '48%' },
    { size: '0.8vw', bg: '#402099', left: '69.5%', top: '44%' },
    { size: '1.5vw', bg: '#E5E5E5', left: '10%', top: '72%' },
    { size: '0.7vw', bg: '#E5E5E5', left: '74%', top: '37%' },
    { size: '0.7vw', bg: '#E5E5E5', left: '72%', top: '65%' },
    { size: '1vw', bg: '#86A74C', left: '66%', top: '88%' },
  ]

  return (
    <div className={styles.milestoneContainer}>
      <div className={styles.milestoneBaseLine} />

      {decorativeBalls.map((ball, idx) => (
        <div
          key={idx}
          className={styles.decorativeBall}
          style={{
            width: ball.size,
            height: ball.size,
            backgroundColor: ball.bg,
            left: ball.left,
            top: ball.top,
          }}
        />
      ))}

      <div className={styles.stepsWrapper}>
        {developmentProcessSteps.map((step, idx) => {
          const isTop = idx % 2 === 0

          return (
            <div
              key={step.id}
              className={`${styles.stepItem} ${isTop ? styles.topStep : styles.bottomStep}`}
            >
              <div className={styles.contentBox}>
                <h3 style={{
                  background: `linear-gradient(to right, ${step.colors[0]}, ${step.colors[1]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>

              <div className={styles.iconBox}>
                <step.Icon className={styles.stepIcon} />
                <span className={styles.stepNumber}>{step.id}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Milestone
