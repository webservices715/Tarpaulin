import AboutUs from "../components/Aboutus";
import DeliveryServices from "../components/DeliveryServices";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutUs/>
            <DeliveryServices />
        </div>
    )   
};

export default HomePage;