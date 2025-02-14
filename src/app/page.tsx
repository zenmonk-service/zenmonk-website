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
      <Odometer />
      <SectionWrapper>
        <ContactUs />
        {/* <ClientSatisfaction /> */}
      </SectionWrapper>
      <Footer/>
    </Box>
  );
};

export default page;
