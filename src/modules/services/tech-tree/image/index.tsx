'use client'

import { CSSProperties, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Tooltip } from '@mui/material'
import BaseTree from '../assets/base-tree.svg'
import styles from './section-image.module.scss'

const getSize = (size: string, padding?: string): CSSProperties => {
  switch (size) {
    case 'top':
      return {
        width: '14%',
        top: '-3%',
        left: '38%',
        padding: padding || 'max(6px, 0.45vw)',
      }
    case 'top-leaf':
      return {
        width: '18%',
        top: '4%',
        right: '24%',
        padding: padding || 'max(8px, 0.8vw)',
      }
    case 'top-leaf-right':
      return {
        width: '14%',
        top: '21%',
        right: '20%',
        padding: padding || 'max(6px, 0.4vw)',
      }
    case 'bottom-right-leaf':
      return {
        width: '19%',
        top: '36%',
        right: '7%',
        padding: padding || 'max(10px, 1.0vw)',
      }
    case 'bottom-left-leaf':
      return {
        width: '18.5%',
        bottom: '31%',
        left: '4%',
        padding: padding || 'max(8px, 0.833vw)',
      }
    case 'top-left-leaf':
      return {
        width: '18%',
        top: '24%',
        left: '17%',
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
        width: '10.5%',
        top: '18%',
        left: '35%',
        padding: padding || 'max(5px, 0.4vw)',
      }
    case 'top-left-filler-leaf':
      return {
        width: '13%',
        top: '12%',
        left: '17%',
        padding: padding || 'max(8px, 0.7vw)',
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
    style?: CSSProperties
  }[]
}

const SectionImage = ({ data }: SectionImageProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inView) {
      const mountTimer = setTimeout(() => {
        setMounted(true);
      }, 100);
      return () => clearTimeout(mountTimer);
    }
  }, [inView]);

  return (
    <div className={styles.sectionImageContainer} ref={ref}>
      <div className={styles.baseTreeContainer}>
        <BaseTree />
      </div>
      {data.map((item, index) => {
        const delay = index * 0.15;
        const { padding, ...positionStyles } = getSize(item.position, item.padding);

        const currentOpacity = mounted ? 1 : 0;
        const currentTranslateY = mounted ? '0px' : '-100vh';
        const currentScale = mounted ? 'scale(1)' : 'scale(0.5)';

        return (
          <Tooltip key={index} title={item.label}>
            <div
              className={styles.nodeWrapper}
              style={{
                ...positionStyles,
                ...item.style,
                opacity: currentOpacity,
                transform: `translateY(${currentTranslateY})`,
                transitionDelay: `${delay}s`,
                zIndex: item.icon ? 20 : 10,
              }}
            >
              <div
                className={styles.nodeInner}
                style={{
                  backgroundColor: item.backgroundColor,
                  transitionDelay: `${delay}s`,
                  transform: currentScale,
                  padding: padding,
                }}
              >
                <div className={styles.floatWrapper}>
                  {item.icon ? <item.icon /> : <></>}
                </div>
              </div>
            </div>
          </Tooltip>
        );
      })}
    </div>
  )
}

export default SectionImage
