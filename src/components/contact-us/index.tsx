"use client";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { countries, Country } from "@/assets/icons/contact-us";
import CountryCard from "./country-card";
import SimpleGlobe from "./globe";
import "./styles.scss";

const ContactUs = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  return (
    <Box className="contact-us-section">
      <Box className="left-container">
        <Typography className="section-title" variant="h1">
          Contact Us
        </Typography>
        <Typography className="section-heading" component={"h1"}>
          Lets fire up your business!
        </Typography>
        <Typography className="section-description" component="p">
          Team up with us today for an unforgettable experience
        </Typography>
        <Box className="countries-list">
          {countries.map((country, index) => {
            return (
              <CountryCard
                key={index}
                setSelectedCountry={setSelectedCountry}
                country={country}
              />
            );
          })}
        </Box>
       <Typography className="country-name" variant="h2">
          {selectedCountry.name}
        </Typography>
        <Typography className="office-address" variant="h3">
          {selectedCountry.address}
        </Typography>
      </Box>
      <Box className="right-container">
        <SimpleGlobe id={selectedCountry.id} />
      </Box>
    </Box>
  );
};

export default ContactUs;
