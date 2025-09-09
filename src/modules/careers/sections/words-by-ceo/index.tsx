import { CeoTextImage, ZenmonkLogo as Logo } from '../../assets/ceo-section'
import './styles.scss'

const WordsByCEO = () => {
  return (
    <div className="ceo-section-wrapper">
      <div className="ceo-section-text-image">
        <CeoTextImage />
      </div>
      <div className="ceo-section-logo">
        <Logo />
      </div>
    </div>
  )
}

export default WordsByCEO
