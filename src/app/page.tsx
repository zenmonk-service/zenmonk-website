import { Box } from "@mui/material";
import {
  ServiceSection,
  HeroSection,
  TechSolutionSection,
  OurWorkSection,
  WhyChooseUsSection,
} from "@/components/sections";

import Header from "@/components/header";
import InfiniteSlider from "@/components/infinite-slider";
import TagLine from "@/components/tag-line";
import SectionWrapper from "@/components/wrapper";
import { Odometer } from "@/components/odometer";
import SimpleGlobe from "@/components/contact-us";

const page = () => {
  return (
    <Box>
      <Header />
      <SectionWrapper>
        <HeroSection />
        <TagLine />
        <InfiniteSlider />
        <ServiceSection />
        <TechSolutionSection />
      </SectionWrapper>
      <OurWorkSection />
      <SectionWrapper>
        <WhyChooseUsSection />
      </SectionWrapper>
      {/* <Odometer /> */}
      <SimpleGlobe/>
    </Box>
  );
};

export default page;
