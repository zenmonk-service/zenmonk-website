import React from 'react'
import styles from './star-animation.module.scss'

const StarIcon = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.hoverExpandWrapper} ${className || ''}`}>
      <svg
        className={styles.starIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        fill="none"
      >
        <g className={`mainStar ${styles.shape}`}>
          <path
            d="M105 100L95 100M100 105L100 95"
            stroke="#FFAA00"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Triangle */}
        <g className={`bottomArrow ${styles.shape}`}>
          <path d="M100 90L108 105L92 105Z" stroke="#2631FF" strokeWidth="2" />
        </g>

        {/* Hollow Star */}
        <g className={`smallStar ${styles.shape}`}>
          <path
            d="M100 85L103 93H111L105 98L107 106L100 101L93 106L95 98L89 93H97L100 85Z"
            stroke="#FDA935"
            strokeWidth="2"
          />
        </g>

        <circle
          cx="100"
          cy="100"
          r="8"
          stroke="#FF0000"
          strokeWidth="2"
          className={`circlePart ${styles.shape}`}
        />
      </svg>
    </div>
  )
}

export default StarIcon
