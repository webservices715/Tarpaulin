import React from 'react';
import { FaUsers, FaTools, FaHeadset } from 'react-icons/fa'; // Importing React Icons

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white text-center py-16 px-4">
      {/* Why Choose Us Section */}
      <section className=" px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#6345fe] mb-6">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Highly Skilled Team */}
          <div className="text-center md:text-left max-w-[350px] bg-white p-6 rounded-lg ">
            <FaUsers className="text-4xl text-[#6345fe] mb-4 mx-1" /> {/* Icon */}
            <h3 className="text-xl font-bold mb-4">Highly Skilled Team</h3>
            <p className="text-gray-500">
              We are ready to provide a highly skilled team for your service that has been developed since two decades.
            </p>
          </div>

          {/* Strong Expertise */}
          <div className="text-center md:text-left max-w-[350px] bg-white p-6 rounded-lg ">
            <FaTools className="text-4xl text-[#6345fe] mb-4 mx-1" /> {/* Icon */}
            <h3 className="text-xl font-bold mb-4">Strong Expertise</h3>
            <p className="text-gray-500">
              We have successfully completed over 300 jobs till date with almost all the reputed clients.
            </p>
          </div>

          {/* Dedicated Support */}
          <div className="text-center md:text-left max-w-[350px] bg-white p-6 rounded-lg ">
            <FaHeadset className="text-4xl text-[#6345fe] mb-4 mx-1" /> {/* Icon */}
            <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
            <p className="text-gray-500">
              You can avail the facility of our 24x7 basis support system to clarify any doubts regarding our service and your job.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyChooseUsSection;
