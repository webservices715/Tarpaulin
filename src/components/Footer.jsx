import React from "react";
import { IoIosSend } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import service10 from "../assets/services/service10.jpg";
import service11 from "../assets/services/service11.jpg";
import service12 from "../assets/services/service12.jpg";
import service13 from "../assets/services/service13.jpg";
import service14 from "../assets/services/service14.jpg";
import service15 from "../assets/services/service15.jpg";
import service16 from "../assets/services/service16.jpg";
import service17 from "../assets/services/service17.jpg";
import service18 from "../assets/services/service18.jpg";
const Footer = () => {
  return (
    <footer className="footer-area bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Logo and Info */}
          <div className="space-y-4">
            <a to="index.html">
              <img src={logo} alt="Footer Logo" className="w-24 sm:w-32" />
            </a>
            <div className="mt-6 text-sm sm:text-base text-gray-50">
              <p>GST No: JBPS20751D</p>
              <p>CIN : U13925CT2024PTC016005</p>
              <p>PAN : ABNCS0227N</p>
            </div>

            <div className="working_hours space-y-1">
              <p className="font-bold text-sm sm:text-base">Working Hours:</p>
              <p className="text-sm sm:text-base">
                Monday-Friday: <span className="font-medium">8AM - 6PM</span>
              </p>
              <p className="text-sm sm:text-base">
                Saturday-Sunday: <span className="font-medium">8AM - 12PM</span>
              </p>
            </div>
          </div>

          {/* Footer Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Category</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-[#6345f3] transition-all ease-in-out duration-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className="hover:text-[#6345f3] transition-all ease-in-out duration-300"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="hover:text-[#6345f3] transition-all ease-in-out duration-300"
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-[#6345f3] transition-all ease-in-out duration-300"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Footer Gallery */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Gallery</h4>
            <div className="grid grid-cols-4 gap-2">
              {[
                service10,
                service11,
                service12,
                service13,
                service14,
                service15,
                service16,
                service17,
                service18,
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t flex md:flex-row flex-col gap-4 justify-between border-gray-700 pt-6">
          <div className="flex flex-col gap-2">
            <p>GST No: JBPS20751D</p>
            <p>CIN : U13925CT2024PTC016005</p>
            <p>PAN : ABNCS0227N</p>
          </div>

          <div className="flex flex-wrap items-center justify-between text-sm sm:text-base">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved |
              Made with <i className="fa fa-heart text-red-500"></i> by{" "}
              <a
                href="https://portfolio-tau-six-46.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6345f3] transition-all ease-in-out duration-300"
              >
                GREDX
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-skype"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
