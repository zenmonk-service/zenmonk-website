'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Email from './assets/email.svg'
import BulbIcon from './assets/bulb.svg'
import GearBig from './assets/gears.svg'
import Time from './assets/time.svg'
import Stocks from './assets/stocks.svg'
import './style.scss'

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  className?: string;
}

interface CircularDevelopmentProcessProps {
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Customer Requirement",
    description: "We collaborate with you to gather and understand your business needs and objective.",
    color: "#FF1470",
    icon: <BulbIcon />,
  },
  {
    title: "Planning",
    description: "We collaborate with you to gather and understand your business needs and objective.",
    color: "#002E8A",
    icon: <Email />,
  },
  {
    title: "Development",
    description: "We collaborate with you to gather and understand your business needs and objective.",
    color: "#FF9021",
    icon: <Stocks />,
  },
  {
    title: "System Testing",
    description: "We collaborate with you to gather and understand your business needs and objective.",
    color: "#007F50",
    icon: <Time />,
  },
  {
    title: "Deliver",
    description: "We collaborate with you to gather and understand your business needs and objective.",
    color: "#FF6206",
    icon: <GearBig />,
  },
]

// Smooth book-opening/unfolding from left-to-right variants.
// Started from scale: 0 so no thin vertical lines render before unfolding.
const stepVariants = {
  hidden: {
    opacity: 0,
    scale: 0, // Completely collapsed to avoid any glitchy line rendering
    rotateY: -80,
    x: -25,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    x: 0,
    transition: {
      delay: i * 0.45, // Faster, snappy stagger
      duration: 0.65,  // Fast yet smooth unfolding transition
      ease: [0.25, 1, 0.5, 1], // Clean easeOutQuart curve
    },
  }),
}

// Connector line variant - scales in direction of flow
const connectorVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    scaleY: 0,
    rotate: (i === 1 || i === 3) ? 180 : 0,
  }),
  visible: (i: number) => ({
    opacity: 1,
    scaleY: 1,
    rotate: (i === 1 || i === 3) ? 180 : 0,
    transition: {
      delay: i * 0.45 + 0.25, // Starts growing mid-way through card unfold
      duration: 0.35,
      ease: 'easeOut',
    },
  }),
}

// Mobile list entrance
const mobileStepVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.55,
      ease: 'easeOut',
    },
  }),
}

