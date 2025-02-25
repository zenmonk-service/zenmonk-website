"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { serviceList, Service } from "./service-list";
import { ZenmonkLogo } from "@/assets/images";
import Title from "../../../shared/title";
import { techLogos } from "@/assets/icons/business/tech";
import BaseButton from "../../../shared/button";
import "./styles.scss";
import { Height } from "@mui/icons-material";

const ServiceSection = () => {
  const [heading, setHeading] = useState(serviceList[0].title);
  const [description, setDescription] = useState(serviceList[0].description);
  const [businessItemRefPosition, setbusinessItemRefPosition] =
    useState<number | null>(null);
  const [rightSectionHeadingRefPosition, setRightSectionHeadingRefPosition] =
    useState<any>(null);
  
  const [isOverlapped, setIsOverlapped] = useState<boolean>(false);
  const businessItemRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightSectionHeadingRef = useRef<HTMLDivElement | null>(null);

  const updatePosition = () => {

    if (businessItemRef.current[0]) {
      const rect = businessItemRef.current[0]?.getBoundingClientRect();
      setbusinessItemRefPosition(rect?.top);
    }
  

    if (rightSectionHeadingRef.current) {
      const rect = rightSectionHeadingRef.current.getBoundingClientRect();
      setRightSectionHeadingRefPosition(rect.top);
    }
  };

  useEffect(()=> {
    if (businessItemRefPosition && rightSectionHeadingRefPosition) {
      if (businessItemRefPosition < rightSectionHeadingRefPosition) {
        setIsOverlapped(true);
      }
      else {
        setIsOverlapped(false);
      }
    }

  }, [businessItemRefPosition, rightSectionHeadingRefPosition])

  // Add the scroll event listener
  useEffect(() => {
    updatePosition(); // Initial position check
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition); // Cleanup listener on unmount
    };
  }, []);

  const selectItem = (Business: Service) => {
    setHeading(Business.title);
    setDescription(Business.description);
  };

  console.log("businessItemRef", businessItemRef)

  const text = "Future Proof Your Business With Our IT Services";

  return (
    <Box mt={15}>
      <Box className="services-section">
        <Box className="services-left-container">
          {/* <Box sx={{
            width:"150%",
            height:"100px !important",
            background:"white",
            position:"sticky",
            top:0
          }}/> */}
          {serviceList.map((item: Service, index: number) => (
            <Box
              ref={(el : any) => (businessItemRef.current[index] = el)}
              // className={`business-item fade-transition ${businessItemRef.current[index] && businessItemRef.current[index].getBoundingClientRect().top < 150 ? "fade-transition-hidden" : ""}`}
              className={`business-item`}
              onClick={() => selectItem(item)}
              sx={{
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
              key={item.id}
            >
              <Box className="business-item-content">
                <Box className="business-icon">
                  {item.icon && <Image src={item.icon} alt={item.title} />}
                </Box>
                <Typography
                  component="h4"
                  variant="h4"
                  className="business-title"
                >
                  {item.title}
                </Typography>
              </Box>
              <Typography
                component="h5"
                variant="h5"
                className="business-count-text"
                sx={{
                  background: `linear-gradient(180deg, ${item.color} -64.31%, #FFF 99.87%)`,
                }}
              >
                {item.id}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box ref={rightSectionHeadingRef} className="services-right-container">
          <div
            className={`fade-transition ${isOverlapped ? "fade-transition-hidden" : ""}`}>
          <Title text={text} align="center" />
          </div>
          {ZenmonkLogo && (
            <Image className="logo" src={ZenmonkLogo} alt="zenmonk-logo" />
          )}
          <Box className="business-proof">
            <Box className="business-proof-content">
              <Typography
                component="h5"
                variant="h5"
                className="business-proof-heading"
              >
                {heading}
              </Typography>
              <Typography component="p" className="business-proof-description">
                {description}
              </Typography>
              <Box className="business-proof-technologies">
                {techLogos.map((logo, index) => {
                  return (
                    <Box key={index}>
                      {logo.src && (
                        <Image key={logo.name} src={logo.src} alt={logo.name} />
                      )}
                    </Box>
                  );
                })}
              </Box>
              <BaseButton
                sx={{
                  maxWidth: "158px",
                  color: "var(--foreground) !important",
                  textTransform: "uppercase !important",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  background: "linear-gradient(0deg, #FFF 0%, #FFF 100%)",
                }}
              >
                Get Started
              </BaseButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ServiceSection };
