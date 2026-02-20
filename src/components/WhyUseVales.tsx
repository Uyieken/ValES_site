import React from "react";

const segments = [
  {
    title: "Social Commerce Vendors",
    highlight: "Stop 'Pay on Delivery' Losses",
    desc: "Convert hesitant buyers by offering a secure bridge. Guarantee payment before you ship, while giving your customers total peace of mind.",
    tag: "Growth",
  },
  {
    title: "Online Buyers",
    highlight: "Shop Without Fear",
    desc: "No more getting 'ghosted' after payment. Your funds are held securely and only released when you confirm you've received exactly what you ordered.",
    tag: "Security",
  },
  {
    title: "Service Providers",
    highlight: "Milestone-Based Safety",
    desc: "Freelancers and agencies can structure payments around specific deliverables. Get paid for your work, on time, every time.",
    tag: "Work",
  },
];

const WhyUseVales: React.FC = () => {
  return (
    <section id="why" className="relative bg-[#F9FAFB] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-[#3570fb] font-bold tracking-widest uppercase text-xs">
            Marketplace Impact
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#0B1F3B] tracking-tight">
            Who is <span className="text-[#3570fb]">ValES</span> for?
          </h2>

          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Whether you are shipping a physical product or delivering a digital
            service, ValES creates the accountability you need to close the
            deal.
          </p>
        </div>

        {/* Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Changed bg-emerald-50 to bg-blue-50 */}
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#3570fb] text-[10px] font-bold uppercase mb-6">
                  {segment.tag}
                </div>

                <h3 className="text-2xl font-bold text-[#0B1F3B] mb-2 leading-tight">
                  {segment.title}
                </h3>

                <p className="text-[#3570fb] font-semibold text-sm mb-6 uppercase tracking-tight">
                  {segment.highlight}
                </p>

                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {segment.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUseVales;
