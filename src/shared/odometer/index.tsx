'use client'

import Odometer from 'odometer'
import { useEffect, useRef } from 'react'
import Typography from '@mui/material/Typography'
import './styles.scss'

const OdometerComponent = ({ value }: { value: number }) => {
  const odometerRef = useRef<HTMLDivElement>(null)
  const odometerInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (odometerRef.current) {
      odometerInstanceRef.current = new Odometer({
        el: odometerRef.current,
        value: 0,
        format: '(,ddd)',
        theme: 'minimal',
      })
      odometerInstanceRef.current.render()
      odometerInstanceRef.current.update(value)
    }
  }, [])

  useEffect(() => {
    if (odometerInstanceRef.current) {
      odometerInstanceRef.current.update(value)
    }
  }, [value])

  return (
    <Typography
      ref={odometerRef}
      fontSize="inherit !important"
      fontWeight="inherit"
      fontFamily="inherit"
      className="odometer"
    >
      {value}
    </Typography>
  )
}

export default OdometerComponent
