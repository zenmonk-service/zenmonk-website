import Image from 'next/image'
import laptopDashboard from '../assets/laptop.svg?url'
import Expense from '../assets/expense.png'
import Revenue from '../assets/revenue.svg'
import Figma from "../assets/figma.png"
import React from "../assets/react.png"
import Js from "../assets/js.png"
import Mongo from "../assets/mongo.png"
import Php from "../assets/php.png"
import Xd from "../assets/xd.png"
import Circle from "../assets/circle.svg?url"

const HeroImage = () => {
  return (
    <>
      <div className="laptop-frame" style={{ pointerEvents: 'none' }}>

        {/* ball animated */}
        <Image src={Circle}
          alt="Circle Animated"
          width={600}
          height={400}
          className="circle-img"
          style={{ pointerEvents: 'none' }}
        />
        <Revenue
          className="revenue-img"
          style={{ pointerEvents: 'none' }}
        />
        <Image
          src={Expense}
          alt="Expense"
          width={600}
          height={400}
          className="expense-img"
          style={{ pointerEvents: 'none' }}
        />
        <Image
          src={laptopDashboard}
          alt="Laptop Dashboard"
          className="laptop-img"
          priority
          unoptimized
          style={{ pointerEvents: 'none' }}
        />
      </div>
      <div className="floating-icon iconReact" style={{ pointerEvents: 'none' }}>
        <Image src={React} alt="React" width={40} height={40} style={{ pointerEvents: 'none' }} />
      </div>
      <div className="floating-icon iconPhp" style={{ pointerEvents: 'none' }}>
        <Image src={Php} alt="PHP" width={40} height={40} style={{ pointerEvents: 'none' }} />
      </div>
      <div className="floating-icon iconXd" style={{ pointerEvents: 'none' }}>
        <Image src={Xd} alt="Adobe XD" width={20} height={20} style={{ pointerEvents: 'none' }} />
      </div>
      <div className="floating-icon iconFigma" style={{ pointerEvents: 'none' }}>
        <Image src={Figma} alt="Figma" width={60} height={60} style={{ pointerEvents: 'none' }} />
      </div>
      <div className="floating-icon iconNode" style={{ pointerEvents: 'none' }}>
        <Image src={Js} alt="Node JS" width={60} height={60} style={{ pointerEvents: 'none' }} />
      </div>
      <div className="floating-icon iconMongo" style={{ pointerEvents: 'none' }}>
        <Image src={Mongo} alt="MongoDB" width={40} height={40} style={{ pointerEvents: 'none' }} />
      </div>
    </>
  )
}

export default HeroImage