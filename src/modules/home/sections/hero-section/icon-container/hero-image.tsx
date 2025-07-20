import Image from 'next/image'
import CircleTop from '../assets/hero-image/circle.svg'
import LaptopImage from '../assets/hero-image/image.svg'
import MoneyAdd from '../assets/hero-image/money-add.svg'
import Phone from '../assets/hero-image/phone.png'
import Wallet from '../assets/hero-image/wallet.svg'
import ExpenseCard from './expense-card'
import './hero-image.styles.scss'
import './icon-container.styles.scss'
import IncomeThisMonth from './income-this-month'
import Screen from './screen'

const HeroImage = () => {
  return (
    <div className="hero-image-container">
      <div className="js-icon-container">
        <div className="js-icon-image">
          <Image src={'/hero/js.png'} alt="js" fill />
        </div>
      </div>
      <div className="react-icon-container">
        <div className="react-icon-image">
          <Image src={'/hero/react.png'} alt="react" fill />
        </div>
      </div>
      <div className="php-icon-container">
        <div className="php-icon-image">
          <Image src={'/hero/php.png'} alt="php" fill />
        </div>
      </div>
      <div className="xd-icon-container">
        <div className="xd-icon-image">
          <Image src={'/hero/xd.png'} alt="xd" fill />
        </div>
      </div>
      <div className="figma-icon-container">
        <div className="figma-icon-image">
          <Image src={'/hero/figma.png'} alt="figma" fill />
        </div>
      </div>
      <div className="mongo-icon-container">
        <div className="mongo-icon-image">
          <Image src={'/hero/mongo.png'} alt="mongo" fill />
        </div>
      </div>
      <CircleTop className="circle-top" />
      <CircleTop className="circle-right" />
      <div className="income-this-month-top">
        <IncomeThisMonth
          svgBg="#e9fbff"
          Svg={MoneyAdd}
          percentage="16.02%"
          title="Income This month"
        />
      </div>
      <div className="income-this-month-left">
        <IncomeThisMonth
          svgBg="#F0F0F5"
          Svg={Wallet}
          percentage="10.02%"
          title="Balance"
        />
        <ExpenseCard money="+91,325.00" title="Expense" />
        <ExpenseCard money="+91,325.00" title="Expense" rotate />
      </div>
      <Image src={Phone} className="phone-image" alt="phone"></Image>
      <LaptopImage
        style={{
          width: '28.5vw',
          height: '16.5vw',
        }}
      />
      <Screen />
    </div>
  )
}

export default HeroImage
