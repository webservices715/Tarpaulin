import React from "react";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer-area bg-gray-900 text-white ">
      <div className="container mx-auto px-40 py-24"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Logo and Info */}
          <div className="space-y-4">
            <a href="index.html">
              <img src="https://preview.colorlib.com/theme/boxe/img/footer-logo.png" alt="Footer Logo" className="w-32" />
            </a>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat. Uis aute
              irure dolor.
            </p>
            <div className="working_hours space-y-1">
              <p className="font-bold">Working Hours:</p>
              <p>Monday-Friday: <span className="font-medium">8AM - 6PM</span></p>
              <p>Saturday-Sunday: <span className="font-medium">8AM - 12PM</span></p>
            </div>
          </div>

          {/* Footer Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Category</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6345f3] transition-all ease-in-out duration-300">About</a></li>
              <li><a href="#" className="hover:text-[#6345f3] transition-all ease-in-out duration-300">Services</a></li>
              <li><a href="#" className="hover:text-[#6345f3] transition-all ease-in-out duration-300">Gallery</a></li>
              <li><a href="#" className="hover:text-[#6345f3] transition-all ease-in-out duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Footer Gallery */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Gallery</h4>
            <div className="grid grid-cols-4 gap-2">
              <img src="https://uispl.in/wp-content/uploads/2022/06/Picture-1-300x300.jpg" alt="Gallery" className="w-full" />
              <img src="https://uispl.in/wp-content/uploads/2022/06/Picture-6-1-300x300.jpg" alt="Gallery" className="w-full" />
              <img src="https://uispl.in/wp-content/uploads/2022/06/Plot-covering-by-Bumboo-2-300x300.jpg" alt="Gallery" className="w-full" />
              <img src="https://uispl.in/wp-content/uploads/2022/06/Plot-Cov-2-300x300.jpg" alt="Gallery" className="w-full" />
              <img src="https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-5.08.49-PM-1-300x300.jpeg" alt="Gallery" className="w-full" />
              <img src="https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.38-PM-300x300.jpeg" alt="Gallery" className="w-full" />
              <img src="https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.40-PM-1-300x300.jpeg" alt="Gallery" className="w-full" />
              <img src="https://uispl.in/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-01-at-4.57.47-PM-1-300x300.jpeg" alt="Gallery" className="w-full" />
            </div>
          </div>

          {/* Footer Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="mb-4">
              For business professionals caught between high OEM price and mediocre print and graphic output.
            </p>
            <form
              target="_blank"
              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
              method="get"
              className="flex items-center gap-2"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Your Email Address"
                className="flex-1 p-2  bg-transparent outline-none  border border-white text-white placeholder-white"
                required
              />
              <button type="submit" className="p-2 bg-[#6345fe] text-white  hover:bg-[#6345fe]">
                <IoIosSend size={26} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <div className="flex flex-wrap items-center justify-between">
            <p className="text-sm">
              Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{" "}
              <i className="fa fa-heart text-red-500"></i> by{" "}
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#6345f3] transition-all ease-in-out duration-300">
                GREDX
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-skype"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
