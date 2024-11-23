import React from 'react';
import { NavLink } from 'react-router-dom';
import service01 from '../assets/service01.jpeg';

const MapSection = () => {
  return (
    <div className="relative flex items-center justify-center h-[80vh] px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${service01})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="text-center text-white z-10">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-5xl">Global Freight Solutions</h1>
        <p className="mt-4 text-xl">
          Reliable, efficient, and customer-focused logistics services tailored to meet your unique needs.
        </p>
        <button className="px-6 py-3 mt-8 font-semibold text-black bg-white hover:bg-purple-600 hover:text-white transition-all ease-in-out duration-300 ">
          <NavLink to={"/about"} >
          LEARN MORE

          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default MapSection;
