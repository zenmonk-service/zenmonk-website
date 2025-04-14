import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Title from '@/shared/title'
import { projects } from './project-list'
import Image from 'next/image'
import './mobile.scss';
import './styles.scss';

import Ourwork1 from "./assets/ourwork1.png";
import Ourwork2 from "./assets/ourwork2.png";
import Ourwork3 from "./assets/ourwork3.png";
import Ourwork4 from "./assets/ourwork4.png";
import { SectionTitle } from '@/shared/typography'


const OurWorkMobileSection = () => {


  return (
    <Box className="our-mobile-work-section">
      <SectionTitle
        text="Our latest project's resounding success"
        align="center"
        markText='success'
        className="title"
      />
      <div className="our-work-mobile mobile-section">
      
        <div className="image-wrapper-container-section">
          <OurWorkImages
            img={Ourwork2}
            count={"01"}
            heading={"Ecommerce"}
            subheading={"We build online stores that drive sales, customer loyalty, and measurable growth."}
          />

          <OurWorkImages
            img={Ourwork3}
            count={"02"}
            heading={"Learning Management"}
            subheading={"We develop LMS platforms that enhance learning experiences and improve outcomes."}
          />
          <OurWorkImages
            img={Ourwork4}
            count={"03"}
            heading={"Food Delivery"}
            subheading={"We create delivery apps that streamline orders, optimize routes, and boost efficiency."}
          />
          <OurWorkImages
            img={Ourwork1}
            count={"04"}
            heading={"Medical App"}
            subheading={"We design healthcare apps that improve patient care, accessibility, and wellness."}
          />
        </div>
      </div>
    </Box>
  )
}


function OurWorkImages({ img, count, heading, subheading }: any) {
    return (
      <div className="image-wrapper-container">
        <div className="image-wrapper">
          <Image
            // style={{ width: "100%", height: "auto" }}
            className="our-work-image"
            src={img}
            alt={""}
          ></Image>
  
          <p className="image-number">{count}</p>
        </div>
  
        <div className="details">
          <p className="heading">{heading}</p>
          <p className="subheading">{subheading}</p>
        </div>
      </div>
    );
  }

export { OurWorkMobileSection }
