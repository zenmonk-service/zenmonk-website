'use client'

import { useEffect, useRef, useState } from 'react'
import { Typography } from '@mui/material'
import './styles.scss'

const OdometerComponent = ({
  value,
  type = 'number',
}: {
  value: number
  type?: 'percentage' | 'number'
}) => {
  const odometerRef = useRef<HTMLDivElement>(null)
  const [Odometer, setOdometer] = useState<any>(null)

  useEffect(() => {
    import('odometer').then((mod) => {
      setOdometer(() => mod.default)
    })
  }, [])

  useEffect(() => {
    if (Odometer && odometerRef.current) {
      const od = new Odometer({
        el: odometerRef.current,
        value: 0,
        format: '(,ddd)',
        theme: 'minimal',
      })

      console.log('value', value)
      od.update(value)
    }
  }, [Odometer, value])

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
