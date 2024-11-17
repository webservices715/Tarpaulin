import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-around py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-purple-500 font-bold text-xl">Boxe</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-600">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-600">
              Delivery
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-600">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Search Icon */}
        <div className="hidden md:block">
          <button className="text-white hover:text-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l5 5m-5-5a7 7 0 11-10-10 7 7 0 0110 10z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
