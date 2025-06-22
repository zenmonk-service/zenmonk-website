'use client'

import Button from '@mui/material/Button'
import './styles.scss'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disableShine?: boolean
}
const BaseButton = ({
  children,
  disableShine = false,
  ...props
}: ButtonProps) => {
  return (
    <div className="base-button-container">
      <Button
        disableRipple
        disableFocusRipple
        disableTouchRipple
        className={`base-button ${props.className}`}
        onClick={props.onClick}
      >
        {children}
        {!disableShine && <div className="base-button-shine" />}
      </Button>
    </div>
  )
}

export default BaseButton
