import React from 'react'
import styles from './star-animation.module.scss'

const StarIcon = () => {
  return (
    <div className={styles.hoverExpandWrapper}>
      <svg
        className={styles.starIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        style={{
          height: '200px',
          width: '200px',
        }}
        fill="none"
      >
        <g className={`${styles.mainStar} ${styles.shape}`}>
          <path
            d="M10 5L0 5M5 10L5 0"
            stroke="#FFAA00"
            strokeWidth="2"
            style={{
              height: '200px',
              width: '200px',
            }}
            strokeLinecap="round"
          />
        </g>

        {/* Triangle */}
        <g className={`${styles.bottomArrow} ${styles.shape}`}>
          <path d="M5 0L10 10L0 10Z" stroke="#2631FF" strokeWidth="1.5" />
        </g>

        {/* Hollow Star */}
        <g className={`${styles.smallStar} ${styles.shape}`}>
          <path
            d="M12 2L14.5 8H21L16 12L17.5 18L12 14.5L6.5 18L8 12L3 8H9.5L12 2Z"
            stroke="#FDA935"
            strokeWidth="1.5"
          />
        </g>

        <circle
          cx="5"
          cy="5"
          r="4"
          stroke="#FF0000"
          strokeWidth="1.5"
          style={{
            height: "200px",
            width: "200px"
          }}
          className={`${styles.circlePart} ${styles.shape}`}
        />
      </svg>
    </div>
  )
}

export default StarIcon
