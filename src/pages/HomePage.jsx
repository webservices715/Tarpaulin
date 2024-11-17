import AboutUs from "../components/Aboutus";
import DeliveryServices from "../components/DeliveryServices";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import OfficeSection from "../components/OfficeSection";
import ReservationSection from "../components/ReservationSection";
import WhyChooseUsSection from "../components/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <div className="lg:mt-[50rem]">
        <DeliveryServices />
      </div>
      <MapSection />
      <OfficeSection />
      <WhyChooseUsSection />
      <ReservationSection />
      <Footer />
    </div>
  );
};

export default HomePage;
