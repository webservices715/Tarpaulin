import React from "react";
import service01 from "../assets/services/service01.jpeg";
const Breadcrumb = ({title,image}) => {
  return (
    <div className="relative w-full h-[35rem]">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={service01}
        alt="Background"
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>
    </div>

    {/* Text Content */}
    <div className="relative z-10 flex items-center justify-center h-full">
      <h1 className="text-6xl md:text-8xl font-bold text-orange-500">
        {title}
      </h1>
    </div>
  </div>

  );
};

export default Breadcrumb;
