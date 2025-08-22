import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const StatList = () => {
  return (
    <div className="stat-list-container">
      <div className="header">
        <p className="title">Transactions</p>
        <InfoOutlinedIcon className="info-icon" />
      </div>
      <div className="body">
        <div className="list-item">
          <div className="ball" />
          <div style={{ flex: 1 }}>
            <p className="item-title">Lunch Money</p>
            <p className="item-time">06 April, 2023</p>
          </div>
          <div className="profit" style={{ color: 'red' }}>
            -$10.00
          </div>
        </div>
        <div className="list-item">
          <div className="ball" style={{ background: '#AFE9C2' }} />
          <div style={{ flex: 1 }}>
            <p className="item-title">April Bonus</p>
            <p className="item-time">05 April, 2023</p>
          </div>
          <div className="profit">+$500.00</div>
        </div>
        <div className="list-item">
          <div className="ball" style={{ background: '#AFE9C2' }} />

          <div style={{ flex: 1 }}>
            <p className="item-title">Allowance</p>
            <p className="item-time">05 April, 2023</p>
          </div>
          <div className="profit">+$500.00</div>
        </div>
      </div>
    </div>
  )
}

export default StatList
