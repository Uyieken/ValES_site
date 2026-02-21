import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLink = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B1F3B] text-white pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand & Address */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold mb-6 text-white">
              ValES<span className="text-[#3570fb]">.</span>
            </h3>

            <div className="space-y-4 text-gray-400 text-sm max-w-sm">
              <p className="font-semibold text-white">Vales Concepts LTD.</p>

              <p className="leading-relaxed">
                Registered Office: 5, KOLAWOLE STREET, ADDO ROAD, LEKKI, LAGOS
                STATE, NIGERIA
              </p>

              <div className="pt-2">
                <p className="flex items-center gap-2">
                  <span className="text-[#3570fb]">✉</span>
                  support@vales.africa
                </p>
                <p className="flex items-center gap-2 mt-1">
                  <span className="text-[#3570fb]">📞</span>
                  +2347069154688
                </p>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Product
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => handleScrollLink("how")}
                  className="hover:text-[#3570fb] transition"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollLink("refund")}
                  className="hover:text-[#3570fb] transition"
                >
                  Refund Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollLink("why")}
                  className="hover:text-[#3570fb] transition"
                >
                  Marketplace Use Cases
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Legal
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link to="/terms" className="hover:text-[#3570fb] transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#3570fb] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance"
                  className="hover:text-[#3570fb] transition"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Secure Payments */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Secure Payments
            </h4>

            <div className="p-4 rounded-xl border border-gray-700 bg-gray-800/30">
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-2 tracking-tighter">
                Powered by
              </p>

              <p className="text-white font-black text-lg">Paystack</p>

              <p className="text-[10px] text-gray-500 mt-2">
                PCI-DSS Level 1 Certified Secure Payment Processing
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Section */}
        <div className="border-t border-gray-800 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-[11px] text-gray-500 leading-relaxed uppercase font-bold">
                Regulatory Disclosure
              </p>

              <p className="text-xs text-gray-400 leading-relaxed italic">
                ValES is a digital marketplace technology platform provided by
                Vales Concepts LTD. ValES is not a bank, financial institution,
                or licensed deposit-taker. All payment facilitation is handled
                by licensed payment service providers.
              </p>
            </div>

            <div className="md:text-right flex flex-col md:items-end justify-between h-full">
              <div className="flex space-x-6 mb-4">
                <a href="#" className="text-gray-400 hover:text-white text-xs">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-xs">
                  Twitter (X)
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-xs">
                  LinkedIn
                </a>
              </div>

              <p className="text-[10px] text-gray-600">
                © {new Date().getFullYear()} Vales Concepts LTD. RC: 9286202
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
