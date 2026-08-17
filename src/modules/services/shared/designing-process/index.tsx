'use client'

import { StaticImageData } from 'next/image'
import Research from './assets/research.png'
import Sketch from './assets/sketch.png'
import Create from './assets/create.png'
import Test from './assets/test.png'
import Develop from './assets/develop.png'
import { Fragment } from 'react'
import { useInView } from 'react-intersection-observer'
import "./styles.scss"

// Types
export interface ProcessStep {
  id: number;
  title: string;
  color: string;
  description: string;
  image: StaticImageData;
}

export interface TitleCharacter {
  char: string;
  color: string;
}

interface BackgroundDecoration {
  type: 'gear' | 'arrow';
  size: number;
  color: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  // Mobile overrides
  mSize?: number;
  mTop?: string;
  mBottom?: string;
  mLeft?: string;
  mRight?: string;
}

interface ProcessWorkflowProps {
  titlePrefix?: string; // e.g., "OUR"
  titleHighlightedText?: string | TitleCharacter[];
  titleSuffix?: string;
  steps?: ProcessStep[];
  backgroundDecorations?: BackgroundDecoration[];
  showConnectors?: boolean;
  className?: string;
}

const defaultDecorations: BackgroundDecoration[] = [
  { type: 'gear', size: 120, top: '10%', left: '5%', color: '#7B3FBF', mSize: 60, mTop: '10%', mLeft: '10%' },
  { type: 'gear', size: 80, top: '65%', left: '48%', color: '#3FA643', mSize: 40, mTop: '25%', mLeft: '80%' },
  { type: 'gear', size: 100, bottom: '20%', left: '12%', color: '#CC6A00', mSize: 50, mTop: '45%', mRight: '5%' },
  { type: 'gear', size: 200, bottom: '10%', left: '32%', color: '#6d6862ff', mSize: 70, mBottom: '10%', mLeft: '70%' },
  { type: 'arrow', size: 100, top: '30%', right: '10%', color: '#1A8A92', mSize: 50, mTop: '15%', mRight: '15%' },
  { type: 'arrow', size: 80, top: '55%', left: '3%', color: '#2A6DB8', mSize: 40, mTop: '35%', mLeft: '5%' },
  { type: 'arrow', size: 90, bottom: '30%', right: '5%', color: '#7B3FBF', mSize: 45, mTop: '60%', mRight: '10%' },
  { type: 'arrow', size: 90, bottom: '80%', left: '20%', color: '#7B3FBF', mSize: 45, mTop: '75%', mLeft: '5%' },
  { type: 'arrow', size: 60, bottom: '81%', left: '25%', color: '#3f85bfff', mSize: 30, mTop: '85%', mLeft: '15%' },
  { type: 'arrow', size: 70, bottom: '85%', left: '24%', color: '#464449ff', mSize: 35, mTop: '80%', mLeft: '70%' },
  { type: 'gear', size: 90, top: '40%', right: '15%', color: '#CC6A00', mSize: 45, mTop: '20%', mRight: '5%' },
  { type: 'arrow', size: 110, top: '10%', right: '25%', color: '#2A6DB8', mSize: 55, mTop: '35%', mRight: '10%' },
  { type: 'gear', size: 130, top: '30%', right: '40%', color: '#078ec4ff', mSize: 65, mTop: '60%', mLeft: '5%' },
  { type: 'arrow', size: 85, bottom: '45%', left: '10%', color: '#1A8A92', mSize: 40, mTop: '55%', mLeft: '85%' },
  { type: 'gear', size: 110, bottom: '5%', right: '5%', color: '#7B3FBF', mSize: 55, mBottom: '12%', mRight: '60%' },
];

const defaultSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Research",
    color: "#2EC2CC",
    description: "Understanding user needs and market trends",
    image: Research
  },
  {
    id: 2,
    title: "Sketch",
    color: "#A263F5",
    description: "Creating initial wireframes and concepts",
    image: Sketch
  },
  {
    id: 3,
    title: "Create",
    color: "#5FCC62",
    description: "Developing high-fidelity designs",
    image: Create
  },
  {
    id: 4,
    title: "Test",
    color: "#4A9FF5",
    description: "Validating designs with users",
    image: Test
  },
  {
    id: 5,
    title: "Develop",
    color: "#FF9021",
    description: "Implementing the final design",
    image: Develop
  }
];

