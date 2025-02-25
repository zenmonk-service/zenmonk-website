import Rating from "@/components/about/rating";
import { BusinessSection, HeroSection } from "@/components/about/section";
import StandOutSection from "@/components/about/section/stand-out-section";
import AnimatedDiv from "@/components/shared/animated-div";
import SectionWrapper from "@/components/shared/wrapper";
import { Box } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box>
      <SectionWrapper>
        <AnimatedDiv>
          <HeroSection />
          <Rating />
        </AnimatedDiv>
        <AnimatedDiv>
          <BusinessSection />
        </AnimatedDiv>
        <AnimatedDiv>
          <StandOutSection />
        </AnimatedDiv>
      </SectionWrapper>
    </Box>
  );
};

export default About;
