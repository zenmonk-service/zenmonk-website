'use client'

import { SectionDescription, SectionTitle } from '@/shared/typography'
import BackgroundBlue from '../assets/background-blue.svg'
import BackgroundGreen from '../assets/background-green.svg'
import BackgroundOrange from '../assets/background-orange.svg'
import BackgroundPurple from '../assets/background-purple.svg'
import EmojiHappy from '../assets/emoji-happy.gif'
import EmojiSad from '../assets/emoji-sad.gif'
import EmojiSmile from '../assets/emoji-smile.gif'
import EmojiThink from '../assets/emoji-think.gif'
import styles from './mobile.module.scss'

const roadmap = [
  {
    Icon: BackgroundBlue,
    title: 'Previous work dissatisfaction',
    emoji: EmojiSad,
    description:
      "Want business growth? But, not satisfied with the results. Don't worry! Zenmonk got you all covered with result-driven business strategies.",
    color: 'linear-gradient(113deg, #4FD0FF 13.16%, #0092FF 88.61%)',
  },

  {
    Icon: BackgroundOrange,
    title: 'Engagement and Resolution',
    emoji: EmojiThink,
    description:
      'Start by sharing ideas and long-term vision of your business with us. Whether you want customised solutions or overall growth, we have got you all covered!',
    color: 'linear-gradient(135deg, #FFB100 14.64%, #FF5C00 85.34%)',
  },

  {
    Icon: BackgroundPurple,
    title: 'Delivering Beyond Expectations',
    emoji: EmojiSmile,
    description:
      'Your satisfaction is our priority. With the help of an expert team and years of experience, we create an excellent planning strategy for your business.',
    color: 'linear-gradient(162deg, #D900B1 10.03%, #7E00B0 88.86%)',
  },

  {
    Icon: BackgroundGreen,
    title: 'Celebrating Success and Loyalty',
    emoji: EmojiHappy,
    description:
      'We ensure successful results by boosting ROI, generating high profits, enhancing user interface and increasing brand authority.',
    color: 'linear-gradient(137deg, #C0D900 14.03%, #11B000 81.76%)',
  },
]

const ClientSatisfactionMobile = () => {
  return (
    <div className={styles.container}>
      <SectionTitle
        text="The Evolution of Client Satisfaction"
        markText="Satisfaction"
        align="center"
      />
      <SectionDescription
        className={styles.description}
        text=" We transform client dissatisfaction into strategic success through
          innovation. We turn challenges into growth by aligning with your
          business vision. We drive measurable outcomes through tailored
          engagement and expert planning."
      />
      <div className={styles.card}>
        {roadmap.map(({ Icon, title, description, color, emoji }) => {
          return (
            <div className={styles.emoji} key={title}>
              <div className={styles.gifContainer}>
                <Icon />
                <img
                  className={styles.animatedGif}
                  src={emoji.src}
                  alt="loading..."
                />
              </div>
              <p style={{ background: color }} className={styles.cardTitle}>
                {title}
              </p>
              <p className={styles.cardDescription}>{description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ClientSatisfactionMobile
