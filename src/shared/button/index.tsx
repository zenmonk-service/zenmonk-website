'use client'

import Button from '@mui/material/Button'
import './styles.scss'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}
const BaseButton = ({ children, ...props }: ButtonProps) => {
  return (
    <div className="base-button-container">
      <Button
        className={`base-button ${props?.className}`}
        onClick={props?.onClick}
      >
        {children}
      </Button>
    </div>
  )
}

export default BaseButton
