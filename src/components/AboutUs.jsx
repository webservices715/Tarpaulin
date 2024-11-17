import React from "react";

function AboutUs() {
  return (
    <section className="py-12 h-auto relative -z-50">
      {/* For LG Screens */}
      <div className="hidden lg:block absolute top-[50%] left-[15%]">
        <div className="container flex z-50">
          {/* Purple Card */}
          <div className="bg-[#6345FE] text-white p-6 relative w-[38vw] h-[25rem] border-white border-[13px]">
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
          {/* "About Us" Text */}
          <div className="w-[30vw] h-[20rem] mt-14 flex justify-center text-[40px] font-[700] text-[#6345FE]">
            About Us
          </div>
        </div>
        {/* Image */}
        <div className="">
          <img
            src={aboutUsImg}
            alt="About Us"
            className="w-[60rem] h-[30rem] object-contain top-[80%] left-[15%] -z-40 absolute"
          />
        </div>
      </div>

      {/* For SM and MD Screens */}
      <div className=" lg:hidden flex flex-col  px-4">
        {/* "About Us" Text */}
        <div className="text-[28px] mb-2 font-[700] text-[#6345FE]">
          About Us
        </div>

        {/* Image */}
        <img
          src={aboutUsImg}
          alt="About Us"
          className="w-full h-[40vh] object-cover"
        />

        {/* Purple Card */}
        <div className="bg-[#6345FE] text-white p-6 w-full border-white ">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="bg-orange-400 h-4 w-4 rounded-full mt-1"></span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-orange-400 h-4 w-4 rounded-full mt-1"></span>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
