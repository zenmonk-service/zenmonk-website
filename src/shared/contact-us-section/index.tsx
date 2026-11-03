'use client'

import Image from 'next/image'
import GlobeSection from '@/animations/globe-animation'
import { ContactForm } from '../../modules/about-us/components/contact-form'
import { SectionDescription, SectionTitle } from '../typography'
import ContactUsImage from './assets/contact-us.svg?url'
import ContactUsTextImage from './assets/contact-us-text.svg?url'
import styles from './contact-us-section.module.scss'

interface ContactUsSectionProps {
  isCareerPage?: boolean
  showFlagsOnly?: boolean
  isContactPage?: boolean
}

export const ContactUsSection = ({
  isCareerPage = false,
  showFlagsOnly = false,
  isContactPage = false,
}: ContactUsSectionProps) => {
  const showFlags = isCareerPage || showFlagsOnly

  return (
    <div className="w-full flex flex-col">
      <div className={styles.contactIntro}>
        <SectionTitle
          text="Let’s Solve What’s Next"
          highlightedText="Solve"
          align="center"
        />
        <SectionDescription>
          <span className={styles.contactIntroFirstLine}>
            Have a business challenge, an ambitious goal, or an industrial problem to solve?
          </span>{' '}
          Let’s connect and explore how technology can help you achieve your goals and create meaningful impact.
        </SectionDescription>
      </div>

      <div className={`${styles.aboutUsContactUsSection} ${isContactPage ? styles.contactPageSpacing : ''}`}>
        <div className={styles.contactUs}>
          <div className={styles.leftContainer}>
            <div style={{ position: 'relative', width: '100%' }}>
              <Image
                src={ContactUsImage}
                alt="Contact us"
                width={819}
                height={568}
                className={styles.contactUsImage}
                style={{ width: '100%', height: 'auto' }}
              />
              <Image
                src={ContactUsTextImage}
                alt="We're just a message away"
                width={409}
                height={119}
                className={styles.contactUsTextImage}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '5%',
                  width: '41%',
                  height: 'auto',
                }}
              />
            </div>
          </div>

          <div className={styles.rightContainer}>
            <ContactForm />
          </div>
        </div>

      </div>

      {!showFlags && <GlobeSection />}
    </div>  
  )
}
