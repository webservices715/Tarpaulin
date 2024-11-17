import React from "react";
import { MdOutlineAssignment, MdOutlineCheckCircle, MdOutlineRocketLaunch, MdOutlineInventory } from "react-icons/md";

const DeliveryServices = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center min-h-screen px-6 lg:px-20 py-12 bg-white">
      {/* Left Side */}
      <div className="max-w-lg text-left">
        <h1 className="text-3xl lg: font-bold text-[#6345fe]  lg:text-left">
          Boxe Best
        </h1>
        <h2 className="text-2xl lg:text-3xl text-[#6345fe] mt-2  lg:text-left">
          Delivery Services
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis is ipsum Lorem.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate dolor in reprehenderit.
        </p>
        <div className="flex lg:justify-start">
          <button className="mt-6 bg-purple-100 text-purple-600 font-medium px-6 py-3 rounded shadow hover:bg-purple-200">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full lg:w-[40%] gap-8 mt-12 lg:mt-0 lg:ml-16  lg:text-left">
        <div className="flex flex-col lg:items-start">
          <MdOutlineAssignment className="text-purple-600 " size={50}/>
          <h3 className="text-lg font-semibold mt-4">Planning</h3>
          <p className="text-gray-600 mt-2 w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="flex flex-col lg:items-start">
          <MdOutlineCheckCircle className="text-purple-600 "  size={50}/>
          <h3 className="text-lg font-semibold mt-4">List Delivery</h3>
          <p className="text-gray-600 mt-2 w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="flex flex-col lg:items-start">
          <MdOutlineRocketLaunch className="text-purple-600 "  size={50}/>
          <h3 className="text-lg font-semibold mt-4">Transport</h3>
          <p className="text-gray-600 mt-2 w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="flex flex-col lg:items-start">
          <MdOutlineInventory className="text-purple-600 "  size={50}/>
          <h3 className="text-lg font-semibold mt-4">Inventory</h3>
          <p className="text-gray-600 mt-2 w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryServices;
