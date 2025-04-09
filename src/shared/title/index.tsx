'use client'

import { useEffect, useRef, useState } from 'react'
import { Box, Typography, TypographyProps } from '@mui/material'
import './styles.scss'

const Mark = '/title/mark.svg'

interface TitleProps extends TypographyProps {
  text: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

const Title = ({ text, align = 'center', className, ...props }: TitleProps) => {
  const words = text.split(' ')
  const isSingleWord = words.length === 1
  const lastWord = words.pop() || ''
  const restOfText = words.join(' ')

  const lastWordRef = useRef<HTMLSpanElement | null>(null)
  const [lastWordWidth, setLastWordWidth] = useState<number | null>(null)

  useEffect(() => {
    if (lastWordRef.current) {
      setLastWordWidth(lastWordRef.current.offsetWidth)
    }
  }, [text])

  return (
    <Typography
      component="h5"
      variant="h5"
      className={`title-text ${className}`}
      textAlign={align}
      {...props}
    >
      {isSingleWord ? (
        <span className="last-word">
          <span ref={lastWordRef} className="word-container">
            {lastWord}
          </span>
          <span
            className="mark-container"
            style={{ width: lastWordWidth ? `${lastWordWidth}px` : 'auto' }}
          >
            <Box src={Mark} alt="mark" component="img" className="mark-icon" />
          </span>
        </span>
      ) : (
        <>
          {restOfText}{' '}
          <span className="last-word">
            <span ref={lastWordRef} className="word-container">
              {lastWord}
            </span>
            <span
              className="mark-container"
              style={{ width: lastWordWidth ? `${lastWordWidth}px` : 'auto' }}
            >
              <Box
                src={Mark}
                alt="mark"
                component="img"
                className="mark-icon"
              />
            </span>
          </span>
        </>
      )}
    </Typography>
  )
}

export default Title
