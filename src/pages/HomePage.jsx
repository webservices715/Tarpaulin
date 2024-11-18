import DeliveryServices from "../components/DeliveryServices";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import OfficeSection from "../components/OfficeSection";
import ReservationSection from "../components/ReservationSection";
import WhyChooseUsSection from "../components/WhyChooseUs";
import OurClients from "../components/OurClients";
import AboutComp from "../components/AboutComp";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutComp />
      <div className="lg:mt-[50rem]">
        <DeliveryServices />
      </div>
      <MapSection />
      <OfficeSection />
      <WhyChooseUsSection />
      <ReservationSection />
      <OurClients />
    </div>
  );
};

export default HomePage;
