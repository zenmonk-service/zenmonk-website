'use client'

import { motion } from 'framer-motion'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import BigShowCaseCard from './card/big-card'
import SmallShowCard from './card/small-card'
import { showCaseList } from './show-case'
import './styles.scss'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 20 } }
}

const bigCardVariants = {
  hidden: { opacity: 0, rotateX: 90, scale: 0.8, transformOrigin: 'top center' },
  visible: { 
    opacity: 1, 
    rotateX: 0, 
    scale: 1, 
    transformOrigin: 'top center',
    transition: { type: "spring", stiffness: 50, damping: 14 } 
  }
}

const smallCardVariants = {
  hidden: { opacity: 0, rotateY: -90, scale: 0.8, transformOrigin: 'left center' },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    scale: 1, 
    transformOrigin: 'left center',
    transition: { type: "spring", stiffness: 50, damping: 14 } 
  }
}

const Showcases = () => {
  return (
    <div className="show-case-section">
      <motion.div 
        className="show-case-title-description-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={headerVariants}
      >
        <SectionTitle
          align="center"
          className="show-case-title"
          text="The Ultimate Showcase of Skill, Strategy, and Champions"
          markText="Champions"
        />
        <div className="show-case-description-wrapper">
          <SectionDescription
            text="A thrilling celebration of skill, strategy, and determination, where
            champions rise to the occasion and showcase their true potential."
            className="show-case-description"
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="showcases"
        style={{ perspective: 1500 }} // Crucial for true 3D depth perception
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="top-section">
          <div className="left-section">
            <motion.div variants={bigCardVariants} style={{ height: '100%' }}>
              <BigShowCaseCard
                cardProps={{
                  details: {
                    date: showCaseList[0].date,
                    description: showCaseList[0].description,
                    image: showCaseList[0].image,
                    title: showCaseList[0].title,
                  },
                }}
              />
            </motion.div>
          </div>
          <div className="right-section">
            {showCaseList.slice(1, 3).map((event, index) => (
              <motion.div key={index} variants={smallCardVariants} style={{ height: '100%' }}>
                <SmallShowCard
                  cardProps={{
                    details: {
                      date: event.date,
                      description: event.description,
                      image: event.image,
                      title: event.title,
                    },
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="bottom-section">
          {showCaseList.slice(3, 5).map((event, index) => (
            <motion.div key={index} variants={smallCardVariants} style={{ height: '100%' }}>
              <SmallShowCard
                cardProps={{
                  details: {
                    date: event.date,
                    description: event.description,
                    image: event.image,
                    title: event.title,
                  },
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Showcases
