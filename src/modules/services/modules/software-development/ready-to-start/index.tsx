import Image from 'next/image'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import BG from './assets/bg.png'
import BgMap from "./assets/bg-map.svg"
import DesktopLamp from './assets/desktop-lamp.png'
import './styles.scss'
import BaseButton from '@/shared/button'

const ReadyToStartSoftwareDev = () => {
  return (
    <div className="ready-to-start">
      <div className="images-container">
        <Image src={BG} alt="map" className="bg-image" fill priority />
        <BgMap className="bg-map"/>
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
        <BaseButton className="contact-us">Contact us</BaseButton>
      </div>
    </div>
  )
}

export default ReadyToStartSoftwareDev
