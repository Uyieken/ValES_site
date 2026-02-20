import React from "react";

const steps = [
  {
    title: "Initiate Agreement",
    desc: "Buyer and Seller set clear terms for price and delivery timeline through a ValES transaction link.",
    icon: "🤝",
  },
  {
    title: "Secure Verification",
    desc: "Funds are processed via Paystack and verified against the transaction's unique security protocol.",
    icon: "🛡️",
  },
  {
    title: "Service Fulfillment",
    desc: "Seller ships the order and uploads proof of fulfillment to the ValES dashboard for tracking.",
    icon: "📦",
  },
  {
    title: "Automated Release",
    desc: "Once delivery is confirmed by the buyer, funds are instantly settled to the seller's account.",
    icon: "💰",
  },
];

const HowTheProcessWorks: React.FC = () => {
  return (
    <section
      className="relative bg-[#F9FAFB] py-28 px-6 overflow-hidden"
      id="how"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#10B981_0.5px,transparent_0.5px)] bg-size-[24px_24px] opacity-10" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#3570fb] font-bold tracking-wide uppercase text-[10px] mb-4">
            The ValES Protocol
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1F3B] tracking-tight">
            Simple. Structured. <span className="text-[#3570fb]">Secure.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We’ve removed the guesswork from African commerce with a
            standardized workflow that protects your money and your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="group relative text-center">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-linear-to-r from-blue-400 to-transparent z-0" />
              )}

              {/* Icon & Number */}
              <div className="relative z-10 mx-auto w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-xl group-hover:shadow-blue-100 transition-all duration-300 border border-gray-100">
                <span className="text-3xl">{step.icon}</span>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0B1F3B] text-white text-xs flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="mt-8 text-xl font-bold text-[#0B1F3B]">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-500 text-sm leading-relaxed px-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dispute Resolution Box */}
        <div className="mt-24 p-8 rounded-3xl bg-white border border-gray-200 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
            <span className="text-red-500 text-xl">⚖️</span>
          </div>
          <div className="text-left">
            <h4 className="text-[#0B1F3B] font-bold text-lg">
              Fair Dispute Resolution
            </h4>
            <p className="text-gray-500 text-sm mt-1">
              If an issue arises, our neutral mediation team reviews the
              structured evidence to ensure a fair outcome based on your initial
              agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTheProcessWorks;