const defaultTitle: TitleCharacter[] = [
  { char: 'D', color: '#2EC2CC' },
  { char: 'E', color: '#A263F5' },
  { char: 'S', color: '#6CC77D' },
  { char: 'I', color: '#3C95DB' },
  { char: 'G', color: '#FF9D00' },
  { char: 'N', color: '#2EC2CC' },
  { char: 'I', color: '#A263F5' },
  { char: 'N', color: '#6CC77D' },
  { char: 'G', color: '#3C95DB' },
];

// Icon components
const GearIcon = ({ color }: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 110 110" fill="none">
    <path opacity="0.4" d="M31.3772 15.9923C34.8552 13.8902 38.5557 12.2963 42.375 11.2107L44.6394 0.322223L63.0304 0L65.6783 10.8022C69.5321 11.7516 73.2882 13.215 76.8372 15.1944L86.1324 9.09898L99.3658 21.8805L93.6042 31.3842C95.7056 34.8635 97.299 38.5691 98.3842 42.3878L109.269 44.653L109.593 63.0504L98.7944 65.6992C97.8454 69.5543 96.3824 73.3098 94.4037 76.86L100.495 86.1585L87.7199 99.3965L78.2176 93.6329C74.7396 95.735 71.0372 97.3289 67.2179 98.4126L64.9516 109.301L46.5605 109.623L43.9127 98.8211C40.0589 97.8717 36.3047 96.4082 32.7538 94.4289L23.4586 100.524L10.2252 87.7446L15.9867 78.2391C13.8854 74.7598 12.2901 71.0581 11.2068 67.2374L0.322111 64.9722L0 46.5748L10.7985 43.926C11.7475 40.0709 13.2105 36.3154 15.1872 32.7652L9.09587 23.4667L21.871 10.2287L31.3772 15.9923ZM41.1805 40.5005C33.6108 48.3432 33.8314 60.839 41.6713 68.4112C49.5113 75.9835 62.0027 75.7629 69.5724 67.9202C77.1401 60.0775 76.9215 47.5817 69.0815 40.0095C61.2415 32.4391 48.7501 32.6578 41.1805 40.5005Z" fill={color} />
  </svg>
);

const ArrowIcon = ({ color }: { color: string }) => (
  <svg width="100%" height="100%" viewBox="0 0 133 85" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M81.8874 0L132.1 43.1493L81.8874 84.6126V68.4324H0V18.2037H81.803L81.8874 0Z" fill={color} />
  </svg>
);

