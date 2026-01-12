'use client'

import React from 'react'
import './style.scss'
import { SectionTitle } from '@/shared/typography'
import SearchIcon from './assets/search.svg'
import BulbIcon from './assets/bulb.svg'
import GearBig from './assets/gears/big.svg'
import GearSmall from './assets/gears/small.svg'
import DesktopIcon from './assets/desktop.svg'
import FolderIcon from './assets/folder.svg'

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
}

interface DevelopmentProcessProps {
  steps?: ProcessStep[];
  title?: string;
  highlightedText?: string;
  showTitle?: boolean;
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Customer Requirement",
    description: "We collaborate with you to gather and understand your business needs and objective.",
    color: "#175BDD",
    icon: <SearchIcon />,
  },
  {
    title: "Planning",
    description: "We collaborate with you to gather and understand your business needs and objective.",
    color: "#771FCC",
    icon: <BulbIcon />,
  },
  {
    title: "Development",
    description: "We collaborate with you to gather and understand your business needs and objective.",
    color: "#CF0063",
    icon: (
      <div className="gears-wrapper">
        <GearBig className="gear-big" />
        <GearSmall className="gear-small" />
      </div>
    ),
  },
  {
    title: "System Testing",
    description: "We collaborate with you to gather and understand your business needs and objective.",
    color: "#EA9E24",
    icon: <DesktopIcon />,
  },
  {
    title: "Deliver",
    description: "We collaborate with you to gather and understand your business needs and objective.",
    color: "#BDCE29",
    icon: <FolderIcon />,
  },
]

