import React from "react";

const ReservationSection = () => {
  return (
    <section className="py-10">
      <div className="container h-screen  mx-auto flex  flex-wrap">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-[#6345fe] px-32 flex flex-col justify-center  text-white p-10">
          <h2 className="text-5xl font-bold mb-14">Get A Quote</h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="form-group">
                <input
                  type="text"
                  className="w-full border bg-transparent text-gray-200 border-gray-300 placeholder-white outline-none rounded px-3 py-3"
                  placeholder="Name"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Name")}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="w-full border bg-transparent text-gray-200 border-gray-300 placeholder-white outline-none rounded px-3 py-3"
                  placeholder="Email or phone"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Email or phone")}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="w-full border bg-transparent text-gray-200 border-gray-300 placeholder-white outline-none rounded px-3 py-3"
                  placeholder="Departure"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Departure")}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="w-full border bg-transparent text-gray-200 border-gray-300 placeholder-white outline-none rounded px-3 py-3"
                  placeholder="Arrival"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Arrival")}
                />
              </div>
              <div className="form-group col-span-2">
                <input
                  type="text"
                  className="w-full border bg-transparent text-gray-200 border-gray-300 placeholder-white outline-none rounded px-3 py-3"
                  placeholder="Cargo Description"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Cargo Description")}
                />
              </div>
              <div className="form-group col-span-2">
                <input
                  type="text"
                  className="w-full border bg-transparent text-gray-200 border-gray-300 placeholder-white outline-none rounded px-3 py-3"
                  placeholder="Transportation Method"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Transportation Method")}
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-white font-bold text-purple-600 py-5 px-8 my-4 hover:bg-gray-200 transition-all duration-300 ease-in-out">
                GET A QUOTE
              </button>
            </div>
          </form>
        </div>

        {/* Text Section */}
        <div
          className="w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/12530458/pexels-photo-12530458.jpeg?auto=compress&cs=tinysrgb&w=600')" }} 
        >
          <div className="h-full p-6 bg-black bg-opacity-75 text-white px-32 flex flex-col justify-center items-start">
            <h2 className="text-5xl font-bold mb-4">Are You A Sender?</h2>
            <p className="my-6">
              Abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip. Labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              className="bg-white text-purple-600 py-2 px-6 font-bold rounded hover:bg-gray-200"
            >
              Check Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
