import * as THREE from 'three'
import React, { useEffect, useRef, useState, useMemo } from 'react'
import Globe from 'react-globe.gl'
import GlobeTexture from '../contact-us/globe/texture.jpg'
import styles from './contact-us-section.module.scss'

interface ThreeGlobeProps {
  lat: number
  lng: number
  trigger?: number
}

const TOPOLOGY_IMAGE_URL =
  'https://unpkg.com/three-globe@2.45.2/example/img/earth-topology.png'
const WATER_COLOR_HEX = '#053693'
const WATER_COLOR = new THREE.Color(WATER_COLOR_HEX)
const GLOBE_ALTITUDE = 1.85

const createPinElement = () => {
  const pin = document.createElement('div')
  pin.style.transform = 'translate(-50%, -100%)'
  pin.style.pointerEvents = 'none'
  pin.innerHTML = `
    <div style="width: max(30px, 1.8vw); height: max(42px, 2.52vw); filter: drop-shadow(0 12px 14px rgba(255, 83, 61, 0.28)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.18));">
      <svg width="100%" height="100%" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 42C8.5 34.2 0 25.3 0 15C0 6.716 6.716 0 15 0C23.284 0 30 6.716 30 15C30 25.3 21.5 34.2 15 42Z" fill="url(#pinGradient)" />
        <circle cx="15" cy="14.5" r="6.5" fill="rgba(255,255,255,0.98)" />
        <defs>
          <linearGradient id="pinGradient" x1="15" y1="0" x2="15" y2="42" gradientUnits="userSpaceOnUse">
            <stop stop-color="#ff6b5d" />
            <stop offset="0.55" stop-color="#ff4d42" />
            <stop offset="1" stop-color="#ef2b25" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `

  return pin
}

