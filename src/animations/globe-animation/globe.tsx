'use client'

import createGlobe from 'cobe'
import React, { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'

type GlobeProps = {
  clickRef: React.RefObject<boolean>
  focusRef: React.RefObject<[number, number]>
}

const Globe = ({ clickRef, focusRef }: GlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let width = 0
    let currentPhi = 0
    let currentTheta = 0
    const doublePi = Math.PI * 2

    const onResize = () => {
      width = canvas.offsetWidth
    }

    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1, 1, 1],
      markers: [
        { location: [30.7046, 76.7179], size: 0.1 },
        { location: [-2.1709, -79.9224], size: 0.1 },
        { location: [4.711, -74.0721], size: 0.1 },
        { location: [43.4623, -3.8099], size: 0.1 },
        { location: [-27.5954, -48.548], size: 0.1 },
      ],
      onRender: (state) => {
        if (clickRef.current && focusRef.current) {
          state.phi = currentPhi
          state.theta = currentTheta

          const [focusPhi, focusTheta] = focusRef.current

          const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
          const distNegative = (currentPhi - focusPhi + doublePi) % doublePi

          currentPhi +=
            distPositive < distNegative
              ? distPositive * 0.08
              : -distNegative * 0.08

          currentTheta = currentTheta * 0.92 + focusTheta * 0.08
        } else {
          if (pointerInteracting.current === null) {
            currentPhi += 0.005
          }
          state.phi = currentPhi + r.get()
        }

        state.width = width * 2
        state.height = width * 2
      },
    })

    // Fade in after first paint
    const fadeIn = setTimeout(() => {
      canvas.style.opacity = '1'
    }, 0)

    return () => {
      clearTimeout(fadeIn)
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [api, clickRef, focusRef, r])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        contain: 'layout paint size',
        opacity: 0,
        transition: 'opacity 1s ease',
        cursor: 'grab',
      }}
      onPointerDown={(e) => {
        pointerInteracting.current =
          e.clientX - pointerInteractionMovement.current
        if (canvasRef.current) {
          canvasRef.current.style.cursor = 'grabbing'
        }
      }}
      onPointerUp={() => {
        pointerInteracting.current = null
        if (canvasRef.current) {
          canvasRef.current.style.cursor = 'grab'
        }
      }}
      onPointerOut={() => {
        pointerInteracting.current = null
        if (canvasRef.current) {
          canvasRef.current.style.cursor = 'grab'
        }
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current
          pointerInteractionMovement.current = delta
          api.start({ r: delta / 200 })
        }
      }}
      onTouchMove={(e) => {
        if (pointerInteracting.current !== null && e.touches[0]) {
          const delta = e.touches[0].clientX - pointerInteracting.current
          pointerInteractionMovement.current = delta
          api.start({ r: delta / 100 })
        }
      }}
    />
  )
}

export default Globe
