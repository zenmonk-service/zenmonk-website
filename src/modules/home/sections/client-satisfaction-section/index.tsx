"use client";

import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer"; 
import Title from "@/shared/title";
import Satisfication from "@/modules/home/satisfication";
import "./styles.scss";

const ClientSatisfaction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
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
