import { ContactUsSection } from "@/modules/about-us/sections";
import { HeroSection } from "@/modules/careers/sections/hero-section";
import OpenPosition from "@/modules/careers/sections/open-position-section";
import PerkBenefits from "@/modules/careers/sections/perks-benefits-section";
import Showcases from "@/modules/careers/sections/show-case-section";
import TraditionsCustoms from "@/modules/careers/sections/tradition-custom-section";
import FAQ from "@/shared/faq";
import SectionWrapper from "@/shared/wrapper";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box>
      <SectionWrapper>
        <HeroSection />
        <OpenPosition />
        <PerkBenefits />
      </SectionWrapper>
      <Showcases />
      <TraditionsCustoms/>
      <FAQ/>
      <ContactUsSection/>
    </Box>
  );
};

export default page;
