'use client'
import { Button, ButtonProps } from '@mui/material'
import './styles.scss'

const BaseButton = ({ children, ...props }: ButtonProps) => {
  return (
    <div
      style={{
        width: props.fullWidth ? '100%' : 'fit-content',
        height: 'fit-content',
      }}
    >
      <Button
        className={`${props.className} base-button`}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}

export default BaseButton
