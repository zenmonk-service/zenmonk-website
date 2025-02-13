"use client";
import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { serviceList, Service } from "./service-list";
import { ZenmonkLogo } from "@/assets/images";
import Title from "../../title";
import { techLogos } from "@/assets/icons/business/tech";
import BaseButton from "../../shared/button";
import "./styles.scss";

const ServiceSection = () => {
  const [heading, setHeading] = useState(serviceList[0].title);
  const [description, setDescription] = useState(serviceList[0].description);

  const selectItem = (Business: Service) => {
    setHeading(Business.title);
    setDescription(Business.description);
  };
  const text = "Future Proof Your Business With Our IT Services";
  return (
    <Box mt={15}>
      <Title text={text} align="center"/>
      <Box className="services-section">
        <Box className="services-left-container">
          {serviceList.map((item: Service) => (
            <Box
              className="business-item"
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
                 {item.icon &&  <Image src={item.icon} alt={item.title} />}
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
        <Box className="services-right-container">
         {ZenmonkLogo &&  <Image className="logo" src={ZenmonkLogo} alt="zenmonk-logo" />}
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
                {techLogos.map((logo,index) => {
                  return <Box key={index}>
                  {logo.src &&  <Image key={logo.name} src={logo.src} alt={logo.name} />}
                  </Box>;
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