// Mobile vertical arrow with gradient
const VerticalArrowConnector = ({ startColor, endColor, index }: { startColor: string; endColor: string; index: number }) => {
  const gradientId = `vertical-arrow-gradient-${index}`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="69" viewBox="0 0 30 69" fill="none">
      <path
        d="M20.4575 18.7415C20.4575 25.3792 20.4576 31.2361 20.4576 40.2165C20.4576 46.6895 20.4438 51.3521 20.4474 53.2853L29.0567 53.2857L21.794 60.7496L14.5295 68.2139L0.000367808 53.2851L7.57229 53.2843C7.57228 51.7553 7.5717 48.6477 7.5717 44.9029C7.5717 42.1693 7.57206 33.5792 7.57206 30.0651C7.9625 21.0849 7.57218 23.0369 7.57217 12.8851C7.57217 7.41882 7.57249 5.46627 7.57249 6.27018e-05L20.4576 0.000381464C20.4573 3.90383 20.4575 15.6182 20.4575 18.7415Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient id={gradientId} x1="17.0993" y1="3.85506" x2="12.3049" y2="66.4681" gradientUnits="userSpaceOnUse">
          <stop stopColor={startColor} />
          <stop offset="1" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const HorizontalArrowConnector = ({ index }: { index: number }) => {
  const gradientId = `horizontal-arrow-gradient-${index}`;

  const gradients = [
    { start: '#2EC2CC', end: '#A263F5' },
    { start: '#A263F5', end: '#6CC77D' },
    { start: '#6CC77D', end: '#3C95DB' },
    { start: '#3C95DB', end: '#FF9D00' }
  ];

  const current = gradients[index % gradients.length];

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 82 47" fill="none">
      <g clipPath="url(#clip0_5104_51300)">
        <path
          d="M15.7295 0C16.9029 4.50346 18.8649 7.86001 22.0879 10.8809C28.3863 16.7805 35.8427 18.5372 47.3965 19.7129C53.5191 20.3381 59.2272 20.2484 62.9004 20.0693V9.5332L72.458 18.834L82.0166 28.1357L72.458 37.4385L62.9004 46.7402V36.3438C61.3244 36.4102 59.493 36.4609 57.4775 36.4609C53.9957 36.4609 49.9651 36.3212 45.749 35.8916C33.9729 34.6928 21.5889 32.6899 10.9766 22.749C5.52958 17.6434 1.93839 11.5442 0 4.10059L15.7295 0Z"
          fill={`url(#${gradientId})`}
        />
      </g>
      <defs>
        <linearGradient id={gradientId} x1="7.5" y1="5.5" x2="80" y2="29.5" gradientUnits="userSpaceOnUse">
          <stop stopColor={current.start} />
          <stop offset="1" stopColor={current.end} />
        </linearGradient>
        <clipPath id="clip0_5104_51300" clipPathUnits="userSpaceOnUse">
          <rect width="82" height="47" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ProcessWorkflow: React.FC<ProcessWorkflowProps> = ({
  titlePrefix = "OUR",
  titleHighlightedText = defaultTitle,
  titleSuffix = "WORK PROCESS",
  steps = defaultSteps,
  backgroundDecorations = defaultDecorations,
  showConnectors = true,
  className = "",
}) => {
  const { ref: containerRef, inView: isAnimated } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const renderHighlightedText = () => {
    if (typeof titleHighlightedText === 'string') {
      return <span className="gradient-text">{titleHighlightedText}</span>;
    } else {
      return (
        <span className="gradient-text">
          {titleHighlightedText?.map((item, index) => (
            <span
              key={index}
              style={{
                color: item.color,
                transitionDelay: `${0.2 + index * 0.05}s`,
              } as React.CSSProperties}
            >
              {item.char}
            </span>
          ))}
        </span>
      );
    }
  };

  const pxToVw = (px: number) => `${(px / 1920) * 100}vw`;

  return (
    <div
      ref={containerRef}
      className={`designing-process-container ${isAnimated ? 'is-visible' : ''} ${className}`}
    >
      {backgroundDecorations.length > 0 && (
        <div className="bg-decorations">
          {backgroundDecorations.map((decoration, index) => (
            <div
              key={index}
              className={`bg-icon bg-icon-${decoration.type}`}
              style={{
                "--size": pxToVw(decoration.size),
                "--top": decoration.top,
                "--bottom": decoration.bottom,
                "--left": decoration.left,
                "--right": decoration.right,
                "--m-size": decoration.mSize ? `${decoration.mSize}px` : undefined,
                "--m-top": decoration.mTop,
                "--m-bottom": decoration.mBottom,
                "--m-left": decoration.mLeft,
                "--m-right": decoration.mRight,
              } as React.CSSProperties}
            >
              {decoration.type === 'gear' ? (
                <GearIcon color={decoration.color} />
              ) : (
                <ArrowIcon color={decoration.color} />
              )}
            </div>
          ))}
        </div>
      )}

      <h1 className="designing-process-title">
        {titlePrefix && (
          <>
            {titlePrefix} <br />
          </>
        )}
        {renderHighlightedText()}
        {titleSuffix && (
          <>
            <br />
            {titleSuffix}
          </>
        )}
      </h1>

      <div className="designing-process-map">
        {steps?.map((step, index) => (
          <Fragment key={step.id}>
            <div
              className="process-step"
              style={{
                transitionDelay: `${0.2 + index * 0.5}s`,
              } as React.CSSProperties}
            >
              <div className="step-illustration">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.image.src} alt={step.title} className="step-image" />
              </div>
            </div>

            {showConnectors && index < steps.length - 1 && (
              <>
                <div
                  className="arrow-connector arrow-connector-desktop"
                  style={{
                    transitionDelay: `${0.2 + (index + 0.5) * 0.5}s`,
                  } as React.CSSProperties}
                >
                  <HorizontalArrowConnector index={index} />
                </div>
                <div
                  className="arrow-connector arrow-connector-mobile"
                  style={{
                    transitionDelay: `${0.2 + (index + 0.5) * 0.5}s`,
                  } as React.CSSProperties}
                >
                  <VerticalArrowConnector
                    startColor={step.color}
                    endColor={steps[index + 1].color}
                    index={index}
                  />
                </div>
              </>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProcessWorkflow;
