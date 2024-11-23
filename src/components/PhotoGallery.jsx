import React, { useState } from 'react';
import service10 from '../assets/services/service10.jpg';
import service11 from '../assets/services/service11.jpg';
import service12 from '../assets/services/service12.jpg';
import service13 from '../assets/services/service13.jpg';
import service14 from '../assets/services/service14.jpg';
import service15 from '../assets/services/service15.jpg';
import service16 from '../assets/services/service16.jpg';
import service17 from '../assets/services/service17.jpg';
import service18 from '../assets/services/service18.jpg';
import service19 from '../assets/services/service19.jpg';
import service20 from '../assets/services/service20.jpg';
import service21 from '../assets/services/service21.jpg';
import service22 from '../assets/services/service22.jpg';
import service23 from '../assets/services/service23.jpg';
import service24 from '../assets/services/service24.jpg';
import service25 from '../assets/services/service25.jpg';
import service26 from '../assets/services/service26.jpg';
import service27 from '../assets/services/service27.jpg';
import service28 from '../assets/services/service28.jpg';
import service29 from '../assets/services/service29.jpg';
import service30 from '../assets/services/service30.jpg';
import service31 from '../assets/services/service31.jpg';
import service32 from '../assets/services/service32.jpg';
import service33 from '../assets/services/service33.jpg';
import service34 from '../assets/services/service34.jpg';
import service35 from '../assets/services/service35.jpg';
import service36 from '../assets/services/service36.jpg';
import service37 from '../assets/services/service37.jpg';
import service38 from '../assets/services/service38.jpg';
import service39 from '../assets/services/service39.jpeg';
import service40 from '../assets/services/service40.jpeg';
import service41 from '../assets/services/service41.jpeg';
import service42 from '../assets/services/service42.jpeg';
import service43 from '../assets/services/service43.jpg';

const Gallery = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const images = [
    service10,
    service11,
    service12,
    service13,
    service14,
    service15,
    service16,
    service17,
    service18,
    service19,
    service20,
    service21,
    service22,
    service23,
    service24,
    service25,
    service26,
    service27,
    service28,
    service29,
    service30,
    service31,
    service32,
    service33,
    service34,
    service35,
    service36,
    service37,
    service38,
    service39,
    service40,
    service41,
    service42,
    service43
  ];

  // Open fullscreen mode
  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setFullscreen(true);
  };

  // Close fullscreen mode
  const closeFullscreen = () => setFullscreen(false);

  // Navigate to the next image
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  // Navigate to the previous image
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="container mx-auto md:px-16 px-4 py-12">
      {/* Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative cursor-pointer "
            onClick={() => openFullscreen(index)}
          >
            <img
              src={img}
              alt={`Gallery Image ${index}`}
              className="rounded-lg w-[400px] hover:opacity-80 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-red-500"
            onClick={closeFullscreen}
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-400"
            onClick={prevImage}
          >
            &#10094;
          </button>

          {/* Current Image */}
          <img
            src={images[currentIndex]}
            alt={`Fullscreen ${currentIndex}`}
            className="w-[500px] max-h-full rounded-lg"
          />

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-400"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
