import { Box, Container, Typography } from '@mui/material'
import Title from '@/shared/title'
import BigShowCaseCard from './card/big-card'
import SmallShowCard from './card/small-card'
import { showCaseList } from './show-case'
import './styles.scss'

const Showcases = () => {
  return (
    <Box className="show-case-section">
      <Container maxWidth="xl" className="show-case-title-description-wrapper">
        <Title
          align="center"
          text="The Ultimate Showcase of Skill, Strategy, and Champions"
          className="show-case-title"
        />
        <Box className="show-case-description-wrapper">
          <Typography component="p" className="show-case-description">
            State burst think end are its. Arrived off she elderly beloved him
            affix ed noisier yet. Course regard to up he hardly elder noisier.
            state burst think end are its.
          </Typography>
        </Box>
      </Container>
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
