import React from "react";

const clients = [
  {
    logo: "https://uispl.in/wp-content/uploads/2022/06/acc.png",
    description: "Leading company in tech solutions.",
  },
  {
    logo: "https://uispl.in/wp-content/uploads/2022/06/Ambuja-cement.png",
    description: "Specialized in sustainable products.",
  },
  {
    logo: "https://uispl.in/wp-content/uploads/2022/06/mp-birla.png",
    description: "Top-rated service provider worldwide.",
  },
  // {
  //   name: "Client Three",
  //   logo: "https://via.placeholder.com/100",
  //   description: "Top-rated service provider worldwide.",
  // },
  // {
  //   name: "Client Three",
  //   logo: "https://via.placeholder.com/100",
  //   description: "Top-rated service provider worldwide.",
  // },
  // {
  //   name: "Client Three",
  //   logo: "https://via.placeholder.com/100",
  //   description: "Top-rated service provider worldwide.",
  // },
  // {
  //   name: "Client Three",
  //   logo: "https://via.placeholder.com/100",
  //   description: "Top-rated service provider worldwide.",
  // },
];

const OurClients = () => {
  // Duplicate the client list to create a seamless loop
  const extendedClients = [...clients, ...clients];

  return (
    <div className="relative w-full max-w-5xl py-14 mx-auto overflow-hidden">
      {/* Heading */}
      <h2 className="pt-4 text-center text-3xl font-bold text-[#6345fe] mb-6">Our Clients</h2>

      {/* Infinite Scroll Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-6 my-3">
          {extendedClients.map((client, index) => (
            <div
              key={index}
              className="flex-none w-80 px-4 py-8 bg-white rounded-lg"
            >
              <div className="text-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="mx-auto w-32 h-32 object-contain"
                />
                <h3 className="mt-4 text-lg font-semibold">{client.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
