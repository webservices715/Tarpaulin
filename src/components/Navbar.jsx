import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      className={`text-white fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#f6a515]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-around py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-purple-500 font-bold text-xl">
            Boxe
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 relative">
          <li>
            <Link
              to="/"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-orange-600">
              Services
            </Link>
          </li>
          <li>
            <Link to="/delivery" className="hover:text-orange-600">
              Delivery
            </Link>
          </li>
          {/* Blog with Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-orange-600 flex items-center"
            >
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <ul
              className={`absolute left-0 top-10 bg-[#6345FE] text-white shadow-md rounded-md py-2 w-[7rem] transform transition-all duration-200 ${
                isDropdownOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <li>
                <Link
                  to="/blog/category1"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-white text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/category2"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-white text-sm"
                >
                  Single Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/category3"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-white text-sm"
                >
                  Elements
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-600">
              Contact
            </Link>
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
