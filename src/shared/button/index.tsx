'use client'

import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import './styles.scss'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disableShine?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: 'contained' | 'text' | 'outlined'
  sx?: any
  loading?: boolean
  disabled?: boolean
}
const BaseButton = ({
  children,
  disableShine = false,
  type = 'button',
  variant = 'contained',
  sx,
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <div className={`base-button-container variant-${variant}`}>
      <Button
        disableRipple
        disableFocusRipple
        disableTouchRipple
        className={`base-button ${props.className || ''}`}
        onClick={props.onClick}
        type={type}
        sx={sx}
        disabled={disabled || loading}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          <>
            {children}
            {!disableShine && variant === 'contained' && <span className="base-button-shine" />}
          </>
        )}
      </Button>
    </div>
  )
}

export default BaseButton
