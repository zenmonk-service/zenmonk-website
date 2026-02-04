import { CSSProperties } from 'react'
import { Tooltip } from '@mui/material'
import BaseTree from '../assets/base-tree.svg'
import styles from './section-image.module.scss'

const getSize = (size: string): CSSProperties => {
  switch (size) {
    case 'top':
      return {
        width: 'max(68px, 3.5vw)',
        top: 'min(-68px, -3.5vw)',
        left: '32%',
        padding: 'max(8px, 0.4vw)',
      }
    case 'top-leaf':
      return {
        width: 'max(114px, 5.93vw)',
        top: 'min(-38.4px, -2vw)',
        right: '30%',
        padding: 'max(16px, 0.833vw)',
      }
    case 'top-leaf-right':
      return {
        width: 'max(96px, 5vw)',
        top: 'max(96px, 5vw)',
        right: '20%',
        padding: 'max(8px, 0.4vw)',
      }
    case 'bottom-right-leaf':
      return {
        width: 'max(130px, 6.77vw)',
        top: 'max(250px, 13vw)',
        right: '0',
        padding: 'max(32px, 1.66vw)',
      }
    case 'bottom-left-leaf':
      return {
        width: 'max(114px, 5.93vw)',
        bottom: 'max(211px, 11vw)',
        left: '0',
        padding: 'max(16px, 0.833vw)',
      }
    case 'top-left-leaf':
      return {
        width: 'max(115.2px, 6vw)',
        top: 'max(96px, 7.5vw)',
        left: '13%',
        padding: 'max(16px, 0.833vw)',
      }
    case 'bottom-filler-leaf':
      return {
        width: 'max(68px, 3.5vw)',
        bottom: 'max(100px, 14.7vw)',
        left: '28%',
        padding: 'max(14px, 0.72vw)',
      }
    case 'left-filler-leaf':
      return {
        width: 'max(76px, 4vw)',
        top: 'max(100px, 14.2vw)',
        left: '0',
        padding: 'max(24px, 1.25vw)',
      }
    case 'top-filler-leaf':
      return {
        width: 'max(68px, 3.5vw)',
        top: 'max(58px, 3vw)',
        left: '25%',
        padding: 'max(14px, 0.72vw)',
      }
    case 'top-left-filler-leaf':
      return {
        width: 'max(68px, 3.5vw)',
        top: '0vw',
        left: '6%',
        padding: 'max(16px, 0.833vw)',
      }
    case 'bottom-left-filler-leaf':
      return {
        width: 'max(68px, 3.5vw)',
        bottom: 'max(355.2px, 18.5vw)',
        right: '32%',
        padding: 'max(8px, 0.4vw)',
      }
    case 'bottom-middle-filler-leaf':
      return {
        width: 'max(68px, 3.5vw)',
        bottom: 'max(268.8px, 14vw)',
        right: '20%',
        padding: 'max(14px, 0.72vw)',
      }
    case 'bottom-right-filler-leaf':
      return {
        width: 'max(48px, 2.5vw)',
        bottom: 'max(192px, 10vw)',
        right: '15%',
        padding: 'max(12px, 0.62vw)',
      }
    default:
      return {}
  }
}

interface SectionImageProps {
  data: {
    icon: any
    position: string
    label: string
    backgroundColor: string
  }[]
}

const SectionImage = ({ data }: SectionImageProps) => {
  return (
    <div className={styles.sectionImageContainer}>
      <div className={styles.baseTreeContainer}>
        <BaseTree />
      </div>
      {data.map((data, index) => (
        <Tooltip key={index} title={data.label}>
          <div
            className={styles.iconContainer}
            style={{
              ...getSize(data.position),
              backgroundColor: data.backgroundColor,
            }}
          >
            <data.icon />
          </div>
        </Tooltip>
      ))}
    </div>
  )
}

export default SectionImage
