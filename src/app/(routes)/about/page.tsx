import { Box } from "@mui/material";
import Rating from "@/components/about-us/rating";
import { BusinessSection, HeroSection, WhyChooseUsSection, AwardProofSection, StandOutSection } from "@/components/about-us/section";
import AnimatedDiv from "@/components/shared/animated-div";
import SectionWrapper from "@/components/shared/wrapper";

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
        <AnimatedDiv>
          <WhyChooseUsSection />
        </AnimatedDiv>
        <AnimatedDiv>
          <AwardProofSection />
        </AnimatedDiv>
      </SectionWrapper>
    </Box>
  );
};

export default About;