export default function ThreeGlobe({ lat, lng, trigger }: ThreeGlobeProps) {
  const globeRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const cloudSphereRef = useRef<THREE.Mesh | null>(null)
  const cloudAnimationRef = useRef<number | null>(null)
  const lightingRigRef = useRef<THREE.Group | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!containerRef.current || typeof ResizeObserver === 'undefined') {
      return
    }

    const updateSize = () => {
      if (!containerRef.current) return

      const { width, height } = containerRef.current.getBoundingClientRect()
      if (width > 0 && height > 0) {
        setDimensions({ width, height })
      }
    }

    const resizeObserver = new ResizeObserver(updateSize)
    resizeObserver.observe(containerRef.current)
    updateSize()

    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    if (
      !globeRef.current ||
      typeof globeRef.current.pointOfView !== 'function'
    ) {
      return
    }

    globeRef.current.pointOfView({ lat, lng, altitude: GLOBE_ALTITUDE }, 800)
  }, [lat, lng, trigger])

  useEffect(() => {
    return () => {
      if (cloudAnimationRef.current) {
        cancelAnimationFrame(cloudAnimationRef.current)
      }

      const scene = globeRef.current?.scene?.()

      if (scene && cloudSphereRef.current) {
        scene.remove(cloudSphereRef.current)
      }

      if (scene && lightingRigRef.current) {
        scene.remove(lightingRigRef.current)
      }
    }
  }, [])

  const handleGlobeReady = () => {
    if (!globeRef.current) return

    const controls = globeRef.current.controls?.()
    if (controls) {
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.6
      controls.enableZoom = false
      controls.enablePan = false
      controls.enableRotate = true
      controls.enableDamping = true
      controls.dampingFactor = 0.08
      controls.rotateSpeed = 0.6
    }

    const material = globeRef.current.globeMaterial?.()
    if (material) {
      material.bumpScale = 0.06 // Smooth and clean, not wrinkled
      material.shininess = 35 // Crisper reflection highlights
      material.specular = new THREE.Color(0x4f6f8f)
      material.emissive = new THREE.Color(0x050a14)
      material.emissiveIntensity = 0.05

      let loadedSpecularTexture: THREE.Texture | null = null

      // Custom Shader injection to color the water to #053693
      material.onBeforeCompile = (shader: any) => {
        shader.uniforms.waterMask = { value: loadedSpecularTexture }
        shader.fragmentShader =
          'uniform sampler2D waterMask;\n' + shader.fragmentShader

        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <map_fragment>',
          `
          #include <map_fragment>
          vec4 specTex = texture2D( waterMask, vUv );
          float waterVal = smoothstep(0.12, 0.9, specTex.r);
          float baseLuma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 targetWaterColor = vec3(${WATER_COLOR.r.toFixed(4)}, ${WATER_COLOR.g.toFixed(4)}, ${WATER_COLOR.b.toFixed(4)});
          vec3 shadedWaterColor = targetWaterColor * (0.58 + baseLuma * 0.72);

          diffuseColor.rgb = mix(diffuseColor.rgb, shadedWaterColor, waterVal * 0.94);
          `
        )
        material.userData.shader = shader
      }

      const specLoader = new THREE.TextureLoader()
      specLoader.setCrossOrigin('anonymous')
      specLoader.load(
        'https://unpkg.com/three-globe@2.45.2/example/img/earth-water.png',
        (specularTexture) => {
          specularTexture.colorSpace = THREE.NoColorSpace
          material.specularMap = specularTexture
          loadedSpecularTexture = specularTexture

          if (material.userData.shader) {
            material.userData.shader.uniforms.waterMask.value = specularTexture
          }
          material.needsUpdate = true
        }
      )
    }

    const scene = globeRef.current.scene?.()
    const renderer = globeRef.current.renderer?.()
    if (!scene || !renderer) {
      setIsLoading(false)
      return
    }

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy()
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
        mats.forEach((mat: any) => {
          if (mat.map) {
            mat.map.anisotropy = maxAnisotropy
            mat.map.needsUpdate = true
          }
          if (mat.bumpMap) {
            mat.bumpMap.anisotropy = maxAnisotropy
            mat.bumpMap.needsUpdate = true
          }
          if (mat.specularMap) {
            mat.specularMap.anisotropy = maxAnisotropy
            mat.specularMap.needsUpdate = true
          }
        })
      }
    })

    if (!lightingRigRef.current) {
      const rig = new THREE.Group()

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.25)
      const hemisphereLight = new THREE.HemisphereLight(
        0xdcefff,
        0x4e3c31,
        1.35
      )
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.8)
      keyLight.position.set(180, 120, 260)
      const rimLight = new THREE.DirectionalLight(0x7fbaff, 1.4)
      rimLight.position.set(-140, 40, -200)

      rig.add(ambientLight, hemisphereLight, keyLight, rimLight)
      lightingRigRef.current = rig
      scene.add(rig)
    }

    if (!cloudSphereRef.current) {
      const cloudLoader = new THREE.TextureLoader()
      cloudLoader.setCrossOrigin('anonymous')
      cloudLoader.load(
        'https://unpkg.com/three-globe@2.45.2/example/clouds/clouds.png',
        (cloudTexture) => {
          cloudTexture.colorSpace = THREE.SRGBColorSpace
          cloudTexture.anisotropy = maxAnisotropy

          const cloudMaterial = new THREE.MeshPhongMaterial({
            map: cloudTexture,
            transparent: true,
            opacity: 0.85,
            depthWrite: false,
            blending: THREE.NormalBlending,
          })

          const clouds = new THREE.Mesh(
            new THREE.SphereGeometry(100 * 1.018, 120, 120),
            cloudMaterial
          )

          clouds.rotation.z = THREE.MathUtils.degToRad(23.5)
          clouds.rotation.y = THREE.MathUtils.degToRad(18)
          clouds.renderOrder = 3
          scene.add(clouds)
          cloudSphereRef.current = clouds

          const rotateClouds = () => {
            if (!cloudSphereRef.current) return
            cloudSphereRef.current.rotation.y += 0.00015
            cloudSphereRef.current.rotation.x += 0.00003
            cloudAnimationRef.current = requestAnimationFrame(rotateClouds)
          }

          rotateClouds()
        }
      )
    }

    setTimeout(() => {
      if (globeRef.current) {
        globeRef.current.pointOfView({ lat, lng, altitude: GLOBE_ALTITUDE }, 0)
      }
    }, 50)
    setIsLoading(false)
  }

  const pinData = useMemo(() => [{ lat, lng }], [lat, lng])

  return (
    <div ref={containerRef} className={styles.globeCanvasContainer}>
      <div
        style={{
          position: 'absolute',
          inset: '12% 10% 10%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 40% 35%, rgba(255, 246, 228, 0.96) 0%, rgba(251, 220, 181, 0.34) 28%, rgba(255, 166, 77, 0.09) 56%, rgba(255, 255, 255, 0) 76%)',
          filter: 'blur(42px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '8%',
          width: '54%',
          height: '10%',
          transform: 'translateX(-50%)',
          borderRadius: '999px',
          background:
            'radial-gradient(circle, rgba(10, 32, 61, 0.28) 0%, rgba(10, 32, 61, 0.16) 36%, rgba(10, 32, 61, 0) 76%)',
          filter: 'blur(14px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {dimensions.width > 0 && dimensions.height > 0 ? (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          rendererConfig={{ antialias: true, alpha: true }}
          globeImageUrl={GlobeTexture.src}
          bumpImageUrl={TOPOLOGY_IMAGE_URL}
          showAtmosphere
          atmosphereColor="#bfdfff"
          atmosphereAltitude={0.09}
          animateIn={false}
          htmlElementsData={pinData}
          htmlElement={createPinElement}
          onGlobeReady={handleGlobeReady}
        />
      ) : null}

      {isLoading && (
        <div className={styles.globeLoadingOverlay}>
          <div className="w-10 h-10 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin mb-2" />
          <p className="text-gray-500 text-sm font-medium">Loading Globe...</p>
        </div>
      )}
    </div>
  )
}
