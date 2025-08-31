'use client'

import { motion } from 'framer-motion'
import Typography from '@mui/material/Typography'
import { SectionTitle } from '@/shared/typography'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'
import StandOutCard from '../../components/card/stand-out-card'
import { standOutList } from './stand-out'
import './styles.scss'

export const StandOutSection = () => {
  const OurValuesIcon = standOutList[standOutList.length - 1].icon
  return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div className="stand-out-section">
        <SectionTitle
          text="Stand Out From The Rest"
          markText="Rest"
          align="center"
          markTextProps={{ rotate: 3 }}
        />
        <div className="stand-out-card-container">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.33, 1, 0.68, 1],
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="left-section"
          >
            {standOutList
              .slice(0, standOutList.length - 1)
              .map((standOut, index) => (
                <StandOutCard
                  key={index}
                  index={index}
                  bgImage={standOut.image}
                  icon={standOut.icon}
                  title={standOut.title}
                  description={standOut.description}
                />
              ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.33, 1, 0.68, 1],
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="right-section"
          >
            <div
              className="right-section-container"
              style={{
                backgroundImage: `url(${standOutList[standOutList.length - 1].image})`,
              }}
            >
              <div className="icon-container">
                <OurValuesIcon />
              </div>
              <Typography variant="h4" className="title">
                {standOutList[standOutList.length - 1].title}
              </Typography>
              <Typography variant="body1" className="description">
                {standOutList[standOutList.length - 1].description}
              </Typography>
              <div className="core-values">
                {standOutList[standOutList.length - 1].coreValues?.map(
                  (coreValue, index) => {
                    return (
                      <Typography
                        variant="body1"
                        key={index}
                        className="core-value"
                      >
                        {coreValue.title}
                      </Typography>
                    )
                  }
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AboutSectionWrapper>
  )
}
