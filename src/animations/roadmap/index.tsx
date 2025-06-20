'use client';

import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import {roadmapAnimation} from './config';

export default function RoadmapAnimation() {
  const lottieContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const svg = lottieContainerRef.current?.querySelector('svg');
    if (!svg) return;

    const targetTransform =
      'matrix(1.0245901346206665,0,0,1.0245901346206665,739.2000122070312,477.9704895019531)';
    const targetElement = svg.querySelector(`[transform="${targetTransform}"]`);
    if (targetElement) {
      targetElement.remove();
    }
  }, []);

  return (
    <div ref={lottieContainerRef}>
      <Lottie
        animationData={roadmapAnimation}
        loop
        autoplay
      />
    </div>
  )
}
