'use client'

import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import './styles.scss'

const Odometer = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  }

  return (
    <motion.div
      whileInView={{
        backgroundPosition: '0% 60%',
        transition: { duration: 1.6 },
        type: 'spring',
      }}
      viewport={{ once: true, amount: 0.7 }}
      className="odometer"
    >
      <Box className="odometer-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          <Box className="left-section">
            <Typography className="heading" component="h1" variant="h1">
              Team Across the Globe Run on Atlassian
            </Typography>
            <Typography className="teams-number" component="h4" variant="h4">
              100,000+
            </Typography>
            <Typography className="description" component="h3" variant="h3">
              Companies team power collaboration with Zenmonk
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          <Box className="center-section">
            <Box className="countries-section">
              <Typography
                className="countries-number"
                component="h4"
                variant="h4"
              >
                200+
              </Typography>
              <Typography className="description" component="h3" variant="h3">
                Countries have companies that use Zenmonk
              </Typography>
            </Box>
            <Box className="companies-section">
              <Typography
                className="companies-number"
                component="h4"
                variant="h4"
              >
                80%
              </Typography>
              <Typography className="description" component="h3" variant="h3">
                of Fortune 500 companies use Zenmonk product
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  )
}

export { Odometer }
