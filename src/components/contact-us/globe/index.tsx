"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Globe, { Marker } from "react-globe";

import "./styles.scss";

const markers: Marker[] = [
  {
    id: "1",
    city: "India",
    coordinates: [20.5937, 78.9629],
    value: 10,
    color: "red",
  },
  {
    id: "2",
    city: "Spain",
    coordinates: [40.4637, -3.7492],
    value: 8,
    color: "red",
  },
  {
    id: "3",
    city: "Brazil",
    coordinates: [-14.235, -51.9253],
    value: 12,
    color: "red",
  },
  {
    id: "4",
    city: "Colombia",
    coordinates: [4.5709, -74.2973],
    value: 7,
    color: "red",
  },
  {
    id: "5",
    city: "Peru",
    coordinates: [-9.19, -75.0152],
    value: 9,
    color: "red",
  },
  {
    id: "6",
    city: "Ecuador",
    coordinates: [-1.8312, -78.1834],
    value: 6,
    color: "#EB7C0D",
  },
];

interface SimpleGlobeProps {
  id: string;
}

const SimpleGlobe = ({ id }: SimpleGlobeProps) => {
  return (
    <Box className="globe-box">
      <Globe
        globeBackgroundTexture={null}
        width={700}
        height={700}
        markers={markers}
        options={{
          enableMarkerGlow: true,
          markerTooltipRenderer: (marker: Marker) => ``,
          //glow proprties
          enableGlobeGlow: true,
          globeGlowCoefficient: 0.1,
          globeGlowColor: "rgba(255, 167, 80, 0.20) 97.72%)",
          globeGlowPower: 4,
          
          // camera
          cameraAutoRotateSpeed: 2,
          cameraMaxPolarAngle: (Math.PI * 9) / 16,
          cameraMinPolarAngle: (Math.PI * 7) / 16,
          cameraRotateSpeed: 0.5,
          enableCameraAutoRotate: true,
          enableCameraRotate: true,
        }}
      />
    </Box>
  );
};

export default SimpleGlobe;