const DevelopmentProcessHexagon: React.FC<DevelopmentProcessProps> = ({
  steps = defaultSteps,
  title = "Our Development Process",
  highlightedText = "Process",
  showTitle = false
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(0);
  const [isManualHover, setIsManualHover] = React.useState(false);

  React.useEffect(() => {
    if (isManualHover) return;

    const interval = setInterval(() => {
      setHoveredIndex((prev) => (prev === null || prev >= steps.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isManualHover, steps.length]);

  return (
    <section className="hexagon-process-section">
      {showTitle && <SectionTitle text={title} markText={highlightedText} align='center' />}

      {/* Desktop Version */}
      <div className="process-wrapper">
        <div className="svg-container">
          <svg width="1530" height="444" viewBox="0 0 1530 444" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-svg">
            <defs>
              <linearGradient id="paint0_linear_hexagon" x1="53.4446" y1="255.068" x2="239.9" y2="68.4161" gradientUnits="userSpaceOnUse">
                <stop stopColor="#175BDD" />
                <stop offset="1" stopColor="#17BDDD" />
              </linearGradient>
              <linearGradient id="paint1_linear_hexagon" x1="306.87" y1="399.509" x2="533.624" y2="172.517" gradientUnits="userSpaceOnUse">
                <stop stopColor="#771FCC" />
                <stop offset="1" stopColor="#AC68ED" />
              </linearGradient>
              <linearGradient id="paint2_linear_hexagon" x1="925.012" y1="399.03" x2="1151.5" y2="172.302" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EA9E24" />
                <stop offset="1" stopColor="#EAD124" />
              </linearGradient>
              <linearGradient id="paint3_linear_hexagon" x1="639.338" y1="273.467" x2="851.071" y2="61.5111" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CF0063" />
                <stop offset="1" stopColor="#F23690" />
              </linearGradient>
              <linearGradient id="paint4_linear_hexagon" x1="1257.5" y1="272.912" x2="1468.92" y2="61.2717" gradientUnits="userSpaceOnUse">
                <stop stopColor="#BDCE29" />
                <stop offset="1" stopColor="#8AB000" />
              </linearGradient>
            </defs>

            {/* Back Shadows/Paths */}
            <path className="hex-shadow" d="M4.77034 230.432V104.945C4.77034 89.5214 13.0758 75.1505 26.445 67.4401L125.093 10.547C131.779 6.69065 139.273 4.76362 146.768 4.76362C154.264 4.76362 161.759 6.69292 168.445 10.547L267.094 67.4401C280.463 75.1505 288.768 89.5214 288.768 104.945V243.435H293.539V104.945C293.539 87.8262 284.319 71.8736 269.48 63.3133L170.831 6.42024C155.99 -2.14008 137.553 -2.14008 122.712 6.42024L24.0587 63.3156C9.21765 71.8759 0 87.8285 0 104.947V230.434H4.77034V230.432Z" fill="#AFAFAF" />
            <path className="hex-shadow" d="M623 213.956V104.945C623 89.5214 631.305 75.1505 644.675 67.44L743.323 10.547C750.009 6.69065 757.504 4.76361 765 4.76361C772.496 4.76361 779.989 6.69292 786.675 10.547L885.323 67.44C898.692 75.1527 907 89.5214 907 104.945V245.221H911.77V104.945C911.77 87.8285 902.551 71.8759 887.709 63.3133L789.061 6.42024C774.22 -2.14008 755.782 -2.14008 740.941 6.42024L642.293 63.3133C627.454 71.8736 618.234 87.8262 618.234 104.945V213.956H623Z" fill="#AFAFAF" />
            <path className="hex-shadow" d="M597.882 203.237V338.28C597.882 353.701 589.577 368.074 576.205 375.782L477.557 432.678C464.188 440.395 447.574 440.393 434.205 432.678L335.557 375.782C322.185 368.072 313.88 353.701 313.88 338.28V227.157H309.109V338.28C309.109 355.401 318.329 371.351 333.17 379.909L431.819 436.804C439.242 441.086 447.558 443.224 455.88 443.224C464.199 443.224 472.52 441.083 479.938 436.804L578.587 379.909C593.428 371.351 602.648 355.398 602.648 338.28V203.237H597.882Z" fill="#AFAFAF" />
            <path className="hex-shadow" d="M1216.11 201.449V338.278C1216.11 353.698 1207.81 368.072 1194.44 375.78L1095.79 432.675C1082.42 440.39 1065.81 440.39 1052.44 432.675L953.791 375.78C940.422 368.069 932.114 353.701 932.114 338.278V227.155H927.344V338.278C927.344 355.398 936.564 371.348 951.405 379.907L1050.05 436.802C1057.47 441.083 1065.79 443.222 1074.11 443.222C1082.43 443.222 1090.75 441.081 1098.17 436.802L1196.82 379.907C1211.66 371.348 1220.88 355.396 1220.88 338.278V201.449H1216.11Z" fill="#AFAFAF" />
            <path className="hex-shadow" d="M1241.23 204.726V104.945C1241.23 89.5217 1249.53 75.1507 1262.9 67.4403L1361.55 10.5472C1368.24 6.6909 1375.73 4.76386 1383.23 4.76386C1390.72 4.76386 1398.22 6.6909 1404.9 10.5472L1503.55 67.4403C1516.92 75.1507 1525.23 89.5217 1525.23 104.945V230.432H1530V104.945C1530 87.8265 1520.78 71.8739 1505.94 63.3135L1407.29 6.42049C1392.45 -2.13756 1374.01 -2.13756 1359.17 6.42049L1260.52 63.3135C1245.68 71.8739 1236.46 87.8242 1236.46 104.945V204.726H1241.23Z" fill="#AFAFAF" />

            {/* Main Hexagons with Gradients */}
            <path className={`hex-main step-1 ${hoveredIndex === 0 ? 'active' : ''}`} d="M269.109 210.048V113.632C269.109 99.8023 261.723 87.022 249.732 80.107L166.145 31.8992C154.155 24.9841 139.382 24.9841 127.391 31.8992L43.8068 80.1047C31.8161 87.0197 24.4297 99.8 24.4297 113.63V210.046C24.4297 223.876 31.8161 236.656 43.8068 243.571L127.393 291.779C139.384 298.694 154.157 298.694 166.148 291.779L249.734 243.571C261.723 236.658 269.109 223.878 269.109 210.048Z" fill="url(#paint0_linear_hexagon)" />
            <path className={`hex-main step-2 ${hoveredIndex === 1 ? 'active' : ''}`} d="M558.919 199.651L475.332 151.444C463.342 144.529 448.569 144.529 436.578 151.444L352.992 199.651C351.931 200.263 350.921 200.935 349.934 201.635L198.125 290.881L333.614 248.732V329.595C333.614 343.425 341.001 356.205 352.992 363.12L436.578 411.328C448.569 418.243 463.342 418.243 475.332 411.328L558.919 363.12C570.91 356.205 578.296 343.425 578.296 329.595V233.179C578.294 219.347 570.908 206.566 558.919 199.651Z" fill="url(#paint1_linear_hexagon)" />
            <path className={`hex-main step-4 ${hoveredIndex === 3 ? 'active' : ''}`} d="M1177.01 199.651L1093.42 151.444C1081.43 144.529 1066.66 144.529 1054.67 151.444L987.703 190.066V189.971L974.256 197.822L971.085 199.651C970.883 199.767 970.694 199.899 970.496 200.017L816.055 290.184L951.71 248.532V329.592C951.71 343.422 959.097 356.203 971.087 363.118L1054.67 411.326C1066.66 418.241 1081.44 418.241 1093.43 411.326L1177.01 363.118C1189 356.203 1196.39 343.422 1196.39 329.592V233.177C1196.39 219.347 1189 206.566 1177.01 199.651Z" fill="url(#paint2_linear_hexagon)" />
            <path className={`hex-main step-3 ${hoveredIndex === 2 ? 'active' : ''}`} d="M867.817 80.1045L784.23 31.8967C772.239 24.9817 757.466 24.9817 745.476 31.8967L661.889 80.1045C649.898 87.0195 642.512 99.7998 642.512 113.63V203.989L539.125 173.359L698.66 264.78L745.473 291.781C757.464 298.696 772.237 298.696 784.228 291.781L867.817 243.573C879.807 236.658 887.194 223.878 887.194 210.048V113.632C887.191 99.8021 879.807 87.0218 867.817 80.1045Z" fill="url(#paint3_linear_hexagon)" />
            <path className={`hex-main step-5 ${hoveredIndex === 4 ? 'active' : ''}`} d="M1485.9 80.1045L1402.32 31.8967C1390.33 24.9817 1375.55 24.9817 1363.56 31.8967L1279.98 80.1045C1267.99 87.0195 1260.6 99.7998 1260.6 113.63V203.724L1157.05 172.566L1328.7 271.722L1363.56 291.781C1375.55 298.696 1390.33 298.696 1402.32 291.781L1485.9 243.573C1497.9 236.658 1505.28 223.878 1505.28 210.048V113.632C1505.28 99.8021 1497.9 87.0218 1485.9 80.1045Z" fill="url(#paint4_linear_hexagon)" />
          </svg>
        </div>

        {/* Content Overlays */}
        {steps.map((step, index) => {
          const isDown = index === 1 || index === 3;
          // Exact centers based on SVG path midpoints
          const xPos = [146.7, 455.9, 764.8, 1074.0, 1382.9][index];
          const yPos = isDown ? 281.4 : 161.8;

          const isActive = hoveredIndex === index;

          return (
            <div
              key={index}
              className={`overlay-step step-${index + 1} ${isActive ? 'active' : ''}`}
              style={{
                left: `${(xPos / 1530) * 100}%`,
                top: `${(yPos / 444) * 100}%`
              } as React.CSSProperties}
              onMouseEnter={() => {
                setHoveredIndex(index)
                setIsManualHover(true)
              }}
              onMouseLeave={() => {
                setIsManualHover(false)
              }}
            >
              <div className="icon-badge">
                {step.icon}
              </div>

              <div className={`content-box ${isDown ? 'box-up' : 'box-down'}`}>
                <h3 style={{ color: step.color }}>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Mobile Version */}
      <div className="custom-mobile-flow">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`mobile-step ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
          >
            <div className="mobile-icon-wrapper">
              <svg
                viewBox="0 0 100 100"
                className="mobile-hex-bg"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="mobile_grad_0" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop stopColor="#175BDD" />
                    <stop offset="1" stopColor="#17BDDD" />
                  </linearGradient>
                  <linearGradient id="mobile_grad_1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop stopColor="#771FCC" />
                    <stop offset="1" stopColor="#AC68ED" />
                  </linearGradient>
                  <linearGradient id="mobile_grad_2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop stopColor="#CF0063" />
                    <stop offset="1" stopColor="#F23690" />
                  </linearGradient>
                  <linearGradient id="mobile_grad_3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop stopColor="#EA9E24" />
                    <stop offset="1" stopColor="#EAD124" />
                  </linearGradient>
                  <linearGradient id="mobile_grad_4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop stopColor="#BDCE29" />
                    <stop offset="1" stopColor="#8AB000" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#mobile_grad_${index % 5})`}
                  // Using a simpler path for a flat-topped hexagon with rounded corners
                  d="M22.5 5.5 C 25 1.5 29 1 33 1 L 67 1 C 71 1 75 1.5 77.5 5.5 L 97 43 C 99 47 99 53 97 57 L 77.5 94.5 C 75 98.5 71 99 67 99 L 33 99 C 29 99 25 98.5 22.5 94.5 L 3 57 C 1 53 1 47 3 43 Z"
                />
              </svg>
              <div className="mobile-icon-content">
                {step.icon}
              </div>
            </div>
            <div className="mobile-content">
              <h3 style={{ color: step.color }}>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DevelopmentProcessHexagon
