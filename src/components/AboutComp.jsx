import React from "react";
import aboutUsImg from "../assets/Picture-2.jpg";

function AboutComp() {
  return (
    <section className="py-16">
      {/* For LG Screens */}
      <div className="h-auto relative -z-50">

        <div className="hidden lg:block absolute top-[50%] left-[15%]">
          <div className="container flex z-50">
            {/* Purple Card */}
            <div className="bg-[#6345FE] text-white p-6 relative w-[38vw] h-[32rem] border-white border-[13px]">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="bg-orange-400 w-[70px] h-[15px] rounded-full mt-1"></span>
                  <p>
                    Satyakarta is a growing organization specializing in covering
                    commodity-loaded rakes with tarpaulins, providing escorting
                    services, and other value-added services across India. Our skilled
                    team ensures professional and efficient operations.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-orange-400 w-[70px] h-[15px] rounded-full mt-1"></span>
                  <p>
                    We offer specialized services for rake and plot covering,
                    escorting coal and mineral products from mines, ports, and sidings
                    to customer facilities. Our trained staff ensures material safety
                    during transit, minimizing pilferage and transportation losses
                    while providing cost-effective solutions.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-orange-400 w-[70px] h-[15px] rounded-full mt-1"></span>
                  <p>
                    To enhance security, we supply tarpaulins for protection
                    against theft, rain, and pollution, and deploy experienced guards
                    to safeguard rakes and materials. With strategically located
                    offices, we are equipped to serve customers nationwide, delivering
                    reliable and trusted services tailored to their needs.
                  </p>
                </div>
                <div className="mt-4">
                  <strong>Founded:</strong> 16th March 2024
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
        <div className="lg:hidden flex flex-col px-4">
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
          <div className="bg-[#6345FE] text-white p-6 w-full border-white">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="bg-orange-400 w-[70px] h-[10px] rounded-full mt-2"></span>
                <p>
                  Satyakarta is a growing organization specializing in covering
                  commodity-loaded rakes with tarpaulins, providing escorting
                  services, and other value-added services across India. With over 20
                  years of experience, our skilled team ensures professional and
                  efficient operations.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-orange-400 w-[70px] h-[10px] rounded-full mt-2"></span>
                <p>
                  We offer specialized services for rake and plot covering,
                  escorting coal and mineral products from mines, ports, and sidings
                  to customer facilities. Our trained staff ensures material safety
                  during transit, minimizing pilferage and transportation losses while
                  providing cost-effective solutions.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-orange-400 w-[70px] h-[10px] rounded-full mt-2"></span>
                <p>
                  To enhance security, we supply tarpaulins for protection against
                  theft, rain, and pollution, and deploy experienced guards to
                  safeguard rakes and materials. With strategically located offices,
                  we are equipped to serve customers nationwide, delivering reliable
                  and trusted services tailored to their needs.
                </p>
              </div>
              <div className="mt-4">
                <strong>Founded:</strong> 16th March 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComp;
