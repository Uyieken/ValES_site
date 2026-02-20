import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/handshake.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B1F3B]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Secure Your Transactions Across Africa.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          ValES provides a secure marketplace bridge for buyers and sellers. We
          hold the trust so you can grow your business.
        </p>

        <button className="mt-8 px-8 py-4 bg-[#3570fb] hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
          Join the Waitlist
        </button>
      </div>
    </section>
  );
};

export default Hero;
