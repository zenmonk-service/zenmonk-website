'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Box, Stack } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { RTTGirlImg } from './assets'
import BaseButton from '@/shared/button'
import { useAppDispatch } from '@/store/hooks'
import { openContactModal } from '@/store/features/header/header-slice'
import { readyToTalkDataMap } from './service-mapper'
import './style.scss'

interface ReadyToTalkSharedProps {
  serviceId?: string
}

const ReadyToTalkShared = ({ serviceId = 'cloud-development' }: ReadyToTalkSharedProps) => {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const data = readyToTalkDataMap[serviceId] || readyToTalkDataMap['cloud-development']

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: '2.6vw',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      },
    },
  }

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: '2.6vw',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.15
      },
    },
  }

  return (
    <Stack className="ready-to-talk-wrapper" ref={ref}>
      <Box className="ready-to-talk-container">
        {/* IMAGE */}
        <Box className="rtt-image">
          <RTTGirlImg />
        </Box>
 
        {/* CONTENT */}
        <Box className="rtt-content">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionTitle
              className="rtt-heading"
              text={data.heading}
              align="left"
            />
          </motion.div>
          <motion.div
            variants={descriptionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionDescription
              className="rtt-subheading"
              text={data.subheading}
            />
          </motion.div>

          <BaseButton
            className="rtt-button"
            showArrow
            onClick={() => dispatch(openContactModal())}
          >
            {data.buttonText}
          </BaseButton>
        </Box>
      </Box>
    </Stack>
  )
}

export default ReadyToTalkShared
