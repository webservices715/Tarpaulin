import { useState } from "react";
import { MdLocationPin } from "react-icons/md";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, message } = formData;

    // Construct WhatsApp message
    const whatsappMessage = `Hello,
I would like to contact you with the following details:
- Name: ${name}
- Email: ${email}
- Mobile No.: ${mobile}
- Message: ${message}`;

    // WhatsApp API or URL
    const whatsappURL = `https://wa.me/9875563641?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-[60%] md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.27337462716!2d81.95497727581298!3d21.738619578726727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28615c54b848dd%3A0x8d577f28004e851e!2sBhatapara%2C%20Chhattisgarh%20493118!5e0!3m2!1sen!2sin!4v1732296684322!5m2!1sen!2sin"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Head Office
              </h2>
              <p className="mt-1">
                SATYAKARTA SERVICES INDIA PRIVATE LIMITED C/o Vikash Kumar
                Pancholi, R- II Semariyaghat, Bhatapara, Bhatapara, Raipur-
                493118, Chattisgarh
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-purple-500 leading-relaxed">
                satyakarta.sipl@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+91-9883254376, 9875563641</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">
                Mobile No.
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button type="submit" className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
