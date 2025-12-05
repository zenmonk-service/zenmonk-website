'use client'

import { JSX, forwardRef } from 'react'
import { InputBase, InputBaseProps } from '@mui/material'
import styles from './textfield.module.scss'

interface TextFieldProps extends Omit<InputBaseProps, 'color'> {
  className?: string
  placeHolder?: string
  endAdornment?: JSX.Element
  rows?: number
  multiline?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, placeHolder, endAdornment, ...rest }, ref) => {
    return (
      <InputBase
        spellCheck={false}
        autoComplete="off"
        className={`${className} ${styles.textfieldBase}`}
        placeholder={placeHolder}
        endAdornment={endAdornment}
        inputRef={ref}
        {...rest}
      />
    )
  }
)
TextField.displayName = 'TextField'

export default TextField
