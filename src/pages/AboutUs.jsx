import React from "react";
import AboutComp from "../components/AboutComp";
import Breadcrumb from "../components/Breadcrumb";
import TeamSection from "../components/TeamSection";
import ReservationSection from "../components/ReservationSection";
import OurMission from "../components/OurMission";
import TestimonialSection from "../components/TestimonialSection";

function AboutUs() {
  return (
    <div>
      <Breadcrumb />
      <AboutComp />
      <div className="lg:mt-[52rem]">
        <TeamSection />
      </div>
    <OurMission />
      <ReservationSection />
      <TestimonialSection />
    </div>
  );
}

export default AboutUs;
