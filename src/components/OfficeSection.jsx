import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";

const OfficeSection = () => {
  const [showMoreCities, setShowMoreCities] = useState(false);

  const toggleCities = () => {
    setShowMoreCities(!showMoreCities);
  };

  return (
    <section className="office-section bg-white p-8 rounded-lg  mx-auto my-16 max-w-7xl">
      <h2 className="section-title text-5xl font-bold text-gray-800 border-b-4 border-gray-200 pb-4 mb-8 ">
        Head Office
      </h2>

      <div className="office-box flex flex-row-reverse max-w-4xl justify-between p-6 bg-white rounded-lg shadow-lg border-b-4 border-purple-700 border-l-4 mb-6 transition-transform duration-200 hover:transform hover:translate-y-[-5px] hover:shadow-md">
        <div className="office-image">
          <img
            src="https://content3.jdmagicbox.com/v2/comp/delhi/40/011p61240/catalogue/dlf-ltd-corporate-office-connaught-place-delhi-builders-1d39dep.jpg"
            alt="DLF Head Office Image"
            className="w-[94%] h-[260px] object-cover rounded-md shadow-md"
          />
        </div>
        <div className="office-details p-5">
          <h3 className="text-3xl text-gray-800 mb-2">Head Office</h3>
          <p className="office-location text-xl text-purple-900 font-semibold flex items-center gap-2 mb-3">
            <MdLocationPin size={40} /> Kolkata
          </p>
          <p className="office-address text-lg text-gray-600 leading-relaxed mb-4">
            5, Clive Row (Dr. Rajendra Prasad Sarani), Room No. 8JA, 8th Floor,
            Kolkata-700001, WB, India.
          </p>
        </div>
      </div>

      <div className="office-city">
        <h3 className="text-2xl font-bold text-gray-800 text-center my-10 py-4 border-b-4 border-gray-200">
          Our Offices Located At
        </h3>
        <div className="city-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* City details - always visible */}
          <div className="city-details bg-white p-4 rounded-lg shadow-lg border-b-4 border-purple-700 mb-4 transition-transform duration-200 hover:scale-105">
            <h4 className="text-lg font-semibold text-gray-800 mb-2 px-3">
              Noida
            </h4>
            <p className="city-address text-gray-600 text-base flex items-center gap-3 px-3">
              <MdLocationPin size={20} /> Uttar Pradesh, India
            </p>
          </div>

          <div className="city-details bg-white p-4 rounded-lg shadow-lg border-b-4 border-purple-700 mb-4 transition-transform duration-200 hover:scale-105">
            <h4 className="text-lg font-semibold text-gray-800 mb-2 px-3">
              Chennai
            </h4>
            <p className="city-address text-gray-600 text-base flex items-center gap-3 px-3">
              <MdLocationPin size={20} /> Tamil Nadu, India
            </p>
          </div>

          {/* More Cities - Initially hidden */}
          {showMoreCities && (
            <>
              {[
                { name: "Kolkata", state: "West Bengal", country: "India" },
                { name: "Haldia", state: "West Bengal", country: "India" },
                { name: "Raniganj", state: "West Bengal", country: "India" },
                { name: "Durgapur", state: "West Bengal", country: "India" },
                { name: "Dhanbad", state: "Jharkhand", country: "India" },
                {
                  name: "Visakhapatnam",
                  state: "Andhra Pradesh",
                  country: "India",
                },
                {
                  name: "Gangavaram",
                  state: "Andhra Pradesh",
                  country: "India",
                },
                { name: "Kakinada", state: "Andhra Pradesh", country: "India" },
                { name: "Paradeep", state: "Odisha", country: "India" },
                { name: "Jajpur", state: "Odisha", country: "India" },
                { name: "Barbil", state: "Odisha", country: "India" },
                { name: "Sambalpur", state: "Odisha", country: "India" },
                { name: "Jharsugda", state: "Odisha", country: "India" },
                { name: "Gandhidham", state: "Gujarat", country: "India" },
                { name: "Raipur", state: "Chhattisgarh", country: "India" },
                { name: "Raigarh", state: "Chhattisgarh", country: "India" },
                { name: "Korba", state: "Chhattisgarh", country: "India" },
                { name: "Bhatapara", state: "Chhattisgarh", country: "India" },
                { name: "Katni", state: "Madhya Pradesh", country: "India" },
                { name: "Satna", state: "Madhya Pradesh", country: "India" },
                {
                  name: "Singrauli",
                  state: "Madhya Pradesh",
                  country: "India",
                },
              ].map((city, index) => (
                <div
                  key={index}
                  className="city-details bg-white p-4 rounded-lg shadow-lg border-b-4 border-purple-700 mb-4 transition-transform duration-200 hover:scale-105"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 px-3">
                    {city.name}
                  </h4>
                  <p className="city-address text-gray-600 text-base flex items-center gap-3 px-3">
                    <MdLocationPin size={20} /> {city.state}, {city.country}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Toggle Link */}
        <div className="text-center mt-6">
          <button
            onClick={toggleCities}
            className="more-link text-lg font-bold text-purple-700 hover:text-purple-600 focus:outline-none"
          >
            {showMoreCities ? "Show Less Offices" : "More Offices"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
