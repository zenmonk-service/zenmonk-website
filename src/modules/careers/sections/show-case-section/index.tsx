import { SectionDescription, SectionTitle } from '@/shared/typography'
import BigShowCaseCard from './card/big-card'
import SmallShowCard from './card/small-card'
import { showCaseList } from './show-case'
import './styles.scss'

const Showcases = () => {
  return (
    <div className="show-case-section">
      <div className="show-case-title-description-wrapper">
        <SectionTitle
          align="center"
          className="show-case-title"
          text="The Ultimate Showcase of Skill, Strategy, and Champions"
          markText="Champions"
          markTextProps={{
            rotate: 3,
          }}
        />
        <div className="show-case-description-wrapper">
          <SectionDescription
            text="A thrilling celebration of skill, strategy, and determination, where
            champions rise to the occasion and showcase their true potential."
            className="show-case-description"
          />
        </div>
      </div>
      <div className="showcases">
        <div className="top-section">
          <div className="left-section">
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
          </div>
          <div className="right-section">
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
          </div>
        </div>
        <div className="bottom-section">
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
        </div>
      </div>
    </div>
  )
}

export default Showcases
