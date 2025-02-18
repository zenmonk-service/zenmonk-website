import { Box } from "@mui/material";
import {
  ServiceSection,
  HeroSection,
  TechSolutionSection,
  OurWorkSection,
  WhyChooseUsSection,
  ClientSatisfaction,
  Footer,
} from "@/components/sections";

import Header from "@/components/header";
import InfiniteSlider from "@/components/infinite-slider";
import TagLine from "@/components/tag-line";
import SectionWrapper from "@/components/wrapper";
import ContactUs from "@/components/contact-us";
import { Odometer } from "@/components/odometer";
import AnimatedDiv from "@/components/animated-div";

const page = () => {
  return (
    <Box>
      <Header />
      <SectionWrapper>
        <HeroSection />
        <AnimatedDiv>
          <TagLine />
          <InfiniteSlider />
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
      <SectionWrapper>
        <AnimatedDiv>
          <ContactUs />
        </AnimatedDiv>
      </SectionWrapper>
      <Footer />
    </Box>
  );
};

export default page;
