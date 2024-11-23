import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import service59 from "../assets/services/service59.jpg";
import service60 from "../assets/services/service60.jpg";
const TruckSealing = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-zinc-800 mb-8 text-center">
          Floor Cleaning & Repairing:
        </h1>

        {/* Content */}
        <div className="text-gray-700 text-lg space-y-6 leading-8 mb-12">
          <p>
            We provide number of active labours to clean the wagon before
            loading under efficient supervision to prevent mixing up unwanted
            rubbish or scrap materials. Being the leading name in the industry,
            we provide our clients highly reliable services of railway wagon
            cleaning service that are acclaimed among the clients for their
            optimum performance and effectiveness.
          </p>
          <p>
            Our services are well executed and we also assure delivery of our
            services with in the committed time period. Floor Damage is one of
            most common issue with the rakes. Being the leading name in the
            field we provide highly reliable services of floor covering to our
            clients.
          </p>
          <p>
            Our services are well executed and we also assure optimum
            performance. We provide number of active labours for repairing the
            damaged floor.
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative">
          <div className="relative flex items-center">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500"
              >
                  <div
                    className="flex gap-40 py-12 justify-between w-full sm:w-1/2 lg:w-full px-4"
                    style={{ flex: "0 0 auto" }}
                  >
                    <img
                      src={service59}
                      alt={'image'}
                      className="w-full h-96 object-cover rounded-xl shadow-lg"
                    />
                    <img
                      src={service60}
                      alt={`image`}
                      className="w-full h-96 object-cover rounded-xl shadow-lg"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckSealing;
