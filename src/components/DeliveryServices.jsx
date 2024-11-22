import React from "react";
import {
  MdOutlineAssignment,
  MdOutlineCheckCircle,
  MdOutlineRocketLaunch,
  MdOutlineInventory,
} from "react-icons/md";

const DeliveryServices = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center min-h-screen px-4 lg:px-20 py-40 bg-gray-50">
      {/* Left Side */}
      <div className="max-w-lg text-left">
        <h1 className="text-3xl lg:font-bold lg:text-5xl text-[#6345fe]  lg:text-left">
          What We Do
        </h1>
        {/* <h2 className="text-2xl lg:text-5xl text-[#6345fe] mt-2  lg:text-left">
          Delivery Services
        </h2> */}
        <p className="text-gray-600 mt-4 leading-loose text-sm sm:text-base">
          Satyakarta developed a strong,
          dedicated team to offer few special services in the sector of Rake /
          Plot covering and Escorting services for the transportation of Coal
          and all other mineral products.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          From the last two decades we are successfully offering the folowing
          services:
        </p>
        <div className="flex lg:justify-start">
          <button className="mt-6 bg-purple-100 text-purple-600 font-medium px-6 py-3 rounded shadow hover:bg-purple-200">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full lg:w-[50%] gap-12 mt-12 lg:mt-0 lg:ml-16  lg:text-left">
        <div className="flex flex-col lg:items-start shadow bg-white hover:shadow-xl hover:scale-y-105 transition-all duration-300 cursor-pointer py-3 px-5">
          <MdOutlineAssignment className="text-purple-600 " size={50} />
          <h3 className="text-2xl font-bold my-4">Tarpaulin Covering</h3>
          <p className="text-gray-600 mt-2 w-[90%]">
            We cover entire rake with Tarpaulins (with different quality & size
            as per customer requirement) for safety of material from pilferage
            as well as rain.
          </p>
        </div>

        <div className="flex flex-col lg:items-start shadow bg-white hover:shadow-xl hover:scale-y-105 transition-all duration-300 cursor-pointer py-3 px-5">
          <MdOutlineCheckCircle className="text-purple-600 " size={50} />
          <h3 className="text-2xl font-bold my-4">Plot Covering</h3>
          <p className="text-gray-600 mt-2 w-[90%]">
            We cover entire plot where cargo is stocked with Tarpaulins (with
            100% waterproof tarpaulin as per stock quantity & size) for safety
            of material from pilferage as well as rain.
          </p>
        </div>

        <div className="flex flex-col lg:items-start shadow bg-white hover:shadow-xl hover:scale-y-105 transition-all duration-300 cursor-pointer py-3 px-5">
          <MdOutlineRocketLaunch className="text-purple-600 " size={50} />
          <h3 className="text-2xl font-bold my-4">Escorting Service</h3>
          <p className="text-gray-600 mt-2 w-[90%]">
            We offer trained escorts for safe transit at nominal costs,
            providing updates on the location via SMS to help you coordinate
            efficiently.
          </p>
        </div>

        <div className="flex flex-col lg:items-start shadow bg-white hover:shadow-xl hover:scale-y-105 transition-all duration-300 cursor-pointer py-3 px-5">
          <MdOutlineInventory className="text-purple-600 " size={50} />
          <h3 className="text-2xl font-bold my-4">
            Excess Load Adjustment Services
          </h3>
          <p className="text-gray-600 mt-2 w-[90%]">
            We arrange adjustment of loaded material from the wagon in case of
            excess load according to Railway’s norm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryServices;
