import FutureProof from "@/components/future-proof";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import InfiniteSlider from "@/components/infinite-slider";
import TagLine from "@/components/tag-line";
import Title from "@/components/title";
import SectionWrapper from "@/components/wrapper";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box>
      <Header />
      <SectionWrapper>
        <HeroSection />
        <TagLine />
        <InfiniteSlider />
        <FutureProof/>
      </SectionWrapper>
    </Box>
  );
};

export default page;
