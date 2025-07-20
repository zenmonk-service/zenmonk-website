import ArrowUP from '../assets/hero-image/arrow-up.svg'
import './icon-container.styles.scss'

interface props {
  title: string
  Svg: any
  percentage: string
  svgBg: string
  invert?: boolean
}
const IncomeThisMonth = (props: props) => {
  const { Svg, svgBg, title, percentage, invert } = props
  return (
    <div className="income-this-month-container">
      <div className="income-this-month-flex-container">
        <div
          className="money-add-container"
          style={{
            background: `${svgBg}`,
          }}
        >
          <Svg className="money-add-svg" />
        </div>
        <div className="percentage">
          {!invert && (
            <ArrowUP
              className="arrow-up-icon"
              style={{
                transform: invert ? 'rotate(180deg)' : 'none',
                color: 'red !important',
              }}
            />
          )}
          <p
            className="money-percentage"
            style={{ color: invert ? 'red' : '#5db57a' }}
          >
            {percentage}
          </p>
        </div>
      </div>
      <div className="income-this-month-title">{title}</div>
      <div className="income-in-dollars">$12,003.902</div>
    </div>
  )
}

export default IncomeThisMonth
