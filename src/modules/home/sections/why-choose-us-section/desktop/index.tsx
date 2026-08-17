import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionTitle } from '@/shared/typography'
import IdeaSvg from '../assets/craft-collab-large.svg'
import TimelineSvg from '../assets/deadline-large.svg'
import TechSvg from '../assets/latest-tech-large.svg'
import OldLogoDecorator from '../assets/logo-benzene.png'
import SupportSvg from '../assets/support-large.svg'
import ThumbSvg from '../assets/thumb-up.svg'
import './desktop.styles.scss'

const WhyChooseUsDesktop = () => {
  return (
    <div className='why-choose-us-home-section'>
      <SectionTitle
        text="Elevate your tech journey with Zenmonk"
        markText="Zenmonk"
        className="title"
      />
      <Image src={OldLogoDecorator} alt="logo" className="logo left-logo" />
      <Image src={OldLogoDecorator} alt="logo" className="logo right-logo" />

      <div className="why-choose-us-home">
        <div className="content">
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: [0.2, 1.1, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 1, times: [0, 0.55, 1] }}
            viewport={{ amount: 0.5, once: true }}
            className="thumbsUp"
          >
            <ThumbSvg />
          </motion.div>
          <div className="children">
            <motion.div
              initial={{ x: '-15.625vw', opacity: 0 }}
              whileInView={{
                x: ['-15.625vw', '3.125vw', '2.604vw'],
                opacity: [0, 1, 1],
              }}
              transition={{ duration: 1, times: [0, 0.75, 1] }}
              viewport={{ amount: 0.5, once: true }}
              className="first"
            >
              <div className="why-choose-us-home-card">
                <p className="why-choose-us-home-card-title">
                  We Comprehend, Customize, and Create
                </p>
                <p className="why-choose-us-home-card-description">
                  Understanding your unique needs to craft tailored software
                  with precision.
                </p>
              </div>
              <IdeaSvg />
            </motion.div>
            <motion.div
              initial={{ x: '15.625vw', opacity: 0 }}
              whileInView={{
                x: ['15.625vw', '-3.125vw', '-2.604vw'],
                opacity: [0, 1, 1],
              }}
              transition={{ duration: 1, times: [0, 0.75, 1] }}
              viewport={{ amount: 0.5, once: true }}
              className="second"
            >
              <SupportSvg />
              <div className="why-choose-us-home-card">
                <p className="why-choose-us-home-card-title">
                  24/7 Support with Quick Response
                </p>
                <p className="why-choose-us-home-card-description">
                  Available round the clock extending guaranteed response within
                  24 hours
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: '-15.625vw', opacity: 0 }}
              whileInView={{
                x: ['-15.625vw', '3.125vw', '2.604vw'],
                opacity: [0, 1, 1],
              }}
              transition={{ duration: 1, times: [0, 0.75, 1] }}
              viewport={{ amount: 0.5, once: true }}
              className="third"
            >
              <div className="why-choose-us-home-card">
                <p className="why-choose-us-home-card-title">
                  Latest Tech Solutions for your business goals
                </p>
                <p className="why-choose-us-home-card-description">
                  Real business results for companies with the goal of growing
                  revenue
                </p>
              </div>
              <TimelineSvg />
            </motion.div>
            <motion.div
              initial={{ x: '15.625vw', opacity: 0 }}
              whileInView={{
                x: ['15.625vw', '-5.729vw', '-5.208vw'],
                opacity: [0, 1, 1],
              }}
              transition={{ duration: 1, times: [0, 0.75, 1] }}
              viewport={{ amount: 0.5, once: true }}
              className="fourth"
            >
              <TechSvg />
              <div className="why-choose-us-home-card">
                <p className="why-choose-us-home-card-title">
                  Mastering Deadlines with Focused Discipline
                </p>
                <p className="why-choose-us-home-card-description">
                  Aiming for agile development for timely project completion at
                  short notice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUsDesktop
