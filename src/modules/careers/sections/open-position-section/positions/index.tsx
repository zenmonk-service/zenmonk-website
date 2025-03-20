"use client";
import { Box, Chip, Typography } from "@mui/material";
import { positionsList } from "./positions-list";
import { Department } from "../../types";
import "./styles.scss";
import { useState } from "react";

interface SkillsCardProps {
  title: string;
  description: string;
}

const Positions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<
    Department | undefined
  >(positionsList.find((dept) => dept.positions.some((pos) => pos.isOpening)));

  const selectPosition = (department: Department) => {
    setSelectedDepartment(department);
  };

  return (
    <Box className="positions">
      <Box className="left-section">
        {positionsList.map((department, index) => {
          const hasOpenPosition = department.positions.some(
            (position) => position.isOpening
          );
          return (
            <Typography
              className={`position ${
                selectedDepartment?.id === department.id ? "selected" : ""
              }`}
              key={index}
              onClick={() => {
                hasOpenPosition && selectPosition(department);
              }}
              sx={{
                color: "GrayText",
                "&:hover": {
                  color: "var(--foreground)",
                },
              }}
            >
              {department.department}
            </Typography>
          );
        })}
      </Box>

      <Box className="right-section">
        {selectedDepartment?.positions.map((department, index) => {
          return (
            <Box key={index}>
              <Typography component="h1" className="department-title">
                {department.heading}
                <Chip
                  className="chip-label"
                  label={department.isOpening ? "open" : "closed"}
                  color={department.isOpening ? "success" : "error"}
                  variant="outlined"
                />
              </Typography>
              <Typography component="p" className="department-description">
                {department.description}
              </Typography>
              <Box className="skills-set-wrapper">
                {department.skills.map((skill, index) => (
                  <SkillsCard
                    key={index}
                    title={skill.title}
                    description={skill.description}
                  />
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const SkillsCard = ({ title, description }: SkillsCardProps) => {
  return (
    <Box className="skills-container">
      <Typography className="skills-title" component="h3">
        ✅&nbsp;{title}
      </Typography>
      <Typography className="skills-description" component="p">
        {description}
      </Typography>
    </Box>
  );
};

export default Positions;
