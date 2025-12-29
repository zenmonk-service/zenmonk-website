'use client'

import { Box } from '@mui/material'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { DESKTOP_POSITIONS, MOBILE_POSITIONS } from './icon-positions'
import styles from './random-bg-icons.module.css'

export type StaticStyle = {
  top: string
  left: string
  transform?: string
}

export function RandomBgIcons({ Icons }: { Icons: any[] }) {
  const isMobile = useMediaQuery('(max-width:780px)')
  const POSITIONS = isMobile ? MOBILE_POSITIONS : DESKTOP_POSITIONS
  return (
    <div className={styles.container}>
      {Icons?.map((Icon, index) => (
        <Box
          key={index}
          className={`${styles.icon} ${styles.float}`}
          style={POSITIONS[index]}
        >
          <Icon />
        </Box>
      ))}
    </div>
  )
}
