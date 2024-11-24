import React from "react";
import service03 from "../assets/services/service03.jpg";
import service01 from "../assets/services/service01.jpeg";
import service02 from "../assets/services/service02.jpg";
import service04 from "../assets/services/service04.jpeg";
import service05 from "../assets/services/service05.jpeg";
import service06 from "../assets/services/service06.jpeg";
import service07 from "../assets/services/service04.jpeg";
import service08 from "../assets/services/service06.jpeg"; 

const CardService = ({ title, description, image }) => (
  <div className="w-[25rem] h-[38rem] bg-gradient-to-r from-white to-gray-50 shadow-xl rounded-lg overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
    {/* Image Section */}
    {image && (
      <div className="h-[55%] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
    )}
    {/* Content Section */}
    <div className="p-6 flex flex-col flex-1">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4 flex-grow text-justify">
        {description}
      </p>
    </div>
  </div>
);

const Card = () => {
  const services = [
    {
      title: "Tarpaulin Covering",
      description:
        "We cover entire rake with Tarpaulins (with different quality & size as per customer requirement) for safety of material from pilferage as well as rain.",
      image: service01,
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
    {
      title: "Pan India Service Provider",
      description:
        "We are a PAN India service provider for Plot Cover, Tarpaulin Cover, Railway Wagon Cover, Escort services, and other plastic items, ensuring reliable and efficient solutions tailored to your needs.",
      image: service07, // Replace with actual image or remove if not available
    },
    {
      title: "Other Plastic Items",
      description:
        "We provide a range of plastic items for industrial and logistical needs, ensuring durable and high-quality materials for various applications.",
      image: service08, // Replace with actual image or remove if not available
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Our Services
        </h1>
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8">
          Satyakarta developed a strong, dedicated team to offer special services in
          the sector of Rake/Plot covering and Escorting services for the
          transportation of Coal and all other mineral products. Here are the
          services we provide:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <CardService
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
