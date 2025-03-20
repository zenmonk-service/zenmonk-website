import { Process } from "@/modules/how-we-work/process";
import { HeroSection } from "@/modules/how-we-work/hero-section";
import { Box } from "@mui/material";
import { Quality } from "@/modules/how-we-work/quality";
import { Review } from "@/modules/how-we-work/review";

const page = () => {
    return (
      <Box>
         <HeroSection/>
         <Process/>
         <Quality/>
         <Review/>
      </Box>
    );
  };
  
export default page;