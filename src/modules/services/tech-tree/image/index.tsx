import { CSSProperties } from 'react'
import { Tooltip } from '@mui/material'
import BaseTree from '../assets/base-tree.svg'
import styles from './section-image.module.scss'

const getSize = (size: string, padding?: string): CSSProperties => {
  switch (size) {
    case 'top':
      return {
        width: '13%',
        top: '-10%',
        left: '32%',
        padding: padding || 'max(6px, 0.4vw)',
      }
    case 'top-leaf':
      return {
        width: '17%',
        top: '-2%',
        right: '34%',
        padding: padding || 'max(8px, 0.833vw)',
      }
    case 'top-leaf-right':
      return {
        width: '12%',
        top: '15%',
        right: '30%',
        padding: padding || 'max(6px, 0.4vw)',
      }
    case 'bottom-right-leaf':
      return {
        width: '23%',
        height: '18.8%',
        top: '36%',
        right: '5%',
        padding: padding || 'max(12px, 1.2vw)',
      }
    case 'bottom-left-leaf':
      return {
        width: '18%',
        bottom: '32%',
        left: '0',
        padding: padding || 'max(8px, 0.833vw)',
      }
    case 'top-left-leaf':
      return {
        width: '18%',
        top: '24%',
        left: '15%',
        padding: padding || 'max(8px, 0.833vw)',
      }
    case 'bottom-filler-leaf':
      return {
        width: '10%',
        bottom: '41%',
        left: '28%',
        padding: padding || 'max(6px, 0.6vw)',
      }
    case 'left-filler-leaf':
      return {
        width: '13%',
        top: '41%',
        left: '0',
        padding: padding || 'max(10px, 1.25vw)',
      }
    case 'top-filler-leaf':
      return {
        width: '11%',
        top: '10%',
        left: '25%',
        padding: padding || 'max(6px, 0.72vw)',
      }
    case 'top-left-filler-leaf':
      return {
        width: '12%',
        top: '0',
        left: '8%',
        padding: padding || 'max(10px, 0.833vw)',
      }
    case 'bottom-left-filler-leaf':
      return {
        width: '10%',
        top: '40.5%',
        right: '38%',
        padding: padding || 'max(6px, 0.4vw)',
      }
    case 'bottom-middle-filler-leaf':
      return {
        width: '10%',
        bottom: '40%',
        right: '25%',
        padding: padding || 'max(6px, 0.72vw)',
      }
    case 'bottom-right-filler-leaf':
      return {
        width: '8%',
        bottom: '32%',
        right: '20%',
        padding: padding || 'max(4px, 0.62vw)',
      }
    default:
      return {}
  }
}

interface SectionImageProps {
  data: {
    icon?: any
    position: string
    label: string
    padding?: string
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
              ...getSize(data.position, data.padding),
              backgroundColor: data.backgroundColor,
            }}
          >
            {data.icon ? <data.icon /> : <></>}
          </div>
        </Tooltip>
      ))}
    </div>
  )
}

export default SectionImage