const CircularDevelopmentProcess: React.FC<CircularDevelopmentProcessProps> = ({
  steps = defaultSteps
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(0);
  const [isManualHover, setIsManualHover] = React.useState(false);

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.15 })

  React.useEffect(() => {
    if (isManualHover) return;

    const interval = setInterval(() => {
      setHoveredIndex((prev) => (prev === null || prev >= steps.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isManualHover, steps.length]);

  return (
    <section className="circular-process-section" ref={containerRef}>
      <div className="process-wrapper">
        <div className="svg-container">
          <svg width="100%" height="100%" viewBox="0 0 1488 614" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M186.464 426.883C83.6456 426.883 0 343.237 0 240.419C0 137.6 83.6456 53.9549 186.464 53.9549C289.282 53.9549 372.928 137.6 372.928 240.419C372.928 343.237 289.282 426.883 186.464 426.883ZM186.464 58.0277C85.8741 58.0277 4.07278 139.829 4.07278 240.419C4.07278 341.009 85.8741 422.81 186.464 422.81C287.054 422.81 368.855 341.009 368.855 240.419C368.855 139.829 287.015 58.0277 186.464 58.0277Z" fill="#FF1470" />
            <path d="M323.851 270.649C342.131 194.511 295.226 117.97 219.088 99.6904C142.949 81.4111 66.4081 128.315 48.1288 204.454C29.8495 280.593 76.7539 357.134 152.893 375.413C229.031 393.692 305.572 346.788 323.851 270.649Z" fill="white" />
            <path d="M237.356 364.858C307.659 336.468 341.637 256.461 313.247 186.158C284.856 115.854 204.849 81.8766 134.546 110.267C64.2423 138.657 30.2648 218.664 58.655 288.968C87.0452 359.271 167.052 393.249 237.356 364.858Z" fill="#FF1470" />
            <path d="M465.605 608.236C362.786 608.236 279.141 524.591 279.141 421.773C279.141 318.954 362.786 235.309 465.605 235.309C568.423 235.309 652.068 318.954 652.068 421.773C652.068 524.591 568.423 608.236 465.605 608.236ZM465.605 239.381C365.015 239.381 283.213 321.221 283.213 421.773C283.213 522.324 365.015 604.164 465.605 604.164C566.194 604.164 647.996 522.362 647.996 421.773C647.996 321.183 566.156 239.381 465.605 239.381Z" fill="#002E8A" />
            <path d="M602.273 454.845C622.13 379.102 576.825 301.604 501.083 281.747C425.34 261.891 347.841 307.195 327.985 382.938C308.128 458.681 353.433 536.179 429.175 556.036C504.918 575.892 582.417 530.588 602.273 454.845Z" fill="white" />
            <path d="M597.939 453.731C617.179 380.394 573.324 305.345 499.987 286.105C426.649 266.865 351.6 310.72 332.36 384.058C313.12 457.396 356.975 532.444 430.313 551.684C503.651 570.924 578.7 527.069 597.939 453.731Z" fill="#002E8A" />
            <path d="M743.972 426.883C641.153 426.883 557.508 343.237 557.508 240.419C557.508 137.6 641.153 53.9549 743.972 53.9549C846.79 53.9549 930.436 137.6 930.436 240.419C930.436 343.237 846.79 426.883 743.972 426.883ZM743.972 58.0277C643.382 58.0277 561.581 139.829 561.581 240.419C561.581 341.009 643.382 422.81 743.972 422.81C844.562 422.81 926.363 341.009 926.363 240.419C926.363 139.829 844.562 58.0277 743.972 58.0277Z" fill="#FF9021" />
            <path d="M843.758 337.758C899.126 282.39 899.126 192.621 843.758 137.253C788.39 81.8847 698.621 81.8847 643.253 137.253C587.885 192.621 587.885 282.39 643.253 337.758C698.621 393.126 788.39 393.126 843.758 337.758Z" fill="white" />
            <path d="M840.573 334.579C894.186 280.967 894.186 194.044 840.573 140.431C786.961 86.819 700.038 86.819 646.426 140.431C592.813 194.044 592.813 280.967 646.425 334.579C700.038 388.192 786.961 388.192 840.573 334.579Z" fill="#FF9021" />
            <path d="M1023.11 608.236C920.294 608.236 836.648 524.591 836.648 421.773C836.648 318.954 920.294 235.309 1023.11 235.309C1125.93 235.309 1209.58 318.954 1209.58 421.773C1209.58 524.591 1125.93 608.236 1023.11 608.236ZM1023.11 239.381C922.523 239.381 840.721 321.221 840.721 421.773C840.721 522.324 922.523 604.164 1023.11 604.164C1123.7 604.164 1205.5 522.362 1205.5 421.773C1205.5 321.183 1123.7 239.381 1023.11 239.381Z" fill="#007F50" />
            <path d="M1143.65 492.976C1184.52 426.191 1163.52 338.913 1096.74 298.035C1029.95 257.157 942.675 278.159 901.797 344.944C860.919 411.729 881.921 499.007 948.706 539.885C1015.49 580.763 1102.77 559.761 1143.65 492.976Z" fill="white" />
            <path d="M1119.74 515.949C1173.35 462.337 1173.35 375.414 1119.74 321.801C1066.12 268.189 979.202 268.189 925.59 321.801C871.977 375.414 871.977 462.337 925.59 515.949C979.202 569.561 1066.12 569.561 1119.74 515.949Z" fill="#007F50" />
            <path d="M1301.53 426.883C1198.71 426.883 1115.06 343.237 1115.06 240.419C1115.06 137.6 1198.71 53.9549 1301.53 53.9549C1404.34 53.9549 1487.99 137.6 1487.99 240.419C1487.99 343.237 1404.34 426.883 1301.53 426.883ZM1301.53 58.0277C1200.94 58.0277 1119.14 139.829 1119.14 240.419C1119.14 341.009 1200.94 422.81 1301.53 422.81C1402.12 422.81 1483.92 341.009 1483.92 240.419C1483.92 139.829 1402.08 58.0277 1301.53 58.0277Z" fill="#FF6206" />
            <path d="M1438.91 270.644C1457.19 194.505 1410.28 117.964 1334.14 99.6849C1258 81.4057 1181.46 128.31 1163.18 204.449C1144.9 280.587 1191.81 357.128 1267.95 375.408C1344.09 393.687 1420.63 346.782 1438.91 270.644Z" fill="white" />
            <path d="M1434.45 269.528C1452.14 195.801 1406.71 121.695 1332.98 104.008C1259.26 86.3209 1185.15 131.751 1167.46 205.479C1149.78 279.206 1195.21 353.312 1268.93 370.999C1342.66 388.686 1416.77 343.256 1434.45 269.528Z" fill="#FF6206" />
            <path d="M186.456 423.463H182.383V515.523H186.456V423.463Z" fill="#FF1470" />
            <path d="M173.703 514.985C173.703 520.902 178.506 525.705 184.423 525.705C190.34 525.705 195.143 520.902 195.143 514.985C195.143 509.068 190.34 504.265 184.423 504.265C178.506 504.265 173.703 509.068 173.703 514.985Z" fill="#FF1470" />
            <path d="M467.135 144.901H463.062V236.961H467.135V144.901Z" fill="#002E8A" />
            <path d="M465.103 156.158C471.023 156.158 475.823 151.359 475.823 145.438C475.823 139.518 471.023 134.719 465.103 134.719C459.182 134.719 454.383 139.518 454.383 145.438C454.383 151.359 459.182 156.158 465.103 156.158Z" fill="#002E8A" />
            <path d="M751.315 423.463H747.242V515.523H751.315V423.463Z" fill="#FF9021" />
            <path d="M738.562 514.985C738.562 520.902 743.365 525.705 749.282 525.705C755.199 525.705 760.002 520.902 760.002 514.985C760.002 509.068 755.199 504.265 749.282 504.265C743.365 504.265 738.562 509.068 738.562 514.985Z" fill="#FF9021" />
            <path d="M1031.99 144.901H1027.91V236.961H1031.99V144.901Z" fill="#007F50" />
            <path d="M186.456 423.463H182.383V515.523H186.456V423.463Z" fill="#FF1470" />
            <path d="M173.703 514.985C173.703 520.902 178.506 525.705 184.423 525.705C190.34 525.705 195.143 520.902 195.143 514.985C195.143 509.068 190.34 504.265 184.423 504.265C178.506 504.265 173.703 509.068 173.703 514.985Z" fill="#FF1470" />
            <path d="M467.135 144.901H463.062V236.961H467.135V144.901Z" fill="#002E8A" />
            <path d="M465.103 156.158C471.023 156.158 475.823 151.359 475.823 145.438C475.823 139.518 471.023 134.719 465.103 134.719C459.182 134.719 454.383 139.518 454.383 145.438C454.383 151.359 459.182 156.158 465.103 156.158Z" fill="#002E8A" />
            <path d="M751.315 423.463H747.242V515.523H751.315V423.463Z" fill="#FF9021" />
            <path d="M738.562 514.985C738.562 520.902 743.365 525.705 749.282 525.705C755.199 525.705 760.002 520.902 760.002 514.985C760.002 509.068 755.199 504.265 749.282 504.265C743.365 504.265 738.562 509.068 738.562 514.985Z" fill="#FF9021" />
            <path d="M1031.99 144.901H1027.91V236.961H1031.99V144.901Z" fill="#007F50" />
            <path d="M1040.67 145.438C1040.67 139.521 1035.87 134.719 1029.95 134.719C1024.04 134.719 1019.23 139.521 1019.23 145.438C1019.23 151.356 1024.04 156.158 1029.95 156.158C1035.87 156.158 1040.67 151.356 1040.67 145.438Z" fill="#007F50" />
            <path d="M1316.16 423.463H1312.09V515.523H1316.16V423.463Z" fill="#FF6206" />
            <path d="M1314.13 525.705C1320.05 525.705 1324.85 520.906 1324.85 514.985C1324.85 509.065 1320.05 504.265 1314.13 504.265C1308.21 504.265 1303.41 509.065 1303.41 514.985C1303.41 520.906 1308.21 525.705 1314.13 525.705Z" fill="#FF6206" />
          </svg>
        </div>

        {/* Content Overlays */}
        {steps.map((step, index) => {
          const isDown = index === 1 || index === 3;
          const isActive = hoveredIndex === index;

          // Determine transformOrigin for connector:
          // Even indexes connect top->bottom (origin top), odd connect bottom->top (origin bottom)
          const connectorOrigin = index % 2 === 0 ? 'top center' : 'bottom center'

          return (
            <React.Fragment key={index}>
              <motion.div
                className={`overlay-step step-${index + 1} ${isActive ? 'active' : ''} ${step.className || ''}`}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                onMouseEnter={() => {
                  setHoveredIndex(index)
                  setIsManualHover(true)
                }}
                onMouseLeave={() => {
                  setIsManualHover(false)
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  // Ensure unfold hinge is at the left edge
                  transformOrigin: 'left center',
                }}
              >
                <div className="icon-badge">
                  {step.icon}
                </div>

                <div className={`content-box ${isDown ? 'box-up' : 'box-down'}`}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>

              {/* Connector lines - show for all steps */}
              {index < 5 && (
                <motion.div
                  className={`step-connector connector-${index + 1} ${isActive || hoveredIndex === index + 1 ? 'active' : ''}`}
                  custom={index}
                  variants={connectorVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  style={{ transformOrigin: connectorOrigin }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="103" viewBox="0 0 22 103" fill="none">
                    <path d="M12.7525 0H8.67969V92.06H12.7525V0Z" fill="currentColor" />
                    <path d="M0 91.5221C0 97.4391 4.8028 102.242 10.7199 102.242C16.6369 102.242 21.4397 97.4391 21.4397 91.5221C21.4397 85.605 16.6369 80.8022 10.7199 80.8022C4.8028 80.8022 0 85.605 0 91.5221Z" fill="currentColor" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* Mobile Version */}
      <div className="custom-mobile-flow">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`mobile-step step-${index + 1} ${step.className || ''}`}
            custom={index}
            variants={mobileStepVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
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
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CircularDevelopmentProcess
