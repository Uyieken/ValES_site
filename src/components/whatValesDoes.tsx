import React from "react";

const features = [
  {
    title: "Secure Transaction Tracking",
    desc: "Full visibility from transaction creation to delivery confirmation. Every step is logged and traceable in real-time.",
  },
  {
    title: "Structured Release Workflow",
    desc: "Funds are released only after predefined confirmation steps are completed, reducing risk for both parties.",
  },
  {
    title: "Transparent Refund Rules",
    desc: "Objective, pre-defined eligibility criteria remove ambiguity and reduce unnecessary disputes.",
  },
  {
    title: "Vendor Reputation Scoring",
    desc: "Performance-based analytics highlight reliable vendors and build long-term marketplace trust.",
  },
];

const WhatValesDoes: React.FC = () => {
  return (
    <section id="what" className="relative bg-white py-28 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[10%] right-[-5%] w-125 h-125 bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* TEXT SIDE */}
            <div className="flex-[1.2] text-center lg:text-left z-10">
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">
                Safety-First Infrastructure
              </span>

              <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-[#0B1F3B] leading-[1.1] tracking-tight">
                Trust is our <br />
                <span className="text-blue-600">Native Language.</span>
              </h2>

              <p className="mt-8 text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Vales is a structured transaction layer that ensures money moves
                only when agreed conditions are met. No ghosting. No ambiguity.
              </p>

              <p className="mt-6 text-sm md:text-base text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transactions are created within Vales, payments are securely
                processed via licensed payment partners, and funds are released
                only after confirmation requirements are satisfied.
              </p>
            </div>

            {/* LOCK IMAGE SIDE */}
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-blue-400 opacity-20 blur-[80px] rounded-full animate-pulse" />

              <img
                src="/lock.png"
                alt="Security Lock Illustration"
                className="relative z-10 w-60 sm:w-72 md:w-105 lg:w-120 
                           h-auto object-contain 
                           drop-shadow-[0_35px_60px_rgba(53,112,251,0.3)] 
                           animate-[float_6s_ease-in-out_infinite]"
              />

              {/* Floating Badge */}
              <div className="absolute top-8 right-0 z-20 bg-white/80 backdrop-blur-md border border-blue-100 p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-ping" />
                <span className="text-[10px] font-black uppercase text-[#0B1F3B]">
                  Structured Release Protocol
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-3xl border border-slate-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 h-full w-2 bg-blue-600 rounded-l-3xl opacity-10 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-xl font-bold text-[#0B1F3B] group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= COMPLIANCE BAR ================= */}
        <div className="mt-32">
          <div className="bg-[#0B1F3B] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl border border-blue-900/50">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-[100px]" />

            <div className="relative z-10 flex flex-col items-center">
              <p className="text-sm md:text-lg font-medium opacity-90 max-w-2xl leading-relaxed">
                Payments are securely processed via licensed payment providers
                such as{" "}
                <span className="mx-1 font-semibold text-blue-400">
                  Paystack
                </span>
                . Vales operates strictly as a technology platform and does not
                hold customer deposits.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
                {[
                  "🛡️ PCI-DSS Level 1 Processing",
                  "🔗 256-Bit SSL Encryption",
                  "⚡ Audit-Trailed Transactions",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-blue-300/50"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Float Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default WhatValesDoes;
