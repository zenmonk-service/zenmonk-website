import Image from 'next/image'
import NotificationAdd from '@mui/icons-material/NotificationsOutlined'
import Search from '@mui/icons-material/Search'
import Monk from '@/assets/icons/monk.svg'
import Apps from '../assets/apps.svg'
import Button1 from '../assets/hero-image/button-1.svg'
import Button from '../assets/hero-image/button.svg'
import MoneyAdd from '../assets/hero-image/money-add.svg'
import RevenueBar from '../assets/hero-image/revenue-bar.svg'
import RevenueChart from '../assets/hero-image/revenue-chart.svg'
import StaticBox from '../assets/hero-image/static-box.svg'
import StaticBox1 from '../assets/hero-image/static-list.svg'
import Wallet from '../assets/hero-image/wallet.svg'
import Withdraw from '../assets/hero-image/withdraw.svg'
import IncomeThisMonth from './income-this-month'
import './screen.styles.scss'

const Screen = () => {
  return (
    <div className="screen-container">
      <div className="screen-sidebar">
        <Monk className="screen-logo" />
        <div className="dashboard-list-item">
          <Apps className="apps" />
          <p className="dashboard-title">Dashboard</p>
        </div>
      </div>
      <div className="screen-content">
        <div className="screen-app-bar">
          <div className="screen-searchbar">
            <Search className="search-icon" />
            <p className="search-title">Search</p>
          </div>
        </div>
        <p className="dashboard-content-title">Dashboard</p>
        <div className="screen-expenses">
          <div className="screen-expenses-container-1">
            <IncomeThisMonth
              svgBg="#F0F0F5"
              Svg={Wallet}
              percentage="10.02%"
              title="Balance"
            />
          </div>
          <div className="screen-expenses-container-2">
            <IncomeThisMonth
              svgBg="#e9fbff"
              Svg={MoneyAdd}
              percentage="16.02%"
              title="Income This month"
            />
          </div>
          <div className="screen-expenses-container-3">
            <IncomeThisMonth
              svgBg="#FFB26A"
              Svg={Withdraw}
              invert
              percentage="04.32%"
              title="Expenses"
            />
          </div>
        </div>
        <div className="revenue-container">
          <p className="revenue-container-title">Your Balance</p>
          <p className="total-money">$120,543.43</p>
          <RevenueBar />
          <RevenueChart className="revenue-chart" />
        </div>
      </div>
      <div className="screen-statistics">
        <div className="app-bar-flex">
          <div className="screen-stats-icon-container">
            <NotificationAdd className="notification" />
          </div>
          <div>
            <Image
              src="/hero/monk.webp"
              fill
              alt="logo"
              className="stat-logo"
            ></Image>
          </div>
        </div>
        <div className="btn-flex">
          <Button style={{ scale: 0.7 }} />
          <Button1 style={{ scale: 0.7 }} />
        </div>
        <StaticBox className="round-chart" />
        <StaticBox1 className="static-list" />
      </div>
    </div>
  )
}

export default Screen
