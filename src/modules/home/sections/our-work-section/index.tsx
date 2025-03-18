"use client";

import { useState } from "react";
import { projects } from "./project-list";
import { Box, Typography } from "@mui/material";
import Title from "@/shared/title";
import { WorkList } from "@/assets/images/our-work";
import "./styles.scss";

const OurWorkSection = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setActiveSection(index);
  };

  const handleMouseLeave = () => {
    setActiveSection((prev) => prev);
  };

  const backgroundImage = WorkList[activeSection]?.src ?? "";
  return (
    <Box className="our-work-section">
      <Title
        text="Our latest project's resounding success"
        align="center"
        className="title"
      />
      <Box className="our-work-container">
        <Box
          className={`section-container ${
            activeSection === 1 ? "transform-in" : "transform-out"
          }`}
          sx={{ backgroundImage: `url(${backgroundImage}) !important` }}
        >
          {projects.map(({ title, description }, index) => (
            <Box
              key={index}
              className="work-details"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Box className="work-content">
                <Typography component="p">{`0${index + 1}`}</Typography>
                <Typography component="p">{title}</Typography>
                <Typography component="p">{description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { OurWorkSection };
