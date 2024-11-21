import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle mobile menu
  };

  return (
    <nav
      className={`text-white fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#f6a515]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <div className="flex items-center ">
          <Link to="/" className="text-purple-500 font-bold text-xl">
            <img src={logo} alt="Logo" className="w-16"  />
          </Link>
        </div>

        {/* Menu for desktop */}
        <ul className="hidden md:flex space-x-12 relative">
          <li>
            <Link
              to="/"
              className="text-purple-500 hover:text-purple-600 font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-600 font-bold">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-purple-600 font-bold">
              Services
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-purple-600 font-bold">
              Photo Gallery
            </Link>
          </li>
          {/* Blog with Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-purple-600 font-bold flex items-center"
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
                  className="block px-4 py-2 hover:bg-purple-500 hover:text-white text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/category2"
                  className="block px-4 py-2 hover:bg-purple-500 hover:text-white text-sm"
                >
                  Single Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/category3"
                  className="block px-4 py-2 hover:bg-purple-500 hover:text-white text-sm"
                >
                  Elements
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-600 font-bold">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search Icon */}
        <div className="hidden md:block">
          <button
            className="text-white hover:text-purple-600 font-bold"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
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

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden absolute top-6 right-6">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-purple-600 font-bold"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#6345FE] text-white shadow-lg transition-all duration-300 ease-in-out">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <Link
                to="/"
                className="block text-purple-500 hover:text-purple-600 font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-600 font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-purple-600 font-bold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-purple-600 font-bold">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-600 font-bold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {isSearchOpen && (
        <div className="absolute h-[3rem] top-16 left-0 right-0 mx-auto w-[calc(100%-15rem)] bg-[#6345FE] shadow-lg transition-all duration-1000 ease-in-out">
          <input
            type="text"
            className="w-full rounded-md bg-[#6345FE] focus:outline-none px-4 text-white placeholder-white py-2 transition-all duration-800 ease-in-out"
            placeholder="Search..."
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
