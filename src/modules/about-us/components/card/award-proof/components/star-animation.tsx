import React from 'react'
import './styles.scss'

const StarIcon = () => {
  return (
    <>
      <div className="hover-expand-wrapper">
        <svg
          className="star-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
        >
          <g className="main-star">
            <path
              d="M55.5452 44.4241L45.113 44.7204L44.6471 44.7336L44.6276 45.1993L44.2108 55.1786L38.4057 46.6312L38.1653 46.2772L37.7785 46.46L28.4365 50.8742L33.1462 42.0664L33.366 41.6553L32.9713 41.4073L24.1355 35.8533L34.5677 35.5571L35.0336 35.5438L35.0531 35.0781L35.4699 25.0989L41.275 33.6463L41.5154 34.0002L41.9022 33.8174L51.2442 29.4033L46.5345 38.2111L46.3147 38.6221L46.7093 38.8702L55.5452 44.4241Z"
              stroke="#FFAA00"
            />
          </g>
          <g opacity="0.5" className="small-star">
            <path
              d="M5.99374 12.0965L16.0731 14.9601L22.7399 5.32781L19.1144 16.467L27.4985 22.752L17.4191 19.8884L10.7524 29.5206L14.3779 18.3815L5.99374 12.0965Z"
              fill="url(#paint0_linear_2981_3012)"
            />
            <path
              d="M5.99374 12.0965L16.0731 14.9601L22.7399 5.32781L19.1144 16.467L27.4985 22.752L17.4191 19.8884L10.7524 29.5206L14.3779 18.3815L5.99374 12.0965Z"
              fill="#FDA935"
            />
          </g>
          <circle
            cx="17"
            cy="33"
            r="4.5"
            stroke="#FF0000"
            className="circle-part"
          />
          <g className="bottom-arrow">
            <path
              opacity="0.5"
              d="M40.7024 6.99188L40.2023 21.7057L27.7098 13.9157L40.7024 6.99188Z"
              stroke="#2631FF"
              stroke-width="2"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2981_3012"
              x1="-4.65664"
              y1="110.329"
              x2="-24.6244"
              y2="-8.43231"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.014" stop-color="#F6C054" />
              <stop offset="0.2834" stop-color="#CDA85A" />
              <stop offset="0.5351" stop-color="#FFEA72" />
              <stop offset="0.584" stop-color="#FFF071" />
              <stop offset="0.5912" stop-color="#FFF171" />
              <stop offset="0.8204" stop-color="#FFE05A" />
              <stop offset="0.9603" stop-color="#FFD44A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  )
}

export default StarIcon
