import React from "react";

function OurMission() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-blue-50 py-24 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-12">
          At <span className="text-blue-500 font-semibold">Our Company</span>,
          we understand the requirements of the customer, fulfill statutory
          regulation, strict & comprehensive training to human resource, quality
          improvement being a continuous process, 24 hours room, efficient CRM,
          business solutions as per customer need and all these at the lowest
          possible rates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 transform hover:-translate-y-2">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Selection of Manpower
          </h3>
          <p className="text-gray-600 text-justify">
            Manpower is considered the foundation of successful operating
            efficiency; the choice of staff is highly significant. In regard to
            staffing, we select candidates by education, age, fitness tests and
            criminal history to ensure that we get the most competent
            individuals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 transform hover:-translate-y-2">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 13h-6V3H9v10H3l9 9 9-9z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Training</h3>
          <p className="text-gray-600 text-justify">
            Training is an essential factor which enables the employees to
            acquire skills to enable them do their work effectively. All staff
            complete fair and detailed training sessions that will enable them
            to develop the right skills in handling different types of products
            like coal, pet coke, gypsum, clinker, iron ore, limestone and fly
            ash.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 transform hover:-translate-y-2">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 16a8 8 0 0 1 16 0z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Supervision</h3>
          <p className="text-gray-600 text-justify">
            Quality service depends much on supervision. Part of our incast
            compliance, we have a separate Control Room to ensure quality and a
            pool of supervisors that keeps on checking the completed assignments
            and supervising the service personnel to maintain standards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
