import React, { useRef, useState, useEffect } from 'react'
import Globe from 'react-globe.gl'
import TextureGlobe from './texture.jpg'

type Marker = { lat: number; lng: number; size: number; color: string }
type Country = { name: string; coordinates: [number, number] }
type GlobeWithMarkersProps = { selectedCountry: Country }

const GlobeWithMarkers: React.FC<GlobeWithMarkersProps> = ({
  selectedCountry,
}) => {
  const globeRef = useRef<any>(null)
  const [markers, setMarkers] = useState<Marker[]>([])

  useEffect(() => {
    const [lng, lat] = selectedCountry.coordinates
    setMarkers([{ lat, lng, size: 0.5, color: 'red' }])
    globeRef.current?.pointOfView({ lat, lng, altitude: 0.8 }, 1000)
  }, [selectedCountry])

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.scene().scale.set(1, 1, 1)
    }
  }, [])

  return (
    <Globe
      backgroundColor="black"
      ref={globeRef}
      globeImageUrl={TextureGlobe.src}
      bumpImageUrl={TextureGlobe.src}
      pointsData={markers}
      pointColor="color"
      pointAltitude="size"
    />
  )
}

export default GlobeWithMarkers
