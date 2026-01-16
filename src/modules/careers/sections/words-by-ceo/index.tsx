import Image from 'next/image'
import { ZenmonkLogo as Logo, Board, Ceo } from '../../assets/ceo-section'
import Details from './ceo-details'
import './styles.scss'

const WordsByCEO = () => {
  return (
    <div className="ceo-section-wrapper">
      <div className="ceo-section">
        <Image src={Board} alt="ceo-word-image" fill />
        <div className="words-by-ceo">
          <p>The harder you work for something, the greater you'll feel when you achieve it.</p>
        </div>
        <div className="ceo-details">
          <Details image={Ceo} designation='Cheif Executive Officer' name='Aman Singh' />
        </div>
      </div>
      <div className="ceo-section-logo">
        <Logo />
      </div>
    </div>
  )
}

export default WordsByCEO
