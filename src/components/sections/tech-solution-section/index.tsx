import { Box, Toolbar, Typography } from "@mui/material";
import BaseButton from "../../shared/button";
import { Laptop2 } from "@/assets/images";
import Image from "next/image";
import "./styles.scss";
import Title from "@/components/title";
import { TechSolution, techSolution } from "@/assets/icons/it-solution";
import TechCard from "./tech-card";

const TechSolutionSection = () => {
  return (
    <Box className="tech-solution-section-wrapper">
      <Toolbar />
      <Box className="tech-solution-section">
        <Box className="tech-solution-section-text-wrapper">
          <Box className="text-heading">
            <Title
              text="Maximizing Your Business Potential With Expert IT Solutions."
              align="left"
            />
          </Box>
          <Typography component="p" className="text-description">
            Welcome in the is to Zenmonk, where Software Innovation meets
            professionalism and solution oriented mindset. We are fluent in your
            language, proficient
          </Typography>
        </Box>
        <Box className="tech-solution-section-card-wrapper">
          {techSolution.map((tech: TechSolution) => {
            return <TechCard key={tech.src} icon={tech.src} title={tech.name} />;
          })}
        </Box>
        <BaseButton
          sx={{
            width: "max-content",
            textTransform: "uppercase !important",
          }}
        >
          Explore Services
        </BaseButton>
      </Box>
      <Box className="tech-solution-section-image-wrapper">
        <Image
          className="tech-solution-section-image"
          src={Laptop2}
          alt="techs"
        />
      </Box>
    </Box>
  );
};

export { TechSolutionSection };
