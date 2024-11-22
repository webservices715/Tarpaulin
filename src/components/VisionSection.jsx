import React from "react";

const VisionSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-blue-200 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black-600 mb-6">
          Our Vision
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Being the best covering/packaging and security service provider to
          our clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="pi pi-user"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Best Employer
          </h3>
          <p className="text-gray-600">
            Being the best company our employees have ever worked with.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <div className="text-green-500 text-4xl mb-4">
            <i className="pi pi-refresh"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Continuous Improvement
          </h3>
          <p className="text-gray-600">
            Continuously improving on all aspects of our business.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <div className="text-yellow-500 text-4xl mb-4">
            <i className="pi pi-shield"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Customer Security
          </h3>
          <p className="text-gray-600">
            Securing our customer’s tomorrow, today, by providing ethical,
            efficient, and value-added services.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <div className="text-red-500 text-4xl mb-4">
            <i className="pi pi-star"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Brand Credibility
          </h3>
          <p className="text-gray-600">
            Strengthening our brand credibility and enhancing customer
            satisfaction levels.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <div className="text-indigo-500 text-4xl mb-4">
            <i className="pi pi-search"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Quality Management
          </h3>
          <p className="text-gray-600">
            Committed to improving Quality Management Systems through
            continuous monitoring and reviews.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
          <div className="text-teal-500 text-4xl mb-4">
            <i className="pi pi-heart"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Client Satisfaction
          </h3>
          <p className="text-gray-600">
            Rendering the best services to the utmost satisfaction of our
            clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
