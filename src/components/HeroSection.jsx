import herosectionimage from "../assets/banner_bg.png";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${herosectionimage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-32">
        <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:mb-6 mb-4 md:leading-snug text-white">
            Run on the
            <span className="block md:py-2">rocky streets</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-xl lg:text-2xl md:mb-8 text-white">
            Fast Landing Delivery
            <span className="block md:py-2 mb-10 md:mb-0">For Your Goods Business</span>
          </p>

          {/* Input Group */}
          <div className="flex items-center justify-center  md:justify-start w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto md:mx-0">
            <select className="h-16 lg:h-16 px-3 md:px-4 text-sm md:text-base lg:text-lg text-gray-600 border-none outline-none rounded-l-md">
              {/* Country Codes */}
              <option value="+1">+1 (US)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+33">+33 (FR)</option>
              <option value="+91">+91 (IN)</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              className="h-16 lg:h-16 px-3 md:px-4 flex-grow text-sm md:text-base lg:text-lg text-black border-none outline-none"
            />
            <button className="h-16 lg:h-16 bg-yellow-500 px-5 md:px-5 lg:px-6 text-white hover:bg-yellow-600">
              <FiArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
