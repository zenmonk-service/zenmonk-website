import { HeroSection } from "@/modules/careers/components/sections/hero-section";
import OpenPosition from "@/modules/careers/components/sections/open-position-section";
import PerkBenefits from "@/modules/careers/components/sections/perks-benefits";
import SectionWrapper from "@/shared/wrapper";
import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box>
      <SectionWrapper>
          <HeroSection />
          <OpenPosition/>
          <PerkBenefits/>
      </SectionWrapper>
    </Box>
  );
};

export default page;
