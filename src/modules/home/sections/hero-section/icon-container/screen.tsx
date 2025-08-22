import Image from 'next/image'
import NotificationAdd from '@mui/icons-material/NotificationsOutlined'
import Search from '@mui/icons-material/Search'
import Monk from '@/assets/icons/monk.svg'
import Apps from '../assets/apps.svg'
import RevenueChart from '../assets/hero-image/line-chart.svg'
import MoneyAdd from '../assets/hero-image/money-add.svg'
import Wallet from '../assets/hero-image/wallet.svg'
import Withdraw from '../assets/hero-image/withdraw.svg'
import Analytics from './anaytics'
import FilterButtons from './filter-buttons'
import IncomeThisMonth from './income-this-month'
import './screen.styles.scss'
import StatList from './stats-list'

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
              svgBg="#FFF6EE"
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
          <div className="revenue-app-bar">
            <p>Incomes</p>
            <p>Expenses</p>
            <p>Savings</p>
            <p>Investment</p>
            <p />
          </div>
          <div className="revenue-line-chart">
            <div className="revenue-line-chart-y-axis">
              <p>2000</p>
              <p>1600</p>
              <p>1200</p>
              <p>800</p>
              <p>400</p>
              <p>0</p>
            </div>
            <RevenueChart />
            <div className="revenue-line-chart-marker">
              <p className="revenue-line-chart-marker-title">03 April</p>
              <p className="revenue-line-chart-marker-description">$825</p>
            </div>
          </div>
          <div className="revenue-line-chart-x-axis">
            <p>01 Apr</p>
            <p>02 Apr</p>
            <p>03 Apr</p>
            <p>04 Apr</p>
            <p>05 Apr</p>
            <p>06 Apr</p>
            <p>07 Apr</p>
          </div>
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
            />
          </div>
        </div>
        <div className="btn-flex">
          <FilterButtons />
        </div>
        <Analytics />
        <StatList />
        {/* <StaticBox1 className="static-list" /> */}
      </div>
    </div>
  )
}

export default Screen
