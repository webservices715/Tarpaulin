import Breadcrumb from "../components/Breadcrumb";
import DeliveryServices from "../components/DeliveryServices";
import MapSection from "../components/MapSection";
import OurClients from "../components/OurClients";

const Service = () => {
    return (
        <div>
           <Breadcrumb title="Services"/>
           <DeliveryServices/>
           <MapSection/>
           <OurClients/>
        </div>
    )
};

export default Service;

