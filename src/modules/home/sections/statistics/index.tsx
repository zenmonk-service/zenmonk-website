'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from '@/animations/count-up'
import SectionWrapper from '@/shared/wrapper'
import './styles.scss'

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const textVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  }

  return (
    <motion.div
      ref={ref}
      whileInView={{
        backgroundPosition: '0% 60%',
        transition: { duration: 1.6 },
        type: 'spring',
      }}
      viewport={{ once: true, amount: 0.7 }}
      className="odometer-section"
    >
      <SectionWrapper>
        <div className="odometer-content-wrapper">
          <motion.div
            className="desc"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
          >
            <div className="left-section">
              <h1 className="heading">
                Zenmonk is always  available, no <br /> matter the time zone or your<br/> location.
              </h1>
              <h4 className="teams-number">
                <CountUp
                  from={1000}
                  to={10000}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </h4>
              <h3 className="description">
                Companies team power collaboration with Zenmonk
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
          >
            <div className="center-section">
              <div className="countries-section">
                <p className="countries-number">
                  <CountUp
                    from={0}
                    to={200}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </p>
                <h3 className="description">
                  Businesses served by Zenmonk
                </h3>
              </div>
              <div className="companies-section">
                <p className="companies-number">
                  <CountUp
                    from={0}
                    to={800}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </p>
                <h3 className="description">
                  Projects delivered by Zenmonk
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
          >
            <div className="right-section">
              <div className="countries-section">
                <p className="countries-number ">
                  <CountUp
                    from={0}
                    to={20}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </p>
                <h3 className="description">
                  Awards received for excellence
                </h3>
              </div>
              <div className="companies-section">
                <p className="companies-number ">
                  <CountUp
                    from={0}
                    to={6}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </p>
                <h3 className="description">
                  Countries benefiting from Zenmonk
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </motion.div>
  )
}

export default Statistics
