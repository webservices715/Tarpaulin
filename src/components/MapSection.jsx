import React from 'react';
import truckImg from '../assets/truck.jpg';
const MapSection = () => {
  return (
<<<<<<< HEAD
    <div className=" relative flex items-center justify-center h-[80vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${truckImg})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className=" text-center text-white z-10">
=======
    <div className="relative flex items-center justify-center h-[80vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage:` url(${truckImg})` }}>
      <div className=" text-center text-white">
>>>>>>> 93783e2a4578c59e58be2decbbef6989ad962fe1
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