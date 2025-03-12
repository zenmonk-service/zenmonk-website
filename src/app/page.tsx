import { Box } from "@mui/material";
import {
  ServiceSection,
  HeroSection,
  TechSolutionSection,
  OurWorkSection,
  WhyChooseUsSection,
} from "@/components/landing/sections";

import InfiniteSlider from "@/components/shared/infinite-slider";
import TagLine from "@/components/landing/tag-line";
import SectionWrapper from "@/components/shared/wrapper";
import ContactUs from "@/components/landing/contact-us";
import { Odometer } from "@/components/landing/odometer";
import AnimatedDiv from "@/components/shared/animated-div";

const page = () => {
  return (
    <Box>
      <SectionWrapper>
        <HeroSection />
        <AnimatedDiv>
          <TagLine />
          <InfiniteSlider/>
        </AnimatedDiv>
        <AnimatedDiv>
          <ServiceSection />
        </AnimatedDiv>
        <AnimatedDiv>
          <TechSolutionSection />
        </AnimatedDiv>
      </SectionWrapper>
      <AnimatedDiv>
        <OurWorkSection />
      </AnimatedDiv>
      <SectionWrapper>
        <AnimatedDiv>
          <WhyChooseUsSection />
        </AnimatedDiv>
      </SectionWrapper>
      <AnimatedDiv>
        <Odometer />
      </AnimatedDiv>
      <AnimatedDiv>
        <ContactUs />
      </AnimatedDiv>
    </Box>
  );
};

export default page;
