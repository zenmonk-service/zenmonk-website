import WhyChooseUsCard from '../../components/card/why-choose-us'
import { skills } from './skills'
import { whyChooseUs } from './why-choose-us'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import styles from './why-choose-us.module.scss'

export const WhyChooseUsSection = () => {
  return (
    <div className={styles.aboutUsWhyChooseUsSection}>
      <div className={styles.cardSection}>
        <div className={styles.leftSection}>
          {whyChooseUs.slice(0, 2).map((item, index) => (
            <WhyChooseUsCard
              description={item.description}
              icon={item.icon}
              title={item.title}
              key={index}
            />
          ))}
        </div>

        <div className={styles.centerSection}>
          {whyChooseUs.slice(2, 4).map((item, index) => (
            <WhyChooseUsCard
              description={item.description}
              icon={item.icon}
              title={item.title}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className={styles.rightSection}>
        <SectionTitle
          markText="Others"
          markTextProps={{ rotate: 2 }}
          text="Here’s How We Are Different From Others"
          align="left"
          className={styles.sectionTitle}
        />

        <SectionDescription
          text="We combine cutting-edge technology and top-notch support to deliver tailored software solutions that prioritize your success"
          className={styles.description}
        />

        <div className={styles.skillsSet}>
          {skills.map((skill, index) => (
            <div className={styles.skill} key={index}>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <div className={styles.rating}>
                {Array(skill.rating)
                  .fill(0)
                  .map((_, idx) => (
                    <img
                      key={idx}
                      src="/about-us/why-choose-us/star.svg"
                      alt="star"
                      className={styles.star}
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
