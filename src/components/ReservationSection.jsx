import React, { useState } from "react";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, serviceType, message } = formData;

    // Construct WhatsApp message
    const whatsappMessage = `Hello, 
I would like to request a service:
- Name: ${name}
- Email: ${email}
- Service Type: ${serviceType}
- Message: ${message}`;

    // WhatsApp API or URL
    const whatsappURL = `https://wa.me/9875563641?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappURL, "_blank");
  };

  return (
    <section>
      <div className="container h-screen mx-auto flex flex-wrap">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-[#6345fe] px-6 sm:px-16 md:px-32 flex flex-col justify-center text-white p-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10">
            Request a Service
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border bg-transparent text-gray-200 border-gray-300 placeholder-white outline-none rounded px-3 py-3"
                  placeholder="Your Name"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Your Name")}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border bg-transparent text-gray-200 border-gray-300 placeholder-white outline-none rounded px-3 py-3"
                  placeholder="Email"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Email")}
                  required
                />
              </div>
              <div className="form-group col-span-2">
                <input
                  type="text"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full border bg-transparent text-gray-200 border-gray-300 placeholder-white outline-none rounded px-3 py-3"
                  placeholder="Service Type"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Service Type")}
                  required
                />
              </div>
              <div className="form-group col-span-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border bg-transparent text-gray-200 border-gray-300 placeholder-white outline-none rounded px-3 py-3"
                  placeholder="Your Message"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Your Message")}
                  required
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-white font-bold text-purple-600 py-3 px-6 sm:py-4 sm:px-8 my-4 hover:bg-gray-200 transition-all duration-300 ease-in-out"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* Text Section - Hidden on small screens */}
        <div
          className="hidden lg:flex w-full lg:w-1/2 items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/12530458/pexels-photo-12530458.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div className="h-full p-6 bg-black bg-opacity-75 text-white px-6 md:px-32 flex flex-col justify-center items-start">
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-2">
              Our Expertise
            </h2>
            <p className="my-4 sm:my-6 text-lg">
              We deliver customized logistics solutions tailored to your
              business needs, ensuring seamless operations and on-time
              deliveries.
            </p>
            <a
              href="#"
              className="bg-white text-purple-600 py-2 px-4 sm:py-2 sm:px-6 font-bold rounded hover:bg-gray-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
