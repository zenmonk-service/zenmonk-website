"use client";
import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { BusinessProof, businessProof } from "./business-proof";
import { ZenmonkLogo } from "@/assets/images";
import Title from "../title";
import "./styles.scss";
import { techLogos } from "@/assets/icons/business/tech";
import BaseButton from "../shared/button";

const FutureProof = () => {
  const [heading, setHeading] = useState(businessProof[0].title);
  const [description, setDescription] = useState(businessProof[0].description);

  const selectItem = (Business: BusinessProof) => {
    setHeading(Business.title);
    setDescription(Business.description);
  };
  const text = "Future Proof Your Business With Our IT Services";
  return (
    <Box className="future-proof-container">
      <Image
        className="future-proof-image"
        src={ZenmonkLogo}
        alt="future-proof"
      />
      <Title text={text} />
      <Box className="business-proof-wrapper">
        <Box className="business-proof">
          <Box className="business-proof-items">
            {businessProof.map((item: BusinessProof) => (
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
                    <Image src={item.icon} alt={item.title} />
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
              {techLogos.map((logo) => {
                return <Image key={logo.name} src={logo.src} alt={logo.name} />;
              })}
            </Box>
            <BaseButton
              sx={{
                maxWidth: "158px",
                color: "var(--foreground) !important",
                textTransform:"uppercase !important",
                background: "linear-gradient(0deg, #FFF 0%, #FFF 100%)",
              }}
            >
              Get Started
            </BaseButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FutureProof;
