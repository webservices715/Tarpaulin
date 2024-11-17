import React from 'react';
import truckImg from '../assets/truck.jpg';
const MapSection = () => {
  return (
    <div className=" flex items-center justify-center h-[80vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `rgba(0, 0, 0, 0.5) ,url(${truckImg})` }}>
      <div className=" text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-4xl">International Truck Freight</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="px-6 py-3 mt-8 font-semibold text-black bg-white  hover:bg-purple-600 hover:text-white">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default MapSection;
