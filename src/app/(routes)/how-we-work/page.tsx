import { Process } from "@/modules/how-we-work/process";
import { HeroSection } from "@/modules/how-we-work/hero-section";
import { Box } from "@mui/material";
import { Quality } from "@/modules/how-we-work/quality";
import { Review } from "@/modules/how-we-work/review";
import { Innovation } from "@/modules/how-we-work/Innovation";
import { ReadyToTalk } from "@/modules/how-we-work/ready-to-talk";

const page = () => {
    return (
      <Box>
         <HeroSection/>
         <Process/>
         <Quality/>
         <Review/>
         <Innovation/>
         <ReadyToTalk/>
      </Box>
    );
  };
  
export default page;