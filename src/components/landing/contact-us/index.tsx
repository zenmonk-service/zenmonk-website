"use client";
import { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import { countries, Country } from "@/assets/icons/contact-us";
import CountryCard from "./country";
import ContactCard from "./card";
import { Email, Phone, Location } from "@/assets/icons/contact-us/contact";
import Title from "../../shared/title";
import GlobeAnimation from "./globe";
import "./styles.scss";

const ContactUs = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  return (
    <Box className="contact-us-section">
      <Box className="left-container">
        <Title
          text="Lets fire up your business!"
          align="left"
          className="section-title"
        />
      
        <Box className="countries-list">
          {countries.map((country, index) => {
            return (
              <Fragment key={index}>
                <CountryCard
                  isSelected={country === selectedCountry}
                  key={index}
                  setSelectedCountry={setSelectedCountry}
                  country={country}
                />
              </Fragment>
            );
          })}
        </Box>
        <Typography className="selected-country">
          {selectedCountry.name}
        </Typography>
        <ContactCard
          url={Email}
          description={selectedCountry.office.email}
          title={"Mail Us"}
        />
        <ContactCard
          url={Phone}
          description={selectedCountry.office.phone}
          title={"For Inquiry"}
        />
        <ContactCard
          url={Location}
          description={selectedCountry.office.address}
          title={"Address"}
        />
      </Box>
      <Box className="right-container">
        <GlobeAnimation selectedCountry={selectedCountry} />
      </Box>
    </Box>
  );
};

export default ContactUs;
