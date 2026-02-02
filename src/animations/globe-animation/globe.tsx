import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import * as THREE from 'three'
import { countries } from '@/shared/contact-us-section/countries'
import Image from 'next/image'
import GlobeShadowImg from "./globe-shadow.svg?url"

// Dynamically import react-globe.gl to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>
})

type GlobeProps = {
  clickRef: React.RefObject<boolean>
  coordinates: [number, number]
  activeCountryName: string
}

const GlobeComponent = ({ clickRef, coordinates, activeCountryName }: GlobeProps) => {
  const globeRef = useRef<any>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const cloudSphereRef = useRef<THREE.Mesh | null>(null)

  // Robust sizing logic
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        // Use offsetWidth/Height if getBoundingClientRect is 0 (can happen in some flex layouts)
        const finalWidth = width || containerRef.current.offsetWidth
        const finalHeight = height || containerRef.current.offsetHeight

        if (finalWidth > 0 && finalHeight > 0) {
          setDimensions({ width: finalWidth, height: finalHeight })
        }
      }
    }

    const resizeObserver = new ResizeObserver(updateSize)
    resizeObserver.observe(containerRef.current)
    updateSize() // Initial call

    return () => resizeObserver.disconnect()
  }, [])

  // Update POV whenever coordinates prop changes
  useEffect(() => {
    if (globeRef.current && typeof globeRef.current.pointOfView === 'function' && coordinates) {
      const [lat, lng] = coordinates
      globeRef.current.pointOfView({ lat, lng, altitude: 1.6 }, 1000)
    }
  }, [coordinates])

  const handleGlobeReady = () => {
    if (globeRef.current) {
      const controls = globeRef.current.controls()
      if (controls) {
        controls.autoRotate = false
        controls.enableZoom = false
        controls.enablePan = false
        controls.rotateSpeed = 0.5
      }

      // Brighter material for better visibility
      if (typeof globeRef.current.globeMaterial === 'function') {
        const globeMaterial = globeRef.current.globeMaterial()
        if (globeMaterial) {
          globeMaterial.emissive.setHex(0x111111)
          globeMaterial.emissiveIntensity = 0.2
          globeMaterial.shininess = 25
        }
      }

      // Clouds layer
      const scene = globeRef.current.scene()
      if (scene && !cloudSphereRef.current) {
        const CLOUDS_IMG_URL = '//unpkg.com/three-globe/example/img/earth-clouds.png'
        const CLOUDS_ALT = 0.015
        const CLOUDS_ROTATION_SPEED = -0.008

        new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
          const clouds = new THREE.Mesh(
            new THREE.SphereGeometry(globeRef.current.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
            new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true, opacity: 0.3 })
          )
          scene.add(clouds)
          cloudSphereRef.current = clouds

          const rotateClouds = () => {
            if (cloudSphereRef.current) {
              cloudSphereRef.current.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180
              requestAnimationFrame(rotateClouds)
            }
          }
          rotateClouds()
        })
      }
    }
  }

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '400px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {dimensions.width > 0 && dimensions.height > 0 ? (
        <>
          <div
            style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(235, 124, 13, 0.15) 0%, rgba(255, 167, 80, 0.05) 50%, transparent 100%)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%',
              zIndex: -1,
            }}
          />
          <Globe
            ref={globeRef}
            onGlobeReady={handleGlobeReady}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            showAtmosphere={true}
            atmosphereColor="#cae1ff"
            atmosphereAltitude={0.12}
            htmlElementsData={countries.map((c) => ({
              lat: c.coordinates[0],
              lng: c.coordinates[1],
              name: c.name,
            }))}
            htmlElement={(d: any) => {
              const isActive = d.name === activeCountryName
              const el = document.createElement('div')
              el.innerHTML = `
              <div style="cursor: pointer; display: flex; flex-direction: column; align-items: center; pointer-events: none; transform: translate(-50%, -100%); opacity: ${isActive ? 1 : 0}; transition: opacity 0.5s ease;">
                <svg viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 34px; height: 42px; filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.3)); transform: scale(${isActive ? 1 : 0.6}); transition: transform 0.5s ease;">
                  <path d="M17 0C7.61116 0 0 7.61116 0 17C0 23.3888 6.61116 33.1112 17 42C27.3888 33.1112 34 23.3888 34 17C34 7.61116 26.3888 0 17 0Z" fill="#EB7C0D"/>
                  <circle cx="17" cy="17" r="5" fill="white"/>
                </svg>
              </div>
            `
              return el
            }}
          />
          <div className="globe-shadow-wrapper" style={{ position: 'absolute', bottom: '-20px', width: '60%', height: '40px', zIndex: -1 }}>
            <Image src={GlobeShadowImg} alt="" fill style={{ objectFit: 'contain' }} />
          </div>
        </>
      ) : (
        <div style={{ color: '#666', fontSize: '14px' }}>Initializing Globe...</div>
      )}
    </div>
  )
}

export default GlobeComponent
