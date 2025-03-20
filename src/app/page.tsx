import { Box } from "@mui/material";
import {
  ServiceSection,
  HeroSection,
  TechSolutionSection,
  OurWorkSection,
  WhyChooseUsSection,
  ClientSatisfaction,
} from "@/modules/home/sections";

import InfiniteSlider from "@/shared/infinite-slider";
import TagLine from "@/modules/home/tag-line";
import SectionWrapper from "@/shared/wrapper";
import ContactUs from "@/shared/contact-us";
import { Odometer } from "@/modules/home/odometer";
import AnimatedDiv from "@/shared/animated-div";
import FAQ from "@/shared/faq";
import Testimony from "@/modules/home/testimony";

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
  <ClientSatisfaction/>
</AnimatedDiv>

      <AnimatedDiv>
        <FAQ/>
        {/* <ContactUs /> */}
      </AnimatedDiv>

      <AnimatedDiv>
        <Testimony/>
        {/* <ContactUs /> */}
      </AnimatedDiv>
    </Box>
  );
};

export default page;
