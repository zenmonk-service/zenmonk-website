import { Box, Typography } from '@mui/material'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'
import WhyChooseUsCard from '../../components/card/why-choose-us'
import { skills } from './skills'
import { whyChooseUs } from './why-choose-us'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import './styles.scss'

export const WhyChooseUsSection = () => {
  return (
    <AboutSectionWrapper>
      <Box className="about-us-why-choose-us-section">
        <Box className="card-section">
          <Box className="left-section">
            {whyChooseUs.slice(0, 2).map((item, index) => {
              return (
                <WhyChooseUsCard
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                  key={index}
                />
              )
            })}
          </Box>
          <Box className="center-section">
            {whyChooseUs.slice(2, 4).map((item, index) => {
              return (
                <WhyChooseUsCard
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                  key={index}
                />
              )
            })}
          </Box>
        </Box>
        <Box className="right-section">
          <SectionTitle
            markText="Others"
            markTextProps={
              {
                rotate: 2
              }
            }
            text="Here’s How We Are Different From Others"
            align="left"
          />
          <SectionDescription text="We combine cutting-edge technology and top-notch support to deliver
            tailored software solutions that prioritize your success" className="description" />
          <Box className="skills-set">
            {skills.map((skill, index) => {
              return (
                <Box className="skill" key={index}>
                  <Typography component="h3" className="title">
                    {skill.title}
                  </Typography>
                  <Box className="rating">
                    {Array(skill.rating)
                      .fill(0)
                      .map((_, index) => {
                        return (
                          <Box
                            key={index}
                            component="img"
                            src={'/about-us/why-choose-us/star.svg'}
                            className="star"
                          />
                        )
                      })}
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Box>
    </AboutSectionWrapper>
  )
}
