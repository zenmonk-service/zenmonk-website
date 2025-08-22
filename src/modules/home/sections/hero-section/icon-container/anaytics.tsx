import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import RoundChart from '../assets/hero-image/round-chart.svg'

const Analytics = () => {
  return (
    <div className="screen-analytics-container">
      <div className="header">
        <p className="title">Analytics</p>
        <InfoOutlinedIcon className="info-icon" />
      </div>
      <div className="tabs">
        <p className="tab active">Income</p>
        <p className="tab">Expenses</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <RoundChart className="round-chart" />
      </div>
      <div className="percentage first">16%</div>
      <div className="percentage second">13%</div>
      <div className="percentage third">28%</div>
      <div className="percentage fourth">43%</div>
      <div className="analytics-texts-container">
        <div className="analytics-text-container">
          <div className="icon" style={{ background: '#72DEF6' }} />
          <p className="analytics-text">Household</p>
        </div>
        <div className="analytics-text-container">
          <div className="icon" style={{ background: '#AFE9C2' }} />
          <p className="analytics-text">Food</p>
        </div>
        <div className="analytics-text-container">
          <div className="icon" style={{ background: '#FFB26A' }} />
          <p className="analytics-text">Clothing</p>
        </div>
        <div className="analytics-text-container">
          <div className="icon" style={{ background: '#FBE77F' }} />
          <p className="analytics-text">Entertainment</p>
        </div>
      </div>
    </div>
  )
}

export default Analytics
