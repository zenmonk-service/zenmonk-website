import Image from 'next/image'
import WhyChooseUsCard from '../../components/card/why-choose-us'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { skills } from './skills'
import { whyChooseUs } from './why-choose-us'
import styles from './why-choose-us.module.scss'

const Star = '/about-us/why-choose-us/star.svg'

export const WhyChooseUsSection = () => {
  return (
    <div className={styles.aboutUsWhyChooseUsSection}>
      <div className={styles.cardSection}>
        <div className={styles.leftSection}>
          {whyChooseUs.slice(0, 2).map((item, index) => (
            <WhyChooseUsCard
              key={index}
              description={item.description}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
        <div className={styles.centerSection}>
          {whyChooseUs.slice(2, 4).map((item, index) => (
            <WhyChooseUsCard
              key={index}
              description={item.description}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className={styles.rightSection}>
        <SectionTitle
          className={styles.sectionTitle}
          text="Here’s How We Are Different From Others"
          markText="Others"
          markTextProps={{
            style: {
              width: '100%',
              bottom: '-0.4vw',
            },
          }}
          align="left"
        />
        <SectionDescription
          className={styles.description}
          text="We combine cutting-edge technology and top-notch support to deliver tailored software solutions that prioritize your success"
        />
        <div className={styles.skillsSet}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillTitle}>{skill.title}</div>
              <div className={styles.rating}>
                {[...Array(skill.rating)].map((_, i) => (
                  <Image
                    key={i}
                    src={Star}
                    alt="star"
                    width={32}
                    height={32}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}