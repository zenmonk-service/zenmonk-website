'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from 'three'
import ThreeGlobe from 'three-globe'
import { useEffect, useRef, useState } from 'react'
import countries from './globe.json'

const RING_PROPAGATION_SPEED = 3
const aspect = 1.2
const cameraZ = 300

type Position = {
  order: number
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  arcAlt: number
  color: string
}

export type GlobeConfig = {
  pointSize?: number
  globeColor?: string
  showAtmosphere?: boolean
  atmosphereColor?: string
  atmosphereAltitude?: number
  emissive?: string
  emissiveIntensity?: number
  shininess?: number
  polygonColor?: string
  ambientLight?: string
  directionalLeftLight?: string
  directionalTopLight?: string
  pointLight?: string
  arcTime?: number
  arcLength?: number
  rings?: number
  maxRings?: number
}

interface WorldProps {
  globeConfig: GlobeConfig
  data: Position[]
}

let numbersOfRings: number[] = []

/* ---------------------------------- */
/* GLOBE OBJECT (Three.js primitive)  */
/* ---------------------------------- */
function GlobeObject({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe>(new ThreeGlobe())
  const [globeData, setGlobeData] = useState<any[]>([])

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: '#ffffff',
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: 'rgba(255,255,255,0.7)',
    globeColor: '#1d072e',
    emissive: '#000000',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  }

  /* ---------- MATERIAL ---------- */
  useEffect(() => {
    const material = globeRef.current.globeMaterial()

    // three-globe uses MeshPhongMaterial internally
    if (!material || material.type !== 'MeshPhongMaterial') return

    const phongMaterial = material as import('three').MeshPhongMaterial

    phongMaterial.color = new Color(defaultProps.globeColor)
    phongMaterial.emissive = new Color(defaultProps.emissive)
    phongMaterial.emissiveIntensity = defaultProps.emissiveIntensity
    phongMaterial.shininess = defaultProps.shininess
  }, [
    defaultProps.globeColor,
    defaultProps.emissive,
    defaultProps.emissiveIntensity,
    defaultProps.shininess,
  ])

  /* ---------- BUILD DATA ---------- */
  useEffect(() => {
    const points: any[] = []

    data.forEach((arc) => {
      const rgb = hexToRgb(arc.color)!
      points.push({
        lat: arc.startLat,
        lng: arc.startLng,
        size: defaultProps.pointSize,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
      })
      points.push({
        lat: arc.endLat,
        lng: arc.endLng,
        size: defaultProps.pointSize,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
      })
    })

    setGlobeData(points)
  }, [data])

  /* ---------- POLYGONS ---------- */
  useEffect(() => {
    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor)
  }, [])

  /* ---------- ANIMATION ---------- */
  useEffect(() => {
    if (!globeRef.current || !globeData) return

    const interval = setInterval(() => {
      numbersOfRings = genRandomNumbers(
        0,
        globeData.length,
        Math.floor((globeData.length * 4) / 5)
      )

      globeRef.current
        .ringsData(globeData.filter((_, i) => numbersOfRings.includes(i)))
        .ringColor((obj:any) => {
          const d = obj as {
            color: (t: number) => string
          }

          // three-globe animates internally — give it a base color
          return d.color(0)
        })
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod(
          (defaultProps.arcTime * defaultProps.arcLength) /
            defaultProps.rings
        )
    }, 2000)

  return () => clearInterval(interval)
}, [
  globeData,
  defaultProps.maxRings,
  defaultProps.arcLength,
  defaultProps.arcTime,
  defaultProps.rings,
])


  /* ---------- RINGS ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      numbersOfRings = genRandomNumbers(
        0,
        globeData.length,
        globeData.length / 2
      )

      globeRef.current
        .ringsData(globeData.filter((_, i) => numbersOfRings.includes(i)))
        .ringColor((d: any) => (t: number) => d.color(t))
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod(
          (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
        )
    }, 2000)

    return () => clearInterval(interval)
  }, [globeData])

  return <primitive object={globeRef.current} />
}

/* ---------------------------------- */
/* WEBGL CONFIG                       */
/* ---------------------------------- */
function WebGLRendererConfig() {
  const { gl, size } = useThree()

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio)
    gl.setSize(size.width, size.height)
    gl.setClearColor(0x000000, 0)
  }, [gl, size])

  return null
}

/* ---------------------------------- */
/* WORLD                              */
/* ---------------------------------- */
export function World(props: WorldProps) {
  const scene = new Scene()
  scene.fog = new Fog(0xffffff, 400, 2000)

  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />

      <ambientLight intensity={0.6} />
      <directionalLight position={new Vector3(-400, 100, 400)} />
      <directionalLight position={new Vector3(-200, 500, 200)} />
      <pointLight position={new Vector3(-200, 500, 200)} intensity={0.8} />

      <GlobeObject {...props} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  )
}

/* ---------------------------------- */
/* HELPERS                            */
/* ---------------------------------- */
function hexToRgb(hex: string) {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return res
    ? {
        r: parseInt(res[1], 16),
        g: parseInt(res[2], 16),
        b: parseInt(res[3], 16),
      }
    : null
}

function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = []
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min
    if (!arr.includes(r)) arr.push(r)
  }
  return arr
}
