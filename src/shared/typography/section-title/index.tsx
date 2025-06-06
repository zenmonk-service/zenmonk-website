'use client'

import parse from 'html-react-parser'
import { useEffect, useRef, useState } from 'react'
import { Typography, TypographyProps } from '@mui/material'
import { Mark } from './assets'
import './styles.scss'

interface TitleProps extends TypographyProps {
  text: string
  markText?: string
  highlightedText?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  markTextProps?: {
    rotate?: number
    className?: string
  }
}

const SectionTitle = ({
  text,
  markText,
  align = 'center',
  className,
  markTextProps,
  highlightedText,
  ...props
}: TitleProps) => {
  const markRef = useRef<HTMLSpanElement | null>(null)
  const [markWidth, setMarkWidth] = useState<number | null>(null)

  useEffect(() => {
    if (markRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        setMarkWidth(markRef.current?.offsetWidth ?? null)
      })
      resizeObserver.observe(markRef.current)
      return () => resizeObserver.disconnect()
    }
  }, [text, markText])

  const highlightTitle = (text: string) => {
    if (!highlightedText || !text.includes(highlightedText)) return parse(text)

    const parts = text.split(highlightedText)
    return (
      <>
        {parse(parts[0])}
        <Typography component="span">{parse(highlightedText)}</Typography>
        {parse(parts[1])}
      </>
    )
  }

  const startIndex = markText
    ? text.toLowerCase().indexOf(markText.toLowerCase())
    : -1

  const beforeMark = startIndex >= 0 ? text.slice(0, startIndex) : text
  const markedText =
    startIndex >= 0 && markText
      ? text.slice(startIndex, startIndex + markText.length)
      : ''
  const afterMark =
    startIndex >= 0 && markText ? text.slice(startIndex + markText.length) : ''

  return highlightedText ? (
    <Typography
      variant="h3"
      component="h1"
      className="highlighted-text-heading animate pop"
    >
      {highlightTitle(text)}
    </Typography>
  ) : (
    <Typography
      variant="h5"
      className={`section-title-text ${className}`}
      textAlign={align}
      {...props}
    >
      <>
        {beforeMark}
        {markedText && (
          <span className="mark-wrapper">
            <span ref={markRef} className="word-container">
              {markedText}
            </span>
            <span
              className={`mark-container ${markTextProps?.className}`}
              style={{
                width: markWidth ? `${markWidth}px` : 'auto',
                rotate: `${markTextProps?.rotate}deg`,
              }}
            >
              <Mark className="mark-icon" />
              <canvas>

              </canvas>
            </span>
          </span>
        )}
        {afterMark}
      </>
    </Typography>
  )
}

export { SectionTitle }
