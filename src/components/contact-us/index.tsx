'use client'
import React, { useEffect, useState } from "react";
import Globe, { Marker } from "react-globe";

const markers: Marker[] = [
  { id: "1", city: "India", coordinates: [20.5937, 78.9629], value: 10, color: "#EB7C0D" },
  { id: "2", city: "Spain", coordinates: [40.4637, -3.7492], value: 8, color: "#EB7C0D" },
  { id: "3", city: "Brazil", coordinates: [-14.2350, -51.9253], value: 12, color: "#EB7C0D" },
  { id: "4", city: "Colombia", coordinates: [4.5709, -74.2973], value: 7, color: "#EB7C0D" },
  { id: "5", city: "Peru", coordinates: [-9.1900, -75.0152], value: 9, color: "#EB7C0D" },
  { id: "6", city: "Ecuador", coordinates: [-1.8312, -78.1834], value: 6, color: "#EB7C0D" },
];

const GlobeComponent = () => {
  const [globeConfig, setGlobeConfig] = useState({});

  useEffect(() => {
    setGlobeConfig({
      markerOptions: {
        enableTooltip: true,
        getTooltipContent: (marker:Marker) => `<b>${marker.city}</b>`,
      },
    });
  }, []);

  return (
    <Globe
      width={800}
      height={600}
      markers={markers}
      options={globeConfig}
    />
  );
};

export default GlobeComponent;
