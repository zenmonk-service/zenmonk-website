'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import * as THREE from 'three'
import { countries } from '@/shared/contact-us-section/countries'

// Dynamic import for react-globe.gl to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false })

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

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect
          if (width > 0 && height > 0) {
            setDimensions({ width, height })
          }
        }
      })
      resizeObserver.observe(containerRef.current)

      const initialRect = containerRef.current.getBoundingClientRect()
      if (initialRect.width > 0 && initialRect.height > 0) {
        setDimensions({ width: initialRect.width, height: initialRect.height })
      }

      return () => resizeObserver.disconnect()
    }
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

      // Brighter, more vibrant material
      if (typeof globeRef.current.globeMaterial === 'function') {
        const globeMaterial = globeRef.current.globeMaterial()
        if (globeMaterial) {
          globeMaterial.emissive.setHex(0x444444)
          globeMaterial.emissiveIntensity = 0.1
          globeMaterial.shininess = 30
        }
      }

      // Add clouds layer with refined rotation
      const scene = globeRef.current.scene()
      if (scene && !cloudSphereRef.current) {
        const CLOUDS_IMG_URL = '//unpkg.com/three-globe/example/img/earth-clouds.png'
        const CLOUDS_ALT = 0.015 // Higher altitude for better depth
        const CLOUDS_ROTATION_SPEED = -0.008

        new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
          const clouds = new THREE.Mesh(
            new THREE.SphereGeometry(globeRef.current.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
            new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true, opacity: 0.4 })
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
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {dimensions.width > 0 && dimensions.height > 0 && (
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
          atmosphereAltitude={0.15}
          htmlElementsData={countries.map((c) => ({
            lat: c.coordinates[0],
            lng: c.coordinates[1],
            name: c.name,
          }))}
          htmlElement={(d: any) => {
            const isActive = d.name === activeCountryName
            const el = document.createElement('div')
            el.innerHTML = `
              <div style="cursor: pointer; display: flex; flex-direction: column; align-items: center; pointer-events: none; transform: translate(-50%, -100%); transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); opacity: ${isActive ? 1 : 0};">
                <svg viewBox="0 0 34 42" class="globe-marker-svg" fill="none" xmlns="http://www.w3.org/2000/svg" style="
                  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.35)); 
                  transform: scale(${isActive ? 1.0 : 0.6}); 
                  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                  will-change: transform;
                ">
                  <path d="M17 0C7.61116 0 0 7.61116 0 17C0 23.3888 6.61116 33.1112 17 42C27.3888 33.1112 34 23.3888 34 17C34 7.61116 26.3888 0 17 0Z" fill="#FF3131"/>
                  <circle cx="17" cy="17" r="5" fill="white"/>
                </svg>
              </div>
            `
            return el
          }}
          enablePointerInteraction={false}
        />
      )}
    </div>
  )
}

export default GlobeComponent
