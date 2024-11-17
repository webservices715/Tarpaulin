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
                    Head Office - Kolkata
                  </h4>
                  <p className="text-gray-600">
                    5, Clive Row (Dr. Rajendra Prasad Sarani), Room No. 8JA, 8th
                    Floor, Kolkata-700001, WB, India.
                  </p>
                </div>
              </div>

              {/* Always visible offices */}
              <div className="office-item flex items-start gap-4 bg-white p-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
                <MdLocationPin size={30} className="text-purple-700 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Noida</h4>
                  <p className="text-gray-600">Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="office-item flex items-start gap-4 bg-white p-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
                <MdLocationPin size={30} className="text-purple-700 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Chennai
                  </h4>
                  <p className="text-gray-600">Tamil Nadu, India</p>
                </div>
              </div>

              {/* More Cities - Initially hidden */}
              {showMoreCities &&
                [
                  { name: "Haldia", state: "West Bengal", country: "India" },
                  { name: "Raniganj", state: "West Bengal", country: "India" },
                  { name: "Durgapur", state: "West Bengal", country: "India" },
                  { name: "Dhanbad", state: "Jharkhand", country: "India" },
                  {
                    name: "Visakhapatnam",
                    state: "Andhra Pradesh",
                    country: "India",
                  },
                ].map((city, index) => (
                  <div
                    key={index}
                    className="office-item flex items-start gap-4 bg-white p-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
                  >
                    <MdLocationPin size={30} className="text-purple-700 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {city.name}
                      </h4>
                      <p className="text-gray-600">
                        {city.state}, {city.country}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Toggle Button */}
            <div className="text-center mt-6">
              <button
                onClick={toggleCities}
                className="text-lg font-bold text-purple-700 hover:text-purple-600 focus:outline-none"
              >
                {showMoreCities ? "Show Less Offices" : "More Offices"}
              </button>
            </div>
          </div>

          {/* Right Section: Map */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Map</h3>
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Kolkata Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1951074012363!2d88.34824367591402!3d22.57358403073808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027713748edb69%3A0x2ec17ed278e221cc!2s5%2C%20Clive%20Row%2C%20Dalhousie%20BBD%20Bag%20East%2C%20B.B.D.%20Bagh%2C%20Kolkata%2C%20West%20Bengal%20700001%2C%20India!5e0!3m2!1sen!2sin!4v1697185477957!5m2!1sen!2sin"
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
