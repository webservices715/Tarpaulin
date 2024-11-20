import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import MapSection from "../components/MapSection";
import OurClients from "../components/OurClients";
import SealingSection from "../components/SealingSection";
import Truck from "../components/Truck";

const Service = () => {
    return (
        <div>
           <Breadcrumb title="Services"/>
           {/* <DeliveryServices/> */}
           <Card/>
           <SealingSection />
           <Truck />
           <MapSection/>
           <OurClients/>
        </div>
    )
};

export default Service;

