'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, Typography } from '@mui/material'
import OdometerComponent from '@/shared/odometer'
import SectionWrapper from '@/shared/wrapper'
import './styles.scss'

const Odometer = () => {
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
        <Box className="odometer-content-wrapper">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
          >
            <Box className="left-section">
              <Typography className="heading" component="h1" variant="h1">
                Team Across the Globe <br /> Run on Atlassian
              </Typography>
              <Typography variant="h4" className="teams-number">
                {inView && <OdometerComponent value={100000} />}+
              </Typography>
              <Typography className="description" component="h3" variant="h3">
                Companies team power collaboration with Zenmonk
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
          >
            <Box className="center-section">
              <Box className="countries-section">
                <Typography className="countries-number">
                  {inView && <OdometerComponent value={200} />}+
                </Typography>
                <Typography className="description" component="h3" variant="h3">
                  Countries have companies that use Zenmonk
                </Typography>
              </Box>
              <Box className="companies-section">
                <Typography className="companies-number">
                  {inView && <OdometerComponent value={80}/>}%
                </Typography>
                <Typography className="description" component="h3" variant="h3">
                  of Fortune 500 companies use Zenmonk product
                </Typography>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
          >
            <Box className="right-section">
              <Box className="countries-section">
                <Typography className="countries-number ">
                  {inView && <OdometerComponent value={200} />}+
                </Typography>
                <Typography className="description" component="h3" variant="h3">
                  Countries have companies that use Zenmonk
                </Typography>
              </Box>
              <Box className="companies-section">
                <Typography className="companies-number ">
                  {inView && <OdometerComponent value={80}/>}%
                </Typography>
                <Typography className="description" component="h3" variant="h3">
                  of Fortune 500 companies use Zenmonk product
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </SectionWrapper>
    </motion.div>
  )
}

export { Odometer }
