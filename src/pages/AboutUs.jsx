import React, { useEffect } from "react";
import AboutComp from "../components/AboutComp";
import Breadcrumb from "../components/Breadcrumb";
import TeamSection from "../components/TeamSection";
import ReservationSection from "../components/ReservationSection";
import OurMission from "../components/OurMission";
import TestimonialSection from "../components/TestimonialSection";
import VisionSection from "../components/VisionSection";


function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 
  return (
    <div>
      <Breadcrumb title="About Us" />
      <AboutComp />
      <div className="lg:mt-[52rem]">
        <TeamSection />
      </div>
      <OurMission />
      <VisionSection />
      <ReservationSection />
      {/* <TestimonialSection /> */}
    </div>
  );
}

export default AboutUs;
