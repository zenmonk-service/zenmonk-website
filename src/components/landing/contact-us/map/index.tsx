"use client";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { countries, Country } from "@/assets/icons/contact-us";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { PatternLines } from "@visx/pattern";
import "./styles.scss";

interface SimpleMapProps {
  selectedCountry: Country;
}

const SimpleMap = ({ selectedCountry }: SimpleMapProps) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box className="simple-map">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 210, center: [14, 10] }}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eb7c0d" />
            <stop offset="100%" stopColor="#ffa750" />
          </linearGradient>
          <PatternLines
            id="dotted-pattern"
            width={10}
            height={10}
            stroke="var(--primary)"
            strokeWidth={1}
            orientation={["horizontal", "vertical"]}
          />
        </defs>

        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "url(#dotted-pattern)" },
                  hover: { fill: "url(#dotted-pattern)" },
                  pressed: { fill: "url(#dotted-pattern)" },
                }}
              />
            ))
          }
        </Geographies>

        {countries.map(
          ({ name, coordinates, markerOffset, marketXoffSet, idx }: any) => {
            const isHighlighted =
              hoveredIdx === idx || selectedCountry?.idx === idx;

            return (
              <Marker
                key={name}
                coordinates={coordinates}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <motion.path
                  initial={{ scale: 1 }}
                  animate={{ scale: isHighlighted ? 1.4 : 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    cursor: "pointer",
                    filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.3))",
                  }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 10.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
                  fill="#F00"
                  stroke="#fff"
                  strokeWidth={0.5}
                />
                <motion.text
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: isHighlighted ? 1 : 0,
                    y: isHighlighted ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                  textAnchor="middle"
                  y={markerOffset}
                  x={marketXoffSet}
                  style={{ fontFamily: "Poppins", fontSize: "14px" }}
                >
                  {name}
                </motion.text>
              </Marker>
            );
          }
        )}
      </ComposableMap>
    </Box>
  );
};

export default SimpleMap;
