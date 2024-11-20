import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SealingSection = () => {
  const sliderImages = [
    "https://uispl.in/wp-content/uploads/2022/12/2.jpg",
    "https://uispl.in/wp-content/uploads/2022/12/3.jpg",
    "https://uispl.in/wp-content/uploads/2022/12/4.jpg",
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
    <div className="bg-gray-100 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Wagon Door Packing / Sealing & Waterproofing
        </h1>

        {/* Content */}
        <div className="text-gray-700 text-lg space-y-4 leading-7">
          <p>
            We do install wooden pegs & wire binding in all doors of the wagons
            before loading at sidings under our efficient supervisors with the
            active labour group to prevent any spillage of precious materials of
            our honourable customers.
          </p>
          <p>
            Wooden pegs and wire binding prevent the doors of wagons from
            opening due to heavy vibrations during the movement of the rake.
          </p>
          <p>
            With the newly introduced BCN HL Wagon having higher storage
            capacity, after closing the door, some gaps and holes still get left
            indoors. Our teams specialize in sealing these doors so that the
            wagon becomes airtight and prevents damage to valuable materials by
            humidity.
          </p>
          <p>
            We excel at sealing doors using modern and high-tech processes with
            the best sealing and waterproofing materials that maintain the value
            of the loaded commodity.
          </p>
        </div>

        {/* Image Slider */}
        <div className="mt-12 relative">
          
          <div className="relative flex items-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className={`absolute md:eft-[-30px] left-[-12px] z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 ${
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
                  transform: `translateX(-${
                    currentIndex * (window.innerWidth < 640 ? 100 : 33.33)
                  }%)`,
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
                      className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className={`absolute md:right-[-30px] right-[-12px] z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 ${
                currentIndex === sliderImages.length - (window.innerWidth < 640 ? 1 : 3)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={
                currentIndex ===
                sliderImages.length - (window.innerWidth < 640 ? 1 : 3)
              }
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SealingSection;
