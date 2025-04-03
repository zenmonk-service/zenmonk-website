import { Box, Typography } from '@mui/material'
import Title from '@/shared/title'
import SectionWrapper from '@/shared/wrapper'
import WhyChooseUsCard from '../../components/card/why-choose-us'
import { skills } from './skills'
import './styles.scss'
import { whyChooseUs } from './why-choose-us'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'

export const WhyChooseUsSection = () => {
  return (
    <AboutSectionWrapper>
      <Box className="about-us-why-choose-us-section">
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
        <Box className="right-section">
          <Title
            className="section-title"
            text="Here’s How We Are Different From Others"
            align="left"
          />
          <Typography component="p" className="description">
            Providing good quality customer experience and support is as
            important and pivotal as offering top grade product or service to
            your consumers.
          </Typography>
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
