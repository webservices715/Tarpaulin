import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Truck = () => {
  const sliderImages = [
    'https://uispl.in/wp-content/uploads/2022/12/t11.jpg',
    'https://uispl.in/wp-content/uploads/2022/12/t12.jpg',
    'https://uispl.in/wp-content/uploads/2022/12/t1.jpg',
    'https://uispl.in/wp-content/uploads/2022/12/t2.jpg',
    'https://uispl.in/wp-content/uploads/2022/12/t4.jpg',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < sliderImages.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Truck / Container / Wagon Sealing
        </h1>

        {/* Content */}
        <div className="text-gray-700 text-lg space-y-4 leading-7">
          <p>
            Sealing is the ultimate process to put a check against pilferage /
            theft of cargo and tampering or unauthorized opening of packed
            trucks. It will be almost impossible to open the door of a truck /
            container or to open the covering tarpaulin of a truck without
            tampering / breaking or mutilating the seal. Generally, a security
            seal is used to prevent theft of cargo from Truck, Container, etc.
          </p>
          <p>
            We are engaged in providing professional, specialized services for
            the Truck / Container / Wagon sealing from all loading points from
            Ports and mines area to the plants of the customer.
          </p>
          <p>
            All the trucks / containers are properly sealed with double clock
            wire / plastic strip seals having logo and unique identification
            numbering by our professionals, and the proper documents according
            to Truck Number & Seal Number are provided to the customer
            regularly.
          </p>
        </div>

        {/* Image Slider */}
        <div className="mt-12 relative">
          
          <div className="relative flex items-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className={`absolute md:left-[-30px] left-[-10px] z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>

            {/* Images */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {sliderImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-none w-full sm:w-1/3 px-2"
                    style={{ flex: "0 0 auto" }}
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className={`absolute md:right-[-30px] right-[-10px] z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 ${
                currentIndex === sliderImages.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentIndex === sliderImages.length - 1}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Truck;
