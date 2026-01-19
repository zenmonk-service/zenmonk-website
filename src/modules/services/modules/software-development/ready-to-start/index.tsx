import Image from 'next/image'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import BG from './assets/bg.png'
import DesktopLamp from './assets/desktop-lamp.png'
import './styles.scss'

const ReadyToStartSoftwareDev = () => {
  return (
    <div className="ready-to-start">
      <div className="images-container">
        <Image src={BG} alt="map" className="bg-map" fill priority />
        <Image src={DesktopLamp} alt="laptop-lamp" className="laptop-lamp" fill priority />
      </div>
      <div className="text-box">
        <SectionTitle
          className="title"
          text="Are you ready to start ?"
          align="left"
        />
        <SectionDescription
          className="description"
          text="Custom Software Development Tailored Solutions for Your Business Custom Software Development Tailored Solutions"
        />
        <button>Contact us</button>
      </div>
    </div>
  )
}

export default ReadyToStartSoftwareDev
