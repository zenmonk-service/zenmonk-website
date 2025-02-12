"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CraftAndCollab,
  Deadline,
  Support,
  LatestTech,
  ThumsUp,
} from "@/assets/icons/why-choose-us";
import { Box } from "@mui/material";
import Title from "@/components/title";
import {  ZenmonkLogoV2, ZenmonkLogoV3 } from "@/assets/images";
import "./styles.scss";

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const clientSatisficationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (clientSatisficationRef.current) {
      observer.observe(clientSatisficationRef.current);
    }

    return () => {
      if (clientSatisficationRef.current) {
        observer.unobserve(clientSatisficationRef.current);
      }
    };
  }, []);

  return (
    <Box className="why-choose-us-section">
      <Title text="Elevate your tech journey with Zenmonk" className="title" />
     <Image src={ZenmonkLogoV2} alt="logo" className="logo left-logo" />
     <Image src={ZenmonkLogoV3} alt="logo" className="logo right-logo" />
     
      <Box ref={clientSatisficationRef} className="why-choose-us">
        <Box className="content">
          <Box className={`thumsup ${isVisible && "animate_scale"}`}>
            <ThumsUp />
          </Box>
          <Box className="children">
            <Box className={`first ${isVisible && "animate_comeFromLeft"}`}>
              <CraftAndCollab />
            </Box>

            <Box className={`second ${isVisible && "animate_comeFromRight"}`}>
              <Support />
            </Box>

            <Box className={`third ${isVisible && "animate_comeFromLeft"}`}>
              <Deadline />
            </Box>

            <Box className={`fourth ${isVisible && "animate_comeFromRight"}`}>
              <LatestTech />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { WhyChooseUsSection };
