import { useState } from "react";
import { MdLocationPin } from "react-icons/md";

function ContactForm() {
  const [showMoreCities, setShowMoreCities] = useState(false);

  const toggleCities = () => {
    setShowMoreCities(!showMoreCities);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-[60%] md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Head Office
              </h2>
              <p className="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-purple-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>

        </div>
        <div className="lg:w-[40%] md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Mobile No.
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Button
          </button>


          <div className="flex-1 py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Offices
            </h3>
            <div className="office-list space-y-4">
              {/* <div className="office-item flex items-start gap-4 bg-white p-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
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
              </div> */}

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
              <div className="office-item flex items-start gap-4 bg-white p-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
                <MdLocationPin size={30} className="text-purple-700 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                  Haldia
                  </h4>
                  <p className="text-gray-600">West Bengal, India</p>
                </div>
              </div>


              {/* More Cities - Initially hidden */}
              {showMoreCities &&
                [
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

        </div>
      </div>
    </section>
  );
}

export default ContactForm;
