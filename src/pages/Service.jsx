import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import MapSection from "../components/MapSection";
import OurClients from "../components/OurClients";
import SealingSection from "../components/SealingSection";
import Truck from "../components/Truck";
import TruckSealing from "../components/TruckSealing";
import React, { useEffect } from "react";


const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []); 
    return (
        <div>
           <Breadcrumb title="Services"/>
           {/* <DeliveryServices/> */}
           <Card/>
           <SealingSection />
           <Truck />
           <TruckSealing />
           <MapSection/>
           <OurClients/>
        </div>
    )
};

export default Service;

