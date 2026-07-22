'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/shared/typography'
import './style.scss'

interface ProcessStep {
  title: string;
  description: string;
  number: string;
  color: string;
  gradient: string;
}

interface DevelopmentProcessProps {
  steps?: ProcessStep[];
  title?: string;
  highlightedText?: string;
  description?: string;
  showTitle?: boolean;
}

const defaultSteps: ProcessStep[] = [
  {
    number: "1",
    title: "Planning",
    description: "We all collaborate with you to gather and understand your business needs and objective.",
    color: "#2EC2CC",
    gradient: "linear-gradient(135deg, #2EC2CC 0%, #A263F5 100%)"
  },
  {
    number: "2",
    title: "System Testing",
    description: "We all collaborate with you to gather and understand your business needs and objective.",
    color: "#A263F5",
    gradient: "linear-gradient(135deg, #A263F5 0%, #6CC77D 100%)"
  },
  {
    number: "3",
    title: "Customer Requirement",
    description: "We all collaborate with you to gather and understand your business needs and objective.",
    color: "#6CC77D",
    gradient: "linear-gradient(135deg, #6CC77D 0%, #3C95DB 100%)"
  },
  {
    number: "4",
    title: "Development",
    description: "We all collaborate with you to gather and understand your business needs and objective.",
    color: "#FA579A",
    gradient: "linear-gradient(135deg, #3C95DB 0%, #FA579A 100%)"
  },
  {
    number: "5",
    title: "Deliver",
    description: "We all collaborate with you to gather and understand your business needs and objective.",
    color: "#421CB4",
    gradient: "linear-gradient(135deg, #FA579A 0%, #421CB4 100%)"
  }
]

const mobileStepVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const DevelopmentProcessWave: React.FC<DevelopmentProcessProps> = ({
  steps = defaultSteps,
  title = "Our Development Process",
  highlightedText = "Process",
  description = "State burst think end are its. Arrived off she elderly beloved him affix ed noisier yet. Course regard to up he hardly elder noisier.",
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
    <section className="wave-process-section">
      <div className="process-wrapper">
        {steps.map((step: ProcessStep, index: number) => {
          const isTop = index === 1 || index === 3;
          const xCoords = [155, 408, 658, 908, 1160];
          const xPos = xCoords[index];
          const yPos = 263; // Central line

          const isActive = hoveredIndex === index;

          return (
            <div
              key={index}
              className={`step-point step-${index + 1} ${isActive ? 'active' : ''}`}
              style={{ left: `${(xPos / 1316) * 100}%`, top: `${(yPos / 492) * 100}%` } as React.CSSProperties}
              onMouseEnter={() => {
                setHoveredIndex(index)
                setIsManualHover(true)
              }}
              onMouseLeave={() => {
                setIsManualHover(false)
              }}
            >
              <div className="center-circle" style={{ background: step.gradient } as React.CSSProperties}>
                <div className="inner-circle">
                  <span style={{ background: step.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {step.number}
                  </span>
                </div>
              </div>

              <div className={`content-box ${isTop ? 'box-top' : 'box-bottom'}`}>
                <h3 style={{ color: step.color }}>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          )
        })}

        <div className="svg-container">
          <svg width="1316" height="492" viewBox="0 0 1316 492" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-svg">
            {/* Provided SVG Paths with class names for targeting */}
            <path className="connector-line step-4" d="M919.148 155.765V9.6792" stroke="#7E7F83" strokeWidth="1.7924" strokeMiterlimit="10" />
            <path className="connector-dot step-4" d="M914.844 5.19777C914.844 2.86765 916.815 0.895996 919.146 0.895996C921.476 0.895996 923.447 2.86765 923.447 5.19777C923.447 7.52788 921.476 9.49951 919.146 9.49951C916.815 9.49951 914.844 7.52788 914.844 5.19777Z" stroke="#7E7F83" strokeWidth="1.7924" strokeMiterlimit="10" />
            <path className="connector-line step-2" d="M411.891 155.765V9.6792" stroke="#7E7F83" strokeWidth="1.7924" strokeMiterlimit="10" />
            <path className="connector-dot step-2" d="M411.888 9.49951C414.263 9.49951 416.189 7.57356 416.189 5.19777C416.189 2.82197 414.263 0.895996 411.888 0.895996C409.512 0.895996 407.586 2.82197 407.586 5.19777C407.586 7.57356 409.512 9.49951 411.888 9.49951Z" stroke="#7E7F83" strokeWidth="1.7924" strokeMiterlimit="10" />
            <path className="connector-line step-1" d="M158.445 370.235V474.465" stroke="#7E7F83" strokeWidth="1.7924" strokeMiterlimit="10" />
            <path className="connector-dot step-1" d="M162.744 478.767C162.744 481.097 160.772 483.068 158.442 483.068C156.112 483.068 154.141 481.097 154.141 478.767C154.141 476.436 156.112 474.465 158.442 474.465C160.772 474.465 162.744 476.436 162.744 478.767Z" stroke="#7E7F83" strokeWidth="1.7924" strokeMiterlimit="10" />
            <path className="connector-line step-3" d="M665.516 370.235V481.635" stroke="#7E7F83" strokeWidth="1.7924" strokeMiterlimit="10" />
            <path className="connector-dot step-3" d="M665.513 490.238C667.888 490.238 669.814 488.312 669.814 485.937C669.814 483.561 667.888 481.635 665.513 481.635C663.137 481.635 661.211 483.561 661.211 485.937C661.211 488.312 663.137 490.238 665.513 490.238Z" stroke="#7E7F83" strokeWidth="1.7924" strokeMiterlimit="10" />
            <path className="connector-line step-5" d="M1161.11 370.235V481.635" stroke="#7E7F83" strokeWidth="1.7924" strokeMiterlimit="10" />
            <path className="connector-dot step-5" d="M1161.11 490.238C1163.48 490.238 1165.41 488.312 1165.41 485.937C1165.41 483.561 1163.48 481.635 1161.11 481.635C1158.73 481.635 1156.8 483.561 1156.8 485.937C1156.8 488.312 1158.73 490.238 1161.11 490.238Z" stroke="#7E7F83" strokeWidth="1.7924" strokeMiterlimit="10" />

            <g opacity="0.1">
              <path d="M158.448 102.887C71.1582 102.887 0 174.048 0 261.341H67.0357C67.0357 210.973 108.082 169.925 158.448 169.925C208.814 169.925 249.86 210.973 249.86 261.341H316.896C316.896 174.048 245.738 102.887 158.448 102.887Z" fill="url(#paint0_linear_wave)" />
              <path d="M566.576 259.369H499.54C499.54 309.737 458.494 350.785 408.128 350.785C357.761 350.785 316.715 309.737 316.715 259.369H249.68C249.68 346.662 320.838 417.823 408.128 417.823C495.417 417.823 566.576 346.662 566.576 259.369Z" fill="url(#paint1_linear_wave)" />
              <path d="M657.987 102.887C570.697 102.887 499.539 174.048 499.539 261.341H566.575C566.575 210.973 607.621 169.925 657.987 169.925C708.353 169.925 749.399 210.973 749.399 261.341H816.435C816.435 174.048 745.277 102.887 657.987 102.887Z" fill="url(#paint3_linear_wave)" />
              <path d="M1066.11 259.369H999.079C999.079 309.737 958.033 350.785 907.667 350.785C857.3 350.785 816.254 309.737 816.254 259.369H749.219C749.219 346.662 820.377 417.823 907.667 417.823C994.956 417.823 1066.11 346.662 1066.11 259.369Z" fill="url(#paint4_linear_wave)" />
              <path d="M1315.8 262.036H1248.77C1248.77 211.667 1207.72 170.62 1157.35 170.62C1106.99 170.62 1065.94 211.667 1065.94 262.036H998.906C998.906 174.743 1070.06 103.582 1157.35 103.582C1244.64 103.582 1315.8 174.743 1315.8 262.036Z" fill="url(#paint6_linear_wave)" />
            </g>

            <path d="M158.448 417.823C71.1582 417.823 0 346.662 0 259.369H67.0357C67.0357 309.737 108.082 350.785 158.448 350.785C208.814 350.785 249.86 309.737 249.86 259.369H316.896C316.896 346.662 245.738 417.823 158.448 417.823Z" fill="url(#paint7_linear_wave)" />
            <path d="M566.576 261.341H499.54C499.54 210.973 458.494 169.925 408.128 169.925C357.761 169.925 316.715 210.973 316.715 261.341H249.68C249.68 174.048 320.838 102.887 408.128 102.887C495.417 102.887 566.576 174.048 566.576 261.341Z" fill="url(#paint8_linear_wave)" />
            <path d="M657.987 417.823C570.697 417.823 499.539 346.662 499.539 259.369H566.575C566.575 309.737 607.621 350.785 657.987 350.785C708.353 350.785 749.399 309.737 749.399 259.369H816.435C816.435 346.662 745.277 417.823 657.987 417.823Z" fill="url(#paint9_linear_wave)" />
            <path d="M1066.11 261.341H999.079C999.079 210.973 958.033 169.925 907.667 169.925C857.3 169.925 816.254 210.973 816.254 261.341H749.219C749.219 174.048 820.377 102.887 907.667 102.887C994.956 102.887 1066.11 174.048 1066.11 261.341Z" fill="url(#paint10_linear_wave)" />
            <path d="M1315.8 260.278H1248.77C1248.77 310.646 1207.72 351.694 1157.35 351.694C1106.99 351.694 1065.94 310.646 1065.94 260.278H998.906C998.906 347.571 1070.06 418.732 1157.35 418.732C1244.64 418.732 1315.8 347.571 1315.8 260.278Z" fill="url(#paint11_linear_wave)" />

            {/* Road-like pattern (Dashed paths) */}
            <g className="road-pattern" stroke="white" strokeWidth="6" strokeDasharray="12 10" fill="none" opacity="0.4">
              {/* Step 1 Arc (Teal - Down) */}
              <path className="road-segment step-1" d="M33.4 259.4C33.4 328.4 89.4 384.4 158.4 384.4C227.4 384.4 283.4 328.4 283.4 259.4" />
              {/* Step 2 Arc (Purple - Up) */}
              <path className="road-segment step-2" d="M283.4 261.3C283.4 192.3 339.4 136.3 408.4 136.3C477.4 136.3 533.4 192.3 533.4 261.3" />
              {/* Step 3 Arc (Green - Down) */}
              <path className="road-segment step-3" d="M533.4 259.4C533.4 328.4 589.4 384.4 658.4 384.4C727.4 384.4 783.4 328.4 783.4 259.4" />
              {/* Step 4 Arc (Pink - Up) */}
              <path className="road-segment step-4" d="M783.4 261.3C783.4 192.3 839.4 136.3 908.4 136.3C977.4 136.3 1033.4 192.3 1033.4 261.3" />
              {/* Step 5 Arc (Blue - Down) */}
              <path className="road-segment step-5" d="M1033.4 260.3C1033.4 329.3 1089.4 385.3 1158.4 385.3C1227.4 385.3 1283.4 329.3 1283.4 260.3" />
            </g>

            <defs>
              <linearGradient id="paint0_linear_wave" x1="6.52877" y1="102.609" x2="289.047" y2="102.609" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2EC2CC" />
                <stop offset="1" stopColor="#A263F5" />
              </linearGradient>
              <linearGradient id="paint1_linear_wave" x1="346.111" y1="172.972" x2="478.218" y2="401.866" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FE9E00" />
                <stop offset="1" stopColor="#FFC51D" />
              </linearGradient>
              <linearGradient id="paint3_linear_wave" x1="533.579" y1="102.609" x2="791.168" y2="102.609" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6CC77D" />
                <stop offset="1" stopColor="#3C95DB" />
              </linearGradient>
              <linearGradient id="paint4_linear_wave" x1="779.887" y1="409.638" x2="1038.66" y2="417.947" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3C95DB" />
                <stop offset="1" stopColor="#FA579A" />
              </linearGradient>
              <linearGradient id="paint6_linear_wave" x1="1038.08" y1="103.582" x2="1296.26" y2="103.582" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA579A" />
                <stop offset="1" stopColor="#421CB4" />
              </linearGradient>
              <linearGradient id="paint7_linear_wave" x1="6.52877" y1="259.091" x2="316.998" y2="258.976" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2EC2CC" />
                <stop offset="1" stopColor="#A263F5" />
              </linearGradient>
              <linearGradient id="paint8_linear_wave" x1="277.174" y1="242.472" x2="537.138" y2="261.464" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A263F5" />
                <stop offset="1" stopColor="#6CC77D" />
              </linearGradient>
              <linearGradient id="paint9_linear_wave" x1="533.579" y1="259.091" x2="791.168" y2="259.091" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6CC77D" />
                <stop offset="1" stopColor="#3C95DB" />
              </linearGradient>
              <linearGradient id="paint10_linear_wave" x1="779.887" y1="253.156" x2="1038.66" y2="261.465" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3C95DB" />
                <stop offset="1" stopColor="#FA579A" />
              </linearGradient>
              <linearGradient id="paint11_linear_wave" x1="1038.08" y1="260.278" x2="1296.26" y2="260.278" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA579A" />
                <stop offset="1" stopColor="#421CB4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-flow">
        {steps.map((step: ProcessStep, index: number) => (
          <motion.div
            key={index}
            className="mobile-step"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={mobileStepVariants}
          >
            <div className="mobile-indicator">
              <div className="mobile-circle-wrapper" style={{ background: step.gradient } as React.CSSProperties}>
                <div className="mobile-inner-circle">
                  <span style={{ background: step.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {step.number}
                  </span>
                </div>
              </div>
            </div>
            <div className="mobile-text">
              <h3 style={{ color: step.color }}>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default DevelopmentProcessWave
