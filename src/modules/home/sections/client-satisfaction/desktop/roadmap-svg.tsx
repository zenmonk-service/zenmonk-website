import React from 'react'
import EmojiSad from '../assets/emoji-sad.gif'
import EmojiThink from '../assets/emoji-think.gif'
import EmojiSmile from '../assets/emoji-smile.gif'
import EmojiHappy from '../assets/emoji-happy.gif'

const RoadmapSVG = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1432 651"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="arrow-clip">
          <rect className="arrow-mask" x="0" y="0" width="0%" height="100%" />
        </clipPath>
      </defs>

      <g clipPath="url(#arrow-clip)">
        <path
          d="M1.90735e-06 517.702C1.90735e-06 527.959 8.31509 536.274 18.5723 536.274C28.8294 536.274 37.1445 527.959 37.1445 517.702C37.1445 507.445 28.8294 499.13 18.5723 499.13C8.31509 499.13 1.90735e-06 507.445 1.90735e-06 517.702ZM1424.84 0L1391.08 21.8473L1426.88 40.1583L1424.84 0ZM18.5723 517.702L18.0477 521.144C198.237 548.602 467.746 575.13 731.858 520.135C996.07 465.12 1255.09 328.459 1413.68 29.465L1410.6 27.8333L1407.53 26.2015C1250.16 322.888 993.219 458.599 730.438 513.317C467.556 568.056 199.032 541.678 19.0968 514.259L18.5723 517.702Z"
          fill="#24C9BB"
        />
      </g>

      {/* Step 1: Sad */}
      <g className="satisfaction-step step-1" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <g filter="url(#filter0_d_41_82)">
          <path
            d="M316.234 505.749C330.278 548.731 306.214 595.34 262.486 609.852C218.758 624.364 171.924 601.284 157.88 558.301C143.836 515.319 167.9 468.711 211.628 454.199C216.109 452.712 220.622 451.619 225.13 450.903L240.262 433.95L254.051 451.361C282.356 456.808 306.758 476.748 316.234 505.749Z"
            fill="url(#paint0_linear_41_82)"
          />
        </g>
        <path
          d="M263.015 600.075C298.596 584.899 315.746 542.253 301.319 504.823C286.893 467.393 246.353 449.352 210.772 464.528C175.19 479.704 158.041 522.35 172.467 559.78C186.894 597.21 227.433 615.251 263.015 600.075Z"
          fill="white"
        />
        <image href={EmojiSad.src} x="195.814" y="488.196" width="83.7377" height="87.7157" />
      </g>

      {/* Step 2: Think */}
      <g className="satisfaction-step step-2" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <g filter="url(#filter1_d_41_82)">
          <path
            d="M660.23 471.266C693.915 500.685 697.373 551.84 667.955 585.524C656.907 598.175 642.792 606.562 627.689 610.546L610.633 632.365L596.955 612.622C581.456 610.706 566.345 604.295 553.697 593.249C520.012 563.831 516.553 512.676 545.972 478.991C575.39 445.306 626.545 441.848 660.23 471.266Z"
            fill="url(#paint1_linear_41_82)"
          />
        </g>
        <path
          d="M655.956 580.969C683.24 553.685 683.24 509.45 655.956 482.166C628.672 454.882 584.437 454.882 557.153 482.166C529.87 509.45 529.87 553.685 557.153 580.969C584.437 608.252 628.672 608.252 655.956 580.969Z"
          fill="white"
        />
        <image href={EmojiThink.src} x="564.729" y="490.329" width="84.1549" height="83.7992" />
      </g>

      {/* Step 3: Smile */}
      <g className="satisfaction-step step-3" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <g filter="url(#filter2_d_41_82)">
          <path
            d="M972.862 375.061C1014.56 383.193 1040.92 422.454 1031.72 462.753C1022.53 503.051 981.27 529.127 939.567 520.995C897.864 512.863 871.51 473.602 880.704 433.304C885.765 411.123 900.54 393.251 919.756 383.02L931.121 359.596L949.892 373.94C957.399 373.221 965.122 373.552 972.862 375.061Z"
            fill="url(#paint2_linear_41_82)"
          />
        </g>
        <path
          d="M979.767 508.998C1012.57 495.128 1028.38 456.152 1015.08 421.942C1001.78 387.732 964.407 371.244 931.606 385.114C898.804 398.984 882.994 437.961 896.294 472.171C909.593 506.38 946.965 522.869 979.767 508.998Z"
          fill="white"
        />
        <image href={EmojiSmile.src} x="917.822" y="407.906" width="77.1984" height="80.1717" />
      </g>

      {/* Step 4: Happy */}
      <g className="satisfaction-step step-4" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <g filter="url(#filter3_d_41_82)">
          <path
            d="M1360.65 130.9C1393.93 160.043 1397.28 210.644 1368.13 243.92C1365.1 247.386 1361.83 250.528 1358.37 253.342L1357.06 277.844L1333.67 266.991C1307.49 275.87 1277.41 270.931 1255.11 251.403C1221.84 222.259 1218.49 171.658 1247.63 138.382C1276.77 105.106 1327.37 101.756 1360.65 130.9Z"
            fill="url(#paint3_linear_41_82)"
          />
        </g>
        <path
          d="M1332.08 253.858C1367.44 239.519 1384.49 199.224 1370.15 163.857C1355.81 128.49 1315.52 111.444 1280.15 125.783C1244.78 140.123 1227.74 180.418 1242.08 215.784C1256.41 251.151 1296.71 268.197 1332.08 253.858Z"
          fill="white"
        />
        <image href={EmojiHappy.src} x="1264.09" y="149.347" width="83.2354" height="82.8836" />
      </g>
      <defs>
        <filter
          id="filter0_d_41_82"
          x="147.874"
          y="427.95"
          width="190.365"
          height="204.24"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5.99989" dy="5.99989" />
          <feGaussianBlur stdDeviation="5.99989" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.431373 0 0 0 0 0.447059 0 0 0 0 0.443137 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_41_82"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_41_82"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_41_82"
          x="519.985"
          y="445.279"
          width="185.957"
          height="205.085"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5.99989" dy="5.99989" />
          <feGaussianBlur stdDeviation="5.99989" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.431373 0 0 0 0 0.447059 0 0 0 0 0.443137 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_41_82"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_41_82"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_41_82"
          x="872.874"
          y="353.596"
          width="178.68"
          height="186.884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5.99989" dy="5.99989" />
          <feGaussianBlur stdDeviation="5.99989" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.431373 0 0 0 0 0.447059 0 0 0 0 0.443137 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_41_82"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_41_82"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_41_82"
          x="1221.79"
          y="105.058"
          width="184.187"
          height="190.786"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5.99989" dy="5.99989" />
          <feGaussianBlur stdDeviation="5.99989" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.431373 0 0 0 0 0.447059 0 0 0 0 0.443137 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_41_82"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_41_82"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_41_82"
          x1="154.135"
          y1="527.241"
          x2="319.786"
          y2="539.529"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4FD0FF" />
          <stop offset="1" stopColor="#0092FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_41_82"
          x1="526.166"
          y1="537.736"
          x2="687.729"
          y2="526.813"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB100" />
          <stop offset="1" stopColor="#FF5C00" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_41_82"
          x1="879.219"
          y1="455.813"
          x2="1033.39"
          y2="441.673"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D900B1" />
          <stop offset="1" stopColor="#7E00B0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_41_82"
          x1="1227.95"
          y1="196.442"
          x2="1387.77"
          y2="185.862"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C0D900" />
          <stop offset="1" stopColor="#11B000" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default RoadmapSVG
