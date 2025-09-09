import Image from 'next/image'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import BG from './assets/bg.png'
import './styles.scss'

const ReadyToStartSoftwareDev = () => {
  return (
    <div className="ready-to-start">
      <div style={{ width: '100%' }}>
        <Image src={BG} alt="map" style={{ width: '100%' }} />
      </div>
      <div className="text-box">
        <SectionTitle
          className="title"
          text="Are you ready to start ?"
          align="left"
        />
        <SectionDescription
          className="description"
          text="
          Custom Software Development Tailored Solutions for Your Business
          Custom Software Development Tailored Solutions"
        />
        <button>Contact us</button>
      </div>
    </div>
  )
}

export default ReadyToStartSoftwareDev
