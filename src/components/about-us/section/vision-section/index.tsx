import { Box, Typography } from "@mui/material";
import Title from "@/components/shared/title";
import { visions } from "./visions";
import VisionCard from "../../card/vision-card";
import "./styles.scss";

export const VisionSection = () => {
  return (
    <Box className="vision-section">
      <Title
        text="Driven by Vision, Guided by Values"
        className="section-title"
      />
      <Typography component="p" className="section-description">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s. Lorem Ipsum has been the industry's standard{" "}
      </Typography>
      <Box className="vision-list">
        {visions.map((vision, index) => {
          return (
            <VisionCard title={vision.title} image={vision.image} key={index} />
          );
        })}
      </Box>
    </Box>
  );
};
