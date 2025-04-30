'use client'

import { useEffect, useRef, useState } from 'react'
import Typography from '@mui/material/Typography'
import './styles.scss'

type OdometerConstructor = new (options: any) => {
  update: (val: number) => void
  render: () => void
}

const OdometerComponent = ({ value }: { value: number }) => {
  const odometerRef = useRef<HTMLDivElement>(null)
  const [OdometerClass, setOdometerClass] = useState<OdometerConstructor | null>(null)
  const odometerInstanceRef = useRef<any>(null)

  useEffect(() => {
    import('odometer').then((mod) => {
      setOdometerClass(() => mod.default)
    })
  }, [])

  useEffect(() => {
    if (OdometerClass && odometerRef.current) {
      odometerInstanceRef.current = new OdometerClass({
        el: odometerRef.current,
        value: 0,
        format: '(,ddd)',
        theme: 'minimal',
      })
      odometerInstanceRef.current.render()
      odometerInstanceRef.current.update(value)
    }
  }, [OdometerClass])

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
