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
      <div className="laptop-frame">

        {/* ball animated */}
        <Image src={Circle}
          alt="Circle Animated"
          width={600}
          height={400}
          className="circle-img"
        />
        <Revenue
          className="revenue-img"
        />
        <Image
          src={Expense}
          alt="Expense"
          width={600}
          height={400}
          className="expense-img"
        />
        <Image
          src={laptopDashboard}
          alt="Laptop Dashboard"
          className="laptop-img"
          priority
          unoptimized
        />
      </div>
      <div className="floating-icon iconReact">
        <Image src={React} alt="React" width={40} height={40} />
      </div>
      <div className="floating-icon iconPhp">
        <Image src={Php} alt="PHP" width={40} height={40} />
      </div>
      <div className="floating-icon iconXd">
        <Image src={Xd} alt="Adobe XD" width={20} height={20} />
      </div>
      <div className="floating-icon iconFigma">
        <Image src={Figma} alt="Figma" width={60} height={60} />
      </div>
      <div className="floating-icon iconNode">
        <Image src={Js} alt="Node JS" width={60} height={60} />
      </div>
      <div className="floating-icon iconMongo">
        <Image src={Mongo} alt="MongoDB" width={40} height={40} />
      </div>
    </>
  )
}

export default HeroImage