import React, { useState } from 'react';

const Gallery = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const images = [
    'https://uispl.in/wp-content/uploads/2022/06/Picture-1-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Picture-2-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Picture-3-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Picture-4-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Picture-5-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Picture-6-1-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Picture-7-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-1-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-2-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-3-1-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-4-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-5-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-6-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-7-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-8-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-9-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-10-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-11-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-12-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-13-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-15-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Wgn-Cov-17-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/HDCG-Pic-1.-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/HDCG-Pic-2-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Plot-covering-by-Bumboo-1-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Plot-covering-by-Bumboo-2-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Plot-Cov-1-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/Plot-Cov-2-300x300.jpg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-5.08.48-PM-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-5.08.49-PM-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-5.08.50-PM-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.36-PM-1-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.37-PM-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.37-PM-2-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.37-PM-1-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.41-PM-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.42-PM-1-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.43-PM-2-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.43-PM-1-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.43-PM-2-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.47-PM-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.46-PM-2-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.45-PM-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.46-PM-1-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.45-PM-2-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.45-PM-1-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.44-PM-300x300.jpeg',
    'https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.41-PM-300x300.jpeg',
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
