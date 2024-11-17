import AboutUs from "../components/Aboutus";
import DeliveryServices from "../components/DeliveryServices";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutUs/>
            <DeliveryServices />
            <MapSection/>
        </div>
    )   
};

export default HomePage;