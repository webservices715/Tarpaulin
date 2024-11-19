import React from "react";

const Breadcrumb = ({title,image}) => {
  return (
    <div className="relative w-full h-[35rem]">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src="https://images.pexels.com/photos/6572431/pexels-photo-6572431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Ship Background"
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
