import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import DeliveryServices from "../components/DeliveryServices";
import MapSection from "../components/MapSection";
import OurClients from "../components/OurClients";

const Service = () => {
    return (
        <div>
           <Breadcrumb title="Services"/>
           <DeliveryServices/>
           <Card/>
           <MapSection/>
           <OurClients/>
        </div>
    )
};

export default Service;

