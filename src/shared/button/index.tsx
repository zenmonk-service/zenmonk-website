'use client'

import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import './styles.scss'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (e?: any) => void
  className?: string
  disableShine?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: 'contained' | 'text' | 'outlined'
  sx?: any
  loading?: boolean
  disabled?: boolean
  showArrow?: boolean
  endAdornment?: React.ReactNode
}

const BaseButton = ({
  children,
  disableShine = false,
  type = 'button',
  variant = 'contained',
  sx,
  loading = false,
  disabled = false,
  showArrow = false,
  endAdornment,
  ...props
}: ButtonProps) => {
  const shouldShowArrow = Boolean(showArrow && !endAdornment)

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
            <span className="base-button-label">{children}</span>
            {endAdornment ? (
              <span className="base-button-end-adornment">{endAdornment}</span>
            ) : shouldShowArrow ? (
              <span className="base-button-arrow-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 12H21.5M14.5 5L21.5 12L14.5 19" stroke="#132427" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            ) : null}
            {!disableShine && variant === 'contained' && <span className="base-button-shine" />}
          </>
        )}
      </Button>
    </div>
  )
}

export default BaseButton
