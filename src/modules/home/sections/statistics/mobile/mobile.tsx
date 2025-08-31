import './mobile.styles.scss'

const StatisticsMobile = () => {
  return (
    <div className="statistics-mobile-container">
      <div className="content">
        <div className="mobile-left-section">
          <p className="title">
            We are always available, no matter the time zone or your location.
          </p>
          <p className="count">10,000+</p>
          <p className="description">
            Companies team power collaboration with Zenmonk
          </p>
        </div>
        <div className="mobile-right-section">
          <div>
            <p className="count">200+</p>
            <p className="description">Businesses delivered by Zenmonk</p>
          </div>
          <div>
            <p className="count">800+</p>
            <p className="description">Projects served by Zenmonk</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticsMobile
