import createGlobe from 'cobe'
import React, { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'

const Globe = ({
  clickRef,
  focusRef,
}: {
  clickRef: React.RefObject<boolean>
  focusRef: React.RefObject<number[]>
}) => {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef<null | number>(null)
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
    let width = 0
    let currentPhi = 0
    let currentTheta = 0
    const doublePi = Math.PI * 2
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
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
        if (clickRef.current) {
          state.phi = currentPhi
          state.theta = currentTheta
          const [focusPhi, focusTheta] = focusRef.current
          const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
          const distNegative = (currentPhi - focusPhi + doublePi) % doublePi
          // Control the speed
          if (distPositive < distNegative) {
            currentPhi += distPositive * 0.08
          } else {
            currentPhi -= distNegative * 0.08
          }
          currentTheta = currentTheta * 0.92 + focusTheta * 0.08
          state.width = width * 2
          state.height = width * 2
        } else {
          if (!pointerInteracting.current) {
            currentPhi += 0.005
          }
          state.phi = currentPhi + r.get()
          state.width = width * 2
          state.height = width * 2
        }
      },
    })
    setTimeout(() => (canvasRef.current.style.opacity = '1'))
    return () => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        contain: 'layout paint size',
        opacity: 0,
        transition: 'opacity 1s ease',
      }}
      onPointerDown={(e) => {
        pointerInteracting.current =
          e.clientX - pointerInteractionMovement.current
        canvasRef.current.style.cursor = 'grabbing'
      }}
      onPointerUp={() => {
        pointerInteracting.current = null
        canvasRef.current.style.cursor = 'grab'
      }}
      onPointerOut={() => {
        pointerInteracting.current = null
        canvasRef.current.style.cursor = 'grab'
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current
          pointerInteractionMovement.current = delta
          api.start({
            r: delta / 200,
          })
        }
      }}
      onTouchMove={(e) => {
        if (pointerInteracting.current !== null && e.touches[0]) {
          const delta = e.touches[0].clientX - pointerInteracting.current
          pointerInteractionMovement.current = delta
          api.start({
            r: delta / 100,
          })
        }
      }}
    />
  )
}

export default Globe
