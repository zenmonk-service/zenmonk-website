"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer"; // Import the hook
import Title from "@/components/shared/title";
import Satisfication from "@/components/landing/satisfication";
import "./styles.scss";

const ClientSatisfaction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <Box className={`client-satisfaction-section ${inView ? "in-view" : ""}`}>
      <Title
        text="The Evolution of Client Satisfaction"
        align="center"
        className="title"
      />
      <Box>
        <Typography component="p" className="description">
          We are a top mobile app development company in India, known for our.
          We are a top mobile app development company in India, known for oure.
          We are a top mobile app development company in India, known for our.
          We are a top mobile app development company in India, known for oure
        </Typography>
      </Box>
      <Box ref={ref} className="svg-container">
        <Satisfication />
      </Box>
    </Box>
  );
};

export { ClientSatisfaction };
