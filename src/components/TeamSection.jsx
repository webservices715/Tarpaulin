import React from "react";

const TeamSection = () => {
  return (
    <section className="team-section bg-gray-50 py-24 text-center">
      <h2 className="text-2xl font-bold mb-10 text-gray-800">
        Talented People Behind the Scenes of the Compay
      </h2>
      <div className="team-container flex flex-col gap-8 items-center justify-center md:flex-row">
        {/* Profile Card 1 */}
        <div className="profile-card bg-white rounded shadow-md p-6 w-72 text-center hover:-translate-y-2 transition-transform duration-300 relative">
          <div className="before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-lg before:border-4 before:border-transparent before:transition-all before:z-1 hover:before:border-image hover:before:border-image-source hover:before:border-image-slice[1]">
          </div>
          <img
            src="https://www.squareyards.com/blog/wp-content/uploads/2023/01/Dr.-Kushal-Pal-Singh.jpg"
            alt="Dr. Kushal Pal Singh"
            className="w-24 h-24 rounded-full shadow-md mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Dr. Kushal Pal Singh</h3>
          <p className="title text-sm text-gray-600 my-2">Owner & CEO</p>
          <p className="description text-sm text-gray-700">
            CEO and Former Chairman of DLF Ltd.
          </p>
        </div>

        {/* Profile Card 2 */}
        <div className="profile-card bg-white rounded shadow-md p-6 w-72 text-center hover:-translate-y-2 transition-transform duration-300 relative">
          <img
            src="https://www.squareyards.com/blog/wp-content/uploads/2023/01/Ashok-Kumar-Tyagi.webp"
            alt="Ashok Kumar Tyagi"
            className="w-24 h-24 rounded-full shadow-md mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Ashok Kumar Tyagi</h3>
          <p className="title text-sm text-gray-600 my-2">CEO</p>
          <p className="description text-sm text-gray-700">
            Ashok Kumar Tyagi, joined as Executive Director in 2008, has been
            entrusted with the role of Chief Executive Officer.
          </p>
        </div>

        {/* Profile Card 3 */}
        <div className="profile-card bg-white rounded shadow-md p-6 w-72 text-center hover:-translate-y-2 transition-transform duration-300 relative">
          <img
            src="https://www.squareyards.com/blog/wp-content/uploads/2023/01/Devinder-Singh.jpg"
            alt="Devinder Singh"
            className="w-24 h-24 rounded-full shadow-md mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Devinder Singh</h3>
          <p className="title text-sm text-gray-600 my-2">CEO</p>
          <p className="description text-sm text-gray-700">
            Devinder Singh joined the firm back in 1985 to oversee the growth
            and development of the firm and now has been entrusted with the
            role of Chief Executive Officer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;