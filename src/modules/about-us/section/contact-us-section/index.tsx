"use client";
import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import CountriesList from "@/shared/countries-list";
import { countries, Country } from "@/assets/icons/contact-us";
import ContactCard from "@/shared/contact-card";
import { Email, Phone, Location } from "@/assets/icons/contact-us/contact";
import { ContactForm } from "../../contact-form";
import "./styles.scss";

export const ContactUsSection = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  return (
    <Box className="about-us-contact-us-section">
      <Image
        src={"/about-us/contact-us/vector.svg"}
        alt="vector"
        width={400}
        height={400}
        className="vector"
      />
      <Box className="left-container">
        <Typography component="h1" className="section-title">
          We’re Just a <br />
          <Typography component="span">Message</Typography> Away
        </Typography>
        <Box className="countries-list">
          <CountriesList
            className="countries-list"
            countryCardProps={{
              className: "country-card",
            }}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </Box>
        <Typography className="selected-country-title">
          {selectedCountry.name}
        </Typography>
        <Typography className="selected-country-description">
          {selectedCountry.description}
        </Typography>
        <ContactCard
          className="contact-card"
          url={Email}
          description={selectedCountry.office.email}
        />
        <ContactCard
          className="contact-card"
          url={Phone}
          description={selectedCountry.office.phone}
        />
        <ContactCard
          className="contact-card"
          url={Location}
          description={selectedCountry.office.address}
        />
      </Box>
      <Box className="right-container">
        <ContactForm />
      </Box>
    </Box>
  );
};
