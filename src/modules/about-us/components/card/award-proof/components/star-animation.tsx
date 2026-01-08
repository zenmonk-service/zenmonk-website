import React from 'react'
import './styles.scss'

const StarIcon = () => {
  return (
    <>
      <div className="hover-expand-wrapper">
        <svg
          className="star-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          fill="none"
        >
          {/* Cross / Plus */}
          <g className="main-star shape">
            <path
              d="M10 5L0 5M5 10L5 0"
              stroke="#FFAA00"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Triangle */}
          <g className="bottom-arrow shape">
            <path
              d="M5 0L10 10L0 10Z"
              stroke="#2631FF"
              strokeWidth="1.5"
            />
          </g>

          {/* Hollow Star */}
          <g className="small-star shape">
            <path
              d="M12 2L14.5 8H21L16 12L17.5 18L12 14.5L6.5 18L8 12L3 8H9.5L12 2Z"
              stroke="#FDA935"
              strokeWidth="1.5"
            />
          </g>

          {/* Circle */}
          <circle
            cx="5"
            cy="5"
            r="4"
            stroke="#FF0000"
            strokeWidth="1.5"
            className="circle-part shape"
          />
        </svg>
      </div>
    </>
  )
}

export default StarIcon
