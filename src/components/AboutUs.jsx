import React from "react";
import aboutUsImg from "../assets/aboutUs.jpg";
const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12 ml-24 mt-24 h-[80vh] relative -z-50">
      <div className="absolute top-[-6%]  left-[15%]">
        <div className="container flex z-50">
          <div className="bg-[#6345FE] text-white p-6 rounded-lg shadow-lg relative w-[35vw] h-[25rem]  border-white border-[13px]">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="bg-orange-400 h-4 w-4 rounded-full mt-1"></span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-orange-400 h-4 w-4 rounded-full mt-1"></span>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                  viverra Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[30vw] h-[20rem]  flex justify-center text-[30px] font-[700] text-[#6345FE]">
            About Us
          </div>
        </div>
        <div className="">
          <img
            src={aboutUsImg}
            alt="About Us"
            className="w-full h-full object-cover top-[80%] left-[15%] -z-40 absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
