import Arrow from '../assets/hero-image/arrow-right.svg'
import './icon-container.styles.scss'

interface props {
  title: string
  money: string
  rotate?: boolean
}
const ExpenseCard = (props: props) => {
  const { title, money, rotate } = props
  return (
    <div className="expense-card-container">
      <div className="expense-card-arrow">
        <Arrow
          className="arrow-right-icon"
          style={{
            transform: rotate ? 'rotate(180deg)' : 'none',
          }}
        />
      </div>
      <div>
        <p className="expense-card-title">{title}</p>
        <p className="expense-card-budget">{money}</p>
      </div>
    </div>
  )
}

export default ExpenseCard
