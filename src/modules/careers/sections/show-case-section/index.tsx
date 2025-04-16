import { Box, Container, Typography } from '@mui/material'
import Title from '@/shared/title'
import BigShowCaseCard from './card/big-card'
import SmallShowCard from './card/small-card'
import { showCaseList } from './show-case'
import './styles.scss'
import { SectionDescription, SectionTitle } from '@/shared/typography'

const Showcases = () => {
  return (
    <Box className="show-case-section">
      <Box className="show-case-title-description-wrapper">
        <SectionTitle
          align="center"
          text="The Ultimate Showcase of Skill, Strategy, and Champions"
          markText='Champions'
          markTextProps={{
            rotate:5
          }}
        />
        <Box className="show-case-description-wrapper">
        <SectionDescription
          text="A thrilling celebration of skill, strategy, and determination, where
            champions rise to the occasion and showcase their true potential."
            className='show-case-description'
        />
        </Box>
      </Box>
      <Box className="showcases">
        <Box className="top-section">
          <Box className="left-section">
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
          </Box>
          <Box className="right-section">
            {showCaseList.slice(1, 3).map((event, index) => (
              <SmallShowCard
                key={index}
                cardProps={{
                  details: {
                    date: event.date,
                    description: event.description,
                    image: event.image,
                    title: event.title,
                  },
                }}
              />
            ))}
          </Box>
        </Box>
        <Box className="bottom-section">
          {showCaseList.slice(3, 5).map((event, index) => (
            <SmallShowCard
              key={index}
              cardProps={{
                details: {
                  date: event.date,
                  description: event.description,
                  image: event.image,
                  title: event.title,
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Showcases
