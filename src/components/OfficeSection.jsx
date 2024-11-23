import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";

const OfficeSection = () => {
  const [showMoreCities, setShowMoreCities] = useState(false);

  const toggleCities = () => {
    setShowMoreCities(!showMoreCities);
  };

  return (
    <section className="bg-gray-50">
      <div className="p-8 mx-auto my-16 max-w-6xl">
        <h2 className="section-title text-4xl font-bold text-gray-800 border-b-4 border-gray-200 pb-4 mb-8 text-center">
          Office Locations
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section: Office List */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Offices
            </h3>
            <div className="office-list space-y-4">
              <div className="office-item flex items-start gap-4 bg-white p-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
                <MdLocationPin size={30} className="text-purple-700 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Head Office -  Chattisgarh
                  </h4>
                  <p className="text-gray-600">
                  SATYAKARTA SERVICES INDIA PRIVATE LIMITED C/o Vikash Kumar
                Pancholi, R- II Semariyaghat, Bhatapara, Bhatapara, Raipur-
                493118, Chattisgarh
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Section: Map */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Map</h3>
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Kolkata Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.27337462716!2d81.95497727581298!3d21.738619578726727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28615c54b848dd%3A0x8d577f28004e851e!2sBhatapara%2C%20Chhattisgarh%20493118!5e0!3m2!1sen!2sin!4v1732296684322!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
