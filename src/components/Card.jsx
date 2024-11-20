import React from "react";
import service03 from '../assets/service03.jpg';
import service01 from '../assets/service01.jpeg';
import service02 from '../assets/service02.jpg';
import service04 from '../assets/service04.jpeg';
import service05 from '../assets/service05.jpeg';
import service06 from '../assets/service06.jpeg';
const CardService = ({ title, description, image }) => (
    <div className="w-[25rem] h-[30rem] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      {/* Image Section */}
      {image && (
        <div className="h-1/2 w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm ">{description}</p>
       
      </div>
    </div>
);

const Card = () => {
    const services = [
        {
          title: "Tarpaulin Covering",
          description:
            "We cover entire rake with Tarpaulins (with different quality & size as per customer requirement) for safety of material from pilferage as well as rain.",
          image: service01
        },
        {
          title: "Plot Covering",
          description:
            "We cover entire plot where cargo is stocked with Tarpaulins (with 100% waterproof tarpaulin as per stock quantity & size) for safety of material from pilferage as well as rain.",
          image: service02, 
        },
        {
          title: "Wagon Door Packing / Sealing & Water Proofing",
          description:
            "We do install wooden pegs & wire binding in all doors of the wagons before loading at sidings under our efficient supervisors with the active labour group to prevent any spillage of precious materials of our honourable customers.",
          image: service03, 
        },
        {
          title: "Escorting Service",
          description:
            "We provide trained escorts to ensure safe transit of the material at nominal costs, which when compared to the losses incurred in the process of transportation could very well be found to be extremely attractive for the users. Our escorting team also provide you status / exact location of rake from time to time through sms which enable you to make arrangement of labor, necessary equipment in schedule time.",
          image: service04,
        },
        {
          title: "Excess Load Adjustment Services",
          description:
            "We arrange adjustment of loaded material from the wagon in case of excess load according to Railway’s norm.",
          image: service05, 
        },
        {
          title: "Inspection Services",
          description:
            "We also arrange services of Rake/Truck Loading Supervision, Sampling / Testing of material and truck/rake sealing by our sister concern M/s. Universal Survey & Analysis Services Pvt. Ltd. All these services will be provided under our supervision.",
          image: service06,
        },
      ];
      

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Services
        </h1>
        <p className="text-gray-700 text-center mb-8">
          UISPL developed a strong, dedicated team to offer special services in
          the sector of Rake/Plot covering and Escorting services for the
          transportation of Coal and all other mineral products. Here are the
          services we provide:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
        {services.map((service, index) => (
          <CardService key={index} title={service.title} description={service.description} image={service.image} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
