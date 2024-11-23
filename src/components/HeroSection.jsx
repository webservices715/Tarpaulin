import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "./Navbar";
import herosectionimage from "../assets/herosection.jpg";
import service35 from "../assets/services/service35.jpg";

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (phoneNumber) {
      // Construct the WhatsApp message including the phone number
      const whatsappMessage = `Hello, 
I would like to get in touch with you.
User's Phone Number: ${phoneNumber}`;

      // Replace '9875563641' with your WhatsApp number
      const whatsappURL = `https://wa.me/9875563641?text=${encodeURIComponent(whatsappMessage)}`;

      // Open WhatsApp URL in a new tab
      window.open(whatsappURL, "_blank");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${service35})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-32">
          <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:mb-6 mb-4 md:leading-snug text-white">
              Satyakarta
            </h1>
           
            {/* Input Group */}
            <div className="flex items-center justify-center  md:justify-start w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto md:mx-0">
              <select className="h-16 lg:h-16 px-3 md:px-4 text-sm md:text-base lg:text-lg text-gray-600 border-none outline-none rounded-l-md">
             
                <option value="+91">+91 (IN)</option>

              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="h-16 lg:h-16 px-2 md:px-4 flex-grow text-sm md:text-base lg:text-lg text-black border-none outline-none"
              />
              <button
                onClick={handleSubmit}
                className="h-16 lg:h-16 bg-yellow-500 px-5 md:px-5 lg:px-6 text-white hover:bg-yellow-600"
              >
                <FiArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
