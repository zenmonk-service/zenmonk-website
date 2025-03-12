import { Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import BaseButton from "@/components/shared/button";
import About from "@/assets/images/about/about.png"
import "./styles.scss";

const HeroSection = () => {
  return (
    <Box className="about-us-hero-section-wrapper">
      <Toolbar />
      {/* <Image
        width={50}
        height={500}
        quality={100}
        src={"/about/hero-section/vector.svg"}
        alt="vector"
        className="vector"
      /> */}
      <Box className="hero-section">
        <Box className="hero-section-text-wrapper">
          <Typography variant="h4" className="text-heading">
            Meet the Innovators <br />
            Behind
            <Typography variant="inherit" component="span">
              ZENMONK
            </Typography>
          </Typography>
          <Typography component="p" className="text-description">
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
          </Typography>
        </Box>
        <BaseButton sx={{ width: "180px" }}>Explore Services</BaseButton>
      </Box>
      <Box className="hero-section-image-wrapper">
        <Image
          className="hero-section-image"
          src={About}
          alt="innovator"
          fill
        />
      </Box>
    </Box>
  );
};

export { HeroSection };
