import { bgImage as BackgroundImage } from './assets'
import TraditionCustomCard from './card/tradition-card'
import './styles.scss'
import { traditionsCustoms } from './tradition-customs'

const TraditionsCustoms = () => {
  return (
    <div className="traditions-customs-section">
      <BackgroundImage className="bg-image" />
      <div className="container">
        <div className="traditions-customs-title-description-wrapper">
          <h1 className="traditions-customs-title">
            Experiencing Traditions and Customs
          </h1>
          <p className="traditions-customs-description">
            Discover rich cultural heritage passed down through
            generations—timeless rituals that shape identity and community.
          </p>
        </div>
        <div className="traditions-customs-list">
          {traditionsCustoms.map((tradition, index) => {
            return (
              <TraditionCustomCard
                key={index}
                image={tradition.image}
                title={tradition.title}
                description={tradition.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TraditionsCustoms
