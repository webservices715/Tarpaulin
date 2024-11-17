import AboutUs from "../components/Aboutus";
import DeliveryServices from "../components/DeliveryServices";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <div className="lg:mt-[50rem]">
        <DeliveryServices />
      </div>
    </div>
  );
};

export default HomePage;
