'use client'

import { useEffect, useRef, useState } from 'react'
import Typography from '@mui/material/Typography'
import './styles.scss'
import Odometer from 'odometer'

const OdometerComponent = ({ value }: { value: number }) => {
  const odometerRef = useRef<HTMLDivElement>(null)
  const [odometer, setOdometer] = useState<Odometer | null>(null)

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
  }, [odometer, value])

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
