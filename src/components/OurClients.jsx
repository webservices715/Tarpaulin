import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const clients = [
  {
    name: "Client One",
    logo: "https://via.placeholder.com/100",
    description: "Leading company in tech solutions.",
  },
  {
    name: "Client Two",
    logo: "https://via.placeholder.com/100",
    description: "Specialized in sustainable products.",
  },
  {
    name: "Client Three",
    logo: "https://via.placeholder.com/100",
    description: "Top-rated service provider worldwide.",
  },
];

const OurClients = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-2xl font-bold text-gray-800 my-6">
        Our Clients
      </h2>

      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex-none w-full px-4 py-8 bg-white shadow-md rounded-lg"
          >
            <div className="text-center">
              <img
                src={client.logo}
                alt={client.name}
                className="mx-auto w-32 h-32 object-contain"
              />
              <h3 className="mt-4 text-lg font-semibold">{client.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{client.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default OurClients;
