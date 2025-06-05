import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { bgImage as BGIMAGE } from './assets'
import TraditionCustomCard from './card/tradition-card'
import './styles.scss'
import { traditionsCustoms } from './tradition-customs'

const TraditionsCustoms = () => {
  return (
    <Box className="traditions-customs-section">
      <BGIMAGE className="bg-image" />
      <Box className="container">
        <Box className="traditions-customs-title-description-wrapper">
          <Typography component="h1" className="traditions-customs-title">
            Experiencing Traditions and Customs
          </Typography>
          <Typography className="traditions-customs-description" component="p">
            Discover rich cultural heritage passed down through generations—timeless
            rituals that shape identity and community.
          </Typography>
        </Box>
        <Box className="traditions-customs-list">
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
        </Box>
      </Box>
    </Box>
  )
}

export default TraditionsCustoms
