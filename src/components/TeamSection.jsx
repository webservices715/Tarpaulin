import React from "react";
import director01 from "../assets/director01.jpeg";
import director02 from "../assets/director02.jpeg";
const TeamSection = () => {
  return (
    <section className="team-section bg-gray-50 py-24 text-center">
      <h2 className="text-2xl font-bold mb-10 text-gray-800">
        DIRECTORS
      </h2>
      <div className="team-container flex flex-col gap-8 items-center justify-center md:flex-row">
        {/* Profile Card 1 */}
        <div className="profile-card bg-white rounded shadow-md p-6 w-72 text-center hover:-translate-y-2 transition-transform duration-300 relative">
          <div className="before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-lg before:border-4 before:border-transparent before:transition-all before:z-1 hover:before:border-image hover:before:border-image-source hover:before:border-image-slice[1]"></div>
          <img
            src={director01}
            alt="Vikash Pancholi"
            className="w-24 h-24 rounded-full shadow-md mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">VIKASH PANCHOLI</h3>
          <p className="title text-sm text-gray-600 my-2">DIRECTOR</p>
          <p className="description text-sm text-gray-700">
           
          </p>
        </div>

        {/* Profile Card 2 */}
        <div className="profile-card bg-white rounded shadow-md p-6 w-72 text-center hover:-translate-y-2 transition-transform duration-300 relative">
          <img
            src={director02}
            alt="Siddhi Pancholi"
            className="w-24 h-24 rounded-full shadow-md mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">SIDDHI PANCHOLI</h3>
          <p className="title text-sm text-gray-600 my-2">DIRECTOR</p>
          <p className="description text-sm text-gray-700">

          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
